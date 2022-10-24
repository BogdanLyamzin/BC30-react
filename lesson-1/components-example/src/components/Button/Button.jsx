import "./button.css"

const Button = ({text, type}) => {
    // console.log(props);
    // const {type, text} = props;
    return <button type={type} className="btn">{text}</button>
}

export default Button;