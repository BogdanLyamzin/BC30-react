import PropTypes from "prop-types"

import "./button.css"

const Button = ({text, type}) => {
    // console.log(props);
    // const {type, text} = props;
    return <button type={type} className="btn">{text}</button>
}

export default Button;

Button.defaultProps = {
    type: "submit"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"])
}