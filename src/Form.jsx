import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./Popup.jsx"; // Assuming Popup is a component that handles the display of form data
import Inputs from "./inputs.jsx"; // Assuming Inputs is a component that renders different input types
export default function Form() {
    // State to hold form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        terms: false,
        select: "",
    });
    const [popupVisible, setPopupVisible] = useState(false);
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console
        setPopupVisible(true); 
        setTimeout(() => {
            setPopupVisible(false); 
        }, 3000);
    };
    function handleName(value) {
        setFormData({ ...formData, name: value });
    }
    function handleEmail(value) {
        setFormData({ ...formData, email: value });
    }
    function handleAge(value) {
        setFormData({ ...formData, age: value });
    }
    function handleTerms(value) {
        setFormData({ ...formData, terms: value });
    }
    function handleSelect(value) {
        setFormData({ ...formData, select: value });
    }
    
    return (
        <div className="form-content p-4 d-flex flex-column justify-content-center align-items-center bg-dark rounded text-white">
            <h1 className="d-flex justify-content-center align-items-center mb-4 fs-2"> Application Form</h1>
            <form onSubmit={handleSubmit}>
                <Inputs value={formData.name} handleChange={handleName} inputName={"name"} inputType="text" />
                <Inputs value={formData.email} handleChange={handleEmail} data={formData} inputName={"email"} inputType="email" />

                <Inputs value={formData.age} handleChange={handleAge} inputName={"age"} inputType="number" />

                <Inputs value={formData.terms} handleChange={handleTerms} inputName={"are you an employee?"} inputType={"checkbox"} />
                <Inputs value={formData.select} handleChange={handleSelect} inputName={"salary"} inputType={"select"} />
                <button type="submit" className={!formData.name || !formData.email || !formData.age ? "btn btn-secondary disabled w-100" : "btn btn-secondary w-100"} disabled={!formData.name || !formData.email || !formData.age}>
                    Submit
                </button>
            </form>
        {/* 
            popup will be displayed here after form submission
            The Popup component will receive the form data as props and display it accordingly.
        */}
            {popupVisible && (
                <div
                    className="popup"
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
                    }}>
                    <Popup name={formData.name} email={formData.email} age={formData.age} terms={formData.terms} select={formData.select} />
                </div>
            )}
        </div>
    );
}
