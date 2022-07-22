import "./NavBar.css"

function NavBar() {
    return(
        <nav className="navbar">
            <picture>
                <img src="./logo.png" alt="Logo de la página" />
            </picture>
            <ul className="menu">
                <li className="menu__item active">Home</li>
                <li className="menu__item">Productos</li>
                <li className="menu__item">Contacto</li>
            </ul>
        </nav>
    )
}

export default NavBar;