import Button from "../Button/Button";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./navbar.module.css"

const Navbar = ({menuItems}) => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.logo} href="/">Logo</a>
            <NavbarMenu items={menuItems} />
            <Button text="Show more" />
        </nav>
    )
}

export default Navbar;