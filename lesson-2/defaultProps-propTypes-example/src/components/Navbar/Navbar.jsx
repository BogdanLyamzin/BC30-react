import Button from "../Button/Button";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import "./navbar.css"

const Navbar = ({menuItems}) => {
    return (
        <nav className="navbar">
            <a className="navbar-logo" href="/">Logo</a>
            <NavbarMenu items={menuItems} />
            <Button text="Show more" />
        </nav>
    )
}

export default Navbar;