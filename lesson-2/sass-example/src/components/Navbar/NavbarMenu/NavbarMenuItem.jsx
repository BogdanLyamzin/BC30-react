import PropTypes from "prop-types"

const NavbarMenuItem = ({link, text}) => {
    return (
        <li>
            <a className="navbar-menu-link" href={link}>{text}</a>
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