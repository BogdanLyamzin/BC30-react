const NavbarMenuItem = ({link, text}) => {
    return (
        <li>
            <a className="navbar-menu-link" href={link}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;