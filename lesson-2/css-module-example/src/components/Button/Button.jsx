import PropTypes from "prop-types"

import styles from "./button.module.css";

const typeStyles = {
    "reset": styles.reset,
    "button": styles.button,
    "submit": styles.submit
}

// console.log(styles);
const Button = ({text, type, active}) => {
    // console.log(props);
    // const {type, text} = props;
    const fullClassName = active ? `${styles.btn} ${styles.active} ${typeStyles[type]}` : `${styles.btn} ${typeStyles[type]}`;
    // const fullClassName = active ? styles.activeBtn : styles.btn;

    return <button type={type} className={fullClassName}>{text}</button>
}

export default Button;

Button.defaultProps = {
    type: "submit",
    active: false,
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    active: PropTypes.bool,
}