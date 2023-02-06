import React, { useState } from 'react'
import "./BlockForm.css"

import Image3 from "../../assets/image3.svg"
import Image4 from "../../assets/image4.svg"
import Preferences from '../../components/Preferences'



const BlockForm = () => {
    const [preferences, setPreferences] = useState([{ block_name: "", no_of_beds: "" }]);

    const handleAddPreference = () => {
        setPreferences([
            ...preferences,
            { block_name: "", no_of_beds: "" },
        ]);
    };

    const handleChange = (e, index, field) => {
        const newPreferences = [...preferences];
        newPreferences[index][field] = e.target.value;
        setPreferences(newPreferences);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Change all Number of beds to integer
        preferences.forEach((pref) => {
            pref.no_of_beds = parseInt(pref.no_of_beds);
        });
        console.log(preferences);
    };
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{ color: "#23A3F6", fontWeight: "bold" }}> HOPPER</span>
                </h2>
            </header>
            <form className='request-signup-form' onSubmit={handleSubmit}
            >
                <h2 className="request">REQUEST ROOM</h2>
                {preferences.map((pref, index) => (
                    <Preferences
                        key={index}
                        preference={pref}
                        index={index}
                        handleChange={handleChange}
                    />
                ))}
                <div className="add-preference"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <button
                        type="button"
                        className="add-preference-button"
                        onClick={handleAddPreference}
                        style={{
                            backgroundColor: "rgba(255, 255, 255, 0.33)",
                            border: "none",
                            color: "white",
                            padding: "10px 20px",
                            borderRadius: "15px",
                        }}
                    >
                        +
                    </button>
                </div>

                <div className="submit-wrapper">
                    <button className='btn'>SUBMIT</button>
                </div>

            </form>
            <img src={Image3} alt="image3" className="image3" />
            <img src={Image4} alt="image4" className="image4" />
        </>
    )
}

export default BlockForm