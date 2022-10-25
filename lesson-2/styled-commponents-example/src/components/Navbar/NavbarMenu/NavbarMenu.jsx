import PropTypes from "prop-types"

import NavbarMenuItem from "./NavbarMenuItem";

import "./navbar-menu.css";

const NavbarMenu = ({ items }) => {
    // const elements = items.map(item => <NavbarMenuItem key={item.id} link={item.link} text={item.text} />);
    const elements = items.map(({id, ...props}) => <NavbarMenuItem key={id} {...props} />);

    return (
        <ul className="navbar-menu">
            {elements}
        </ul>
    )
}

export default NavbarMenu;

NavbarMenu.defaultProps = {
    items: []
}

NavbarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        link: PropTypes.string,
    }))
}