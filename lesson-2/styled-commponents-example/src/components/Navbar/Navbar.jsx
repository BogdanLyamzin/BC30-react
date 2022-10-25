import styled from "@emotion/styled"

import Button from "../Button/Button";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import "./navbar.css"

const Logo = styled.a`
    text-decoration: none;
    color: red;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 24px;
    font-weight: bold;
`

const Navbar = ({menuItems}) => {
    return (
        <nav className="navbar">
            <Logo href="/">Logo</Logo>
            <NavbarMenu items={menuItems} />
            <Button text="Show more" />
        </nav>
    )
}

export default Navbar;