import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

const url = "http://127.0.0.1:2520/productos/";

const Producto = () => {

    const [data, setData] = useState([]);

    let location = useLocation().pathname.slice(1);

    let i = 0;

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
        <>
            {data.map(producto => {
                if(producto.producto.split(' ').join('-').toLowerCase() === location) {
                    return(
                        <section class="main__producto">
                            <article class="producto__imgs">
                                <div id="producto" class="imgs__imgGrande carousel slide" data-bs-ride="false" data-bs-interval="false">
                                    {producto.imgs.split(', ').map(img => {
                                        if(producto.imgs.split(', ')[0] === img) {
                                            return(
                                                <div class="carousel-item active">
                                                    <img class="imgs__imgGrande--img" src={img} alt="Foto del Producto" />
                                                </div>
                                            )
                                        } else {
                                            return(
                                                <div class="carousel-item">
                                                    <img class="imgs__imgGrande--img" src={img} alt="Foto del Producto" />
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="imgs__restoImgs">
                                    {producto.imgs.split(', ').map(img => {
                                        i++;

                                        let index = i-1;

                                        if(index === 0) {
                                            return (
                                                <img data-bs-target="#producto" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1" class="imgs__restoImgs--img active" data-imgs src={img} alt="Otras fotos del producto" />
                                            )
                                        } else {
                                            return (
                                                <img data-bs-target="#producto" data-bs-slide-to={index.toString()} aria-current="true" aria-label={`Slide ${i.toString()}`} class="imgs__restoImgs--img" data-imgs src={img} alt="Otras fotos del producto" />
                                            )
                                        }
                                    })}
                                </div>
                            </article>
                            <div class="producto__info">
                                <nav class="info__nav">
                                    <a href="../index.html" class="nav--link">INICIO</a>
                                    <a href="../tienda.html#sweaters" class="nav--link">SWEATERS</a>
                                    <p class="nav--producto">{producto.producto.toUpperCase()}</p>
                                </nav>
                                <h1 class="info--title">{producto.producto.toUpperCase()}</h1>
                                <div class="info__precio">
                                    {producto.precio_descuento ? (
                                        <>
                                            <span class="info__precio--precio descuento">${producto.precio}</span>
                                            <span class="info__precio--precio">${producto.precio_descuento}</span>
                                        </>
                                    ) : (
                                        <span class="info__precio--precio">${producto.precio}</span>
                                    )}
                                    <p class="info__precio--iva">- IVA Incluido</p>
                                </div>
                                <p class="info--descripcion">Hermoso sweater largo con detalles de ochos en el frente y manga de hilado Bremer</p>
                                
                                <form class="info__opciones">
                                    <h3 class="opciones--title">COLOR</h3>
                                    <div class="opciones__colores">
                                        <div class="colores__color coral">
                                            <input class="color--input" data-colores="popis" id="coral" value="coral" name="color" type="radio" checked/>
                                            <div class="color__name">
                                                <h3 class="color__name--name">CORAL</h3>
                                            </div>
                                        </div>
                                        <div class="colores__color orquidea">
                                            <input class="color--input" data-colores="popis" id="orquidea" value="orquidea" name="color" type="radio"/>
                                            <div class="color__name">
                                                <h3 class="color__name--name">ORQUÍDEA</h3>
                                            </div>
                                        </div>
                                        <div class="colores__color celeste">
                                            <input class="color--input" data-colores="popis" id="celeste" value="celeste" name="color" type="radio"/>
                                            <div class="color__name">
                                                <h3 class="color__name--name">CELESTE</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 class="opciones--title">TALLE</h3>
                                    <div class="opciones__talles">
                                        <div class="talles__talle">
                                            <input class="talle--input" id="small" value="small" name="talle" type="radio"/>
                                            <label class="talle--letra">S</label>
                                            <div class="talle__nombre">
                                                <h3 class="talle__nombre--nombre">SMALL</h3>
                                            </div>
                                        </div>
                                        <div class="talles__talle">
                                            <input class="talle--input" id="medium" value="medium" name="talle" type="radio"/>
                                            <label class="talle--letra">M</label>
                                            <div class="talle__nombre">
                                                <h3 class="talle__nombre--nombre">MEDIUM</h3>
                                            </div>
                                        </div>
                                        <div class="talles__talle">
                                            <input class="talle--input" id="medium" value="large" name="talle" type="radio"/>
                                            <label class="talle--letra">L</label>
                                            <div class="talle__nombre">
                                                <h3 class="talle__nombre--nombre">LARGE</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="opciones__carrito">
                                        <div class="carrito__unidades">
                                            <button type="button" class="carrito__unidades--boton restar" id="restarButton" onclick="RestarUnidad(event)" disabled></button>
                                            <input class="carrito__unidades--input" onchange="disableButtons(event)" type="number" max="10" min="1" value="1" name="unidades" id="unidades" />
                                            <button type="button" class="carrito__unidades--boton sumar" id="sumarButton" onclick="SumarUnidad(event)"></button>
                                        </div>                 
                                        <button type="button" class="carrito--boton" onclick="AddToCart()">AÑADIR AL CARRITO</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    )
                }
            })}
        </>
    );
}

export default Producto;