export default function Inputs({ value, handleChange, inputName, inputType = "text",  }) {
    if(inputType === "text" || inputType === "email" || inputType === "number") {
        return (
            <div className="form-group d-flex justify-content-start align-items-center bg-light rounded mb-3">
                <label htmlFor={inputName} className="fs-5 fw-bold text-primary ps-2">
                    {inputName.charAt(0).toUpperCase() + inputName.slice(1)}:
                </label>
                <input
                    type={inputType}
                    id={inputName}
                    name={inputName}
                    className="rounded"
                    style={{ border: "none", outline: "none" }}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
        );
    }
    else if(inputType === "checkbox") {
        return (
            <div className="form-group d-flex justify-content-start align-items-center bg-light rounded mb-3">
                <label htmlFor={inputName} className="fs-5 fw-bold text-primary ps-2 d-flex">
                    {inputName.charAt(0).toUpperCase() + inputName.slice(1)}:
                </label>  
                <input
                    type="checkbox"
                    id={inputName}
                    name={inputName}
                    className="d-flex justify-content-center align-items-center ms-2 border-primary"
                    style={{ width: "15px", height: "15px" }}
                    checked={value}
                    onChange={(e) => handleChange(e.target.checked)}
                />
            </div>
        );
    }
    else if(inputType === "select") {
        return (
            <div className="select-box form-group d-flex justify-content-start align-items-center bg-light rounded w-100 mb-3">
                <label htmlFor={inputName} className="fs-5 fw-bold text-primary ps-2">
                    {inputName.charAt(0).toUpperCase() + inputName.slice(1)}:
                </label>
                <select
                    id={inputName}
                    className="rounded text-primary ms-2 fw-bold fs-5"
                    name={inputName}
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}>
                    <option value="" disabled>
                        Select your salary
                    </option>
                    <option value="5000">5000</option>
                    <option value="10000">10000</option>
                    <option value="15000">15000</option>
                </select>
            </div>
        );
    }
}
