import { useLocation } from 'react-router-dom';

const Header = (props) => {

    let isIndex = false;
    let isTienda = false;
    let isContacto = false;
    let isCart = false;

    let location = useLocation().pathname;

    if (location === '/')
        isIndex = true;
    else if (location === '/tienda')
        isTienda = true;
    else if (location === '/contacto')
        isContacto = true;
    else if (location === '/cart')
        isCart = true;

    return (
        <header class="header">
            <div class="header__burguer" id="burguerToggleDiv">
                <i class='bx bx-menu' id="burguerToggle"></i>
            </div>
            
            <a class="header__logo" href="./">
                <img class="header__logo--img" src="./imgs/VALogo.png" alt="LOGO VIA AVANTI"/>
                <h1 class="header__logo--title">VIA AVANTI</h1>
            </a>

            <nav class="header__navbar">
                <ul class="navbar__menu">
                    <li class="menu__item">
                        {!isIndex ? (
                            <a href="./" class="menu__item__link">INICIO<div class="menu__item__link--linea"></div></a> 
                        ) : (
                            <a href="./" class="menu__item__link active">INICIO<div class="menu__item__link--linea"></div></a>
                        )}
                    </li>
                    <li class="menu__item tiendaButton">
                        {!isTienda ? (
                            <a href="./tienda" class="menu__item__link">TIENDA<div class="menu__item__link--linea"></div></a>
                        ) : (
                            <a href="./tienda" class="menu__item__link active">TIENDA<div class="menu__item__link--linea"></div></a>
                        )}

                        <div id="mydropdown" class="menu__item__dropdown">
                            <i class='dropdown--arrow bx bx-chevron-right'></i>
                            <ul class="menu__item__submenu">
                                <li class="submenu__item">
                                    <a class="submenu__item--link first" href="./tienda#pantalones">PANTALONES</a>
                                </li>
                                <li class="submenu__item">
                                    <a class="submenu__item--link" href="./tienda#remeras">REMERAS</a>
                                </li>
                                <li class="submenu__item">
                                    <a class="submenu__item--link last" href="./tienda#sweaters">SWEATERS</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu__item">
                        {!isContacto ? (
                            <a href="./contacto" class="menu__item__link">AYUDA<div class="menu__item__link--linea"></div></a>
                        ) : (
                            <a href="./contacto" class="menu__item__link active">AYUDA<div class="menu__item__link--linea"></div></a>
                        )}
                    </li>
                </ul>
            </nav>

            <div class="header__cart">
                {!isCart ? (
                    <a class="header__cart__link" href="./cart">CARRITO <i class='bx bxs-shopping-bag'></i><div class="header__cart__link--linea"></div></a>
                ) : (
                    <a class="header__cart__link active" href="./cart">CARRITO <i class='bx bxs-shopping-bag'></i><div class="header__cart__link--linea"></div></a>
                )}
            </div>
        </header>
    );
}

export default Header;