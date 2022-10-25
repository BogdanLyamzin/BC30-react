import PropTypes from "prop-types"

import "./field.css";

const Field = ({label, ...props}) => {
    return (
        <div className="form-field">
            {label && <label htmlFor={props.id}>{label}</label>}
            <input {...props} />
        </div>
    )
}

export default Field;

Field.defaultProps = {
    type: "text",
    required: false,
    value: ""
}

Field.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}