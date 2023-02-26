import "../../styles/form-input.css"

const FormInput = ({ label, inputType,error,hidenseek,...otherProps }) => {


    return (

        <div className="form-input">
                <label className={`form-label`}>{label}</label>
                <div className="input">
                    <input
                    className={`input-field ${inputType}`}
                    {...otherProps}
                    />
                    {hidenseek}
                </div>
                <p>{error}</p>
        </div>
    )
};

export default FormInput;
