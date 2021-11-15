import React, { useEffect, useState } from 'react';
import axios from "axios";

const url = "http://127.0.0.1:2520/productos/";

const Tienda = () => {

    const [data, setData] = useState([]);

    const peticionGet = async () => {
        await axios.get(url).then(response=>{
            setData(response.data);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    useEffect(() => {
        peticionGet();
    },[])

    return (
        <section class="main__tienda">
            <aside class="tienda__filtros">
                <div class="filtros__categoria">
                    <h4 class="filtros--subtitle">FILTRAR POR CATEGORIA</h4>
                    <div class="categoria__input">
                        <span class="input--title">Pantalones</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="categoria" id="pantalones"/>
                            <span class="input--count">2</span>
                        </div>
                    </div>
                    <div class="categoria__input">
                        <span class="input--title">Remeras</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="categoria" id="remeras"/>
                            <span class="input--count">2</span>
                        </div>
                    </div>
                    <div class="categoria__input">
                        <span class="input--title">Sweaters</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="categoria" id="sweaters"/>
                            <span class="input--count">2</span>
                        </div>
                    </div>
                </div>

                <div class="filtros__color">
                    <h4 class="filtros--subtitle">FILTRAR POR COLOR</h4>
                    <select class="color__select">
                        <option value>Cualquier Color</option>
                        <option value="coral">Coral</option>
                        <option value="orquidea">Orquidea</option>
                        <option value="celeste">Celeste</option>
                        <option value="beige">Beige</option>
                        <option value="mostaza">Mostaza</option>
                        <option value="camel">Camel</option>
                        <option value="grismelange">Gris Melange</option>
                        <option value="negro">Negro</option>
                        <option value="crudo">Crudo</option>
                        <option value="fucsia">Fucsia</option>
                    </select>
                </div>

                <div class="filtros__talle">
                    <h4 class="filtros--subtitle">FILTRAR POR TALLE</h4>
                    <div class="talle__input">
                        <span class="input--title">Small</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="talle" id="small"/>
                            <span class="input--count">6</span>
                        </div>
                    </div>
                    <div class="talle__input">
                        <span class="input--title">Medium</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="talle" id="medium"/>
                            <span class="input--count">6</span>
                        </div>
                    </div>
                    <div class="talle__input">
                        <span class="input--title">Large</span>
                        <div class="input__input">
                            <input class="input--input" type="checkbox" name="talle" id="large"/>
                            <span class="input--count">6</span>
                        </div>
                    </div>
                </div>
            </aside>
            <div class="tienda__productos">
                <ul id="productosUl" class="productos__lista">
                    {data.map(producto=>{
                        return(
                            <li class="lista__item">
                                {producto.precio_descuento ? (
                                    <a class="item__link descuento" href={producto.producto.split(' ').join('-').toLowerCase()}>
                                        <img class="item__link--img fimg" src={producto.imgs.split(', ')[0]} alt="FOTO DEL PRODUCTO"/>
                                        <img class="item__link--img simg" src={producto.imgs.split(', ')[1]} alt="FOTO DEL PRODUCTO"/>
                                        <h3 class="item__link--title">{producto.producto.toUpperCase()}</h3>
                                        <div class="link__precio">
                                            <span class="link__precio--precio descuento">${producto.precio}</span>
                                            <span class="link__precio--precio">${producto.precio_descuento}</span>
                                            <p class="link__precio--iva">- IVA Incluido</p>
                                        </div>
                                    </a>
                                ) : (
                                    <a class="item__link" href={producto.producto.split(' ').join('-').toLowerCase()}>
                                        <img class="item__link--img fimg" src={producto.imgs.split(', ')[0]} alt="FOTO DEL PRODUCTO"/>
                                        <img class="item__link--img simg" src={producto.imgs.split(', ')[1]} alt="FOTO DEL PRODUCTO"/>
                                        <h3 class="item__link--title">{producto.producto.toUpperCase()}</h3>
                                        <div class="link__precio">
                                            <span class="link__precio--precio">${producto.precio}</span>
                                            <p class="link__precio--iva">- IVA Incluido</p>
                                        </div>
                                    </a>
                                )}
                            </li>
                        )
                    })}
                </ul>
                <div class="productos__bottom">
                    <div class="bottom--linea"></div>
                    <button class="bottom--boton show" id="cargarMas">CARGAR MAS<i class='bx bx-chevron-down'></i></button>
                    <div class="bottom--linea"></div>
                </div>
            </div>
        </section>
    );
}

export default Tienda;