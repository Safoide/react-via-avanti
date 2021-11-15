const BurguerMenu = () => {

    
    return (
        <nav class="burguerMenu" id="burguerMenu">
            <ul class="nav__lista">
                <li class="lista__item">
                    <a class="lista__item--link" href="./index.html">INICIO</a>
                </li>
                <li class="lista__item dropdown">
                    <a class="lista__item--link" href="./tienda.html"><span>TIENDA</span></a>
                    <i id="burguerDropdown" class='dropdown--arrow bx bx-chevron-right'></i>
                </li>
                <ul id="burguerSubmenu" class="lista__submenu">
                    <li class="submenu__item">
                        <a class="submenu__item--link" href="./tienda.html#pantalones">PANTALONES</a>
                    </li>
                    <li class="submenu__item">
                        <a class="submenu__item--link" href="./tienda.html#remeras">REMERAS</a>
                    </li>
                    <li class="submenu__item">
                        <a class="submenu__item--link" href="./tienda.html#sweaters">SWEATERS</a>
                    </li>
                </ul>
                <li class="lista__item">
                    <a class="lista__item--link" href="./contacto.html">AYUDA</a>
                </li>
            </ul>
        </nav>
    );
}

export default BurguerMenu;