import PropTypes from "prop-types"
import styled from '@emotion/styled'

const StyledButton = styled.button`
    display: inline-block;
    background-color: ${props => props.active ? "red" : "#fff"};
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: ${props => props.active ? "#fff" : "red"};
    padding: 10px 15px;
    border: 1px solid red;
    border-radius: 5px;
    cursor: pointer;
`

const Button = ({text, type, active}) => {
    // console.log(props);
    // const {type, text} = props;
    return <StyledButton type={type} active={active}>{text}</StyledButton>
}

export default Button;

Button.defaultProps = {
    type: "submit"
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"])
}