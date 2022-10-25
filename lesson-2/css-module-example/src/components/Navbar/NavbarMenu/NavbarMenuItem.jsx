import PropTypes from "prop-types";

import styles from "./navbar-menu.module.scss"

const NavbarMenuItem = ({link, text}) => {
    return (
        <li>
            <a className={styles.link} href={link}>{text}</a>
        </li>
    )
}

export default NavbarMenuItem;

NavbarMenuItem.defaultProps = {
    link: "#"
}

NavbarMenuItem.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
}