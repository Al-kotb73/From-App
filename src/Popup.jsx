export default function Popup({name, email, age, terms, select}) {
    if (age > 18 && age < 65) {
        return (
            <div className="popup">
                <div className="popup-content p-4  text-success rounded">
                    <h2>Application Successful</h2>
                    <p>Thank you, {name}. Your application has been submitted successfully.</p>
                    <p>Email: {email}</p>
                    <p>Age: {age}</p>
                    <p>Terms Accepted: {terms ? "Yes" : "No"}</p>
                    <p>Selected Salary: {select}</p>
                </div>
            </div>
        );
    }
    else { 
        return (
            <div className="popup">
                <div className="popup-content p-4  text-danger rounded">
                    <h2>Application Failed</h2>
                    <p>Sorry, {name}. You must be between 18 and 65 years old to apply.</p>
                </div>
            </div>
        );
    }    
    

}