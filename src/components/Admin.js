import React, { Component } from 'react';
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import 'boxicons';

const url = "http://127.0.0.1:2520/productos/";

class Admin extends Component {

    state={
        data: [],
        modalInsertar: false,
        modalEliminar: false,
        tipoModal: '',
        form: {
            id: 0,
            producto: '',
            precio: 0,
            precio_descuento: 0,
            imgs: '',
            colores: ''
        }
    }
      
    peticionGet = () => {
        axios.get(url).then(response=>{
            this.setState({data: response.data});
        }).catch(error=>{
            console.log(error.message);
        })
    }
      
    peticionPost = async()=>{
        delete this.state.form.id;
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
      
    peticionPut = () => {
        axios.put(url+this.state.form.id, this.state.form).then(response=>{
            this.modalInsertar();
            this.peticionGet();
        })
    }
      
    peticionDelete = () => {
        axios.delete(url+this.state.form.id).then(response=>{
            this.setState({modalEliminar: false});
            this.peticionGet();
        })
    }
      
    modalInsertar = () => {
        this.setState({modalInsertar: !this.state.modalInsertar});
    }
      
    seleccionarProducto = (producto) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: producto.id,
                producto: producto.producto,
                precio: producto.precio,
                precio_descuento: producto.precio_descuento,
                imgs: producto.imgs,
                colores: producto.colores
            }
        })
    }
      
    handleChange = async e => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
      
    componentDidMount = () => {
        this.peticionGet();
    }

    render () {
        const {form} = this.state;

        return (
            <>
                <button onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Precio Descuento</th>
                            <th>Imagenes</th>
                            <th>Colores</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(producto=>{
                            return(
                                <tr>
                                    <th>{producto.id}</th>
                                    <th>{producto.producto}</th>
                                    <th>${new Intl.NumberFormat("es-AR").format(producto.precio)}</th>
                                    {producto.precio_descuento ? 
                                        <th>${new Intl.NumberFormat("es-AR").format(producto.precio_descuento)}</th>
                                        :
                                        <th>SIN DESCUENTO</th>
                                    }
                                    
                                    <th>{producto.imgs}</th>
                                    <th>{producto.colores}</th>
                                    <th>
                                        <button onClick={()=>{this.seleccionarProducto(producto); this.modalInsertar()}}><box-icon type='solid' name='edit'></box-icon></button>
                                        <button onClick={()=>{this.seleccionarProducto(producto); this.setState({modalEliminar: true})}}><box-icon name='trash' ></box-icon></button>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader style={{display: 'block'}}>
                        <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <label htmlFor="id">ID</label>
                            <input type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                            <br/>
                            <label htmlFor="producto">Producto</label>
                            <input type="text" name="producto" id="producto" onChange={this.handleChange} value={form?form.producto: ''}/>
                            <br/>
                            <label htmlFor="precio">Precio</label>
                            <input type="text" name="precio" id="precio" onChange={this.handleChange} value={form?form.precio: ''}/>
                            <br/>
                            <label htmlFor="precio_descuento">Precio Descuento</label>
                            <input type="text" name="precio_descuento" id="precio_descuento" onChange={this.handleChange} value={form?form.precio_descuento:''}/>
                            <br/>
                            <label htmlFor="precio_descuento">Imagenes</label>
                            <input type="text" name="imgs" id="imgs" onChange={this.handleChange} value={form?form.imgs:''}/>
                            <br/>
                            <label htmlFor="precio_descuento">Colores</label>
                            <input type="text" name="colores" id="colores" onChange={this.handleChange} value={form?form.colores:''}/>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.tipoModal === 'insertar' ? (
                            <button onClick={()=>this.peticionPost()}>Insertar</button> 
                        ) : (
                            <button onClick={()=>this.peticionPut()}>Actualizar</button>
                        )}
                        <button onClick={()=>this.modalInsertar()}>Cancelar</button>
                    </ModalFooter>
                </Modal>


                <Modal isOpen={this.state.modalEliminar}>
                    <ModalBody>Estás seguro que deseas eliminar el producto {form && form.producto}</ModalBody>
                    <ModalFooter>
                        <button onClick={()=>this.peticionDelete()}>Sí</button>
                        <button onClick={()=>this.setState({modalEliminar: false})}>No</button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}

export default Admin;