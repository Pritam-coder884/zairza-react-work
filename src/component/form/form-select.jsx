import "../../styles/form-select.css"

const SELECT_TYPE = {
    small: 'small',
    medium: 'medium',
    large: 'large'
}

const FormSelect = ({ label,selectdata, ...otherProps }) => {
    return (
        <div className="form-select">
            <label className="form-label-select">{label}</label>
            <div>
                <select
                className={`select-option ${SELECT_TYPE}`}
                {...otherProps}
                >
                <option disabled selected>
                    Select
                </option>
                {selectdata?.map(({id,name}) => {
                    return <option key={id}>{name}</option>
                })}
                </select>
            </div>
            
    </div>
    );
};
export default FormSelect;
