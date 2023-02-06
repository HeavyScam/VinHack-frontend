import React, { useState } from "react";

const Preference = ({ preference, index, handleChange }) => (
    <div>
        <select value={preference.type} onChange={(e) => handleChange(e, index, "type")}>
            <option value="">Select type</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="activity">Activity</option>
        </select>
        <input
            type="text"
            value={preference.value}
            onChange={(e) => handleChange(e, index, "value")}
            placeholder="Enter value"
        />
    </div>
);

function PreferencesForm() {
    const [preferences, setPreferences] = useState([{ type: "", value: "" }]);

    const handleAddPreference = () => {
        setPreferences([
            ...preferences,
            { type: "", value: "" },
        ]);
    };

    const handleChange = (e, index, field) => {
        const newPreferences = [...preferences];
        newPreferences[index][field] = e.target.value;
        setPreferences(newPreferences);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(preferences);
    };

    return (
        <form onSubmit={handleSubmit}>
            {preferences.map((pref, index) => (
                <Preference
                    key={index}
                    preference={pref}
                    index={index}
                    handleChange={handleChange}
                />
            ))}
            <button
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "blue",
                }}
                type="button" onClick={handleAddPreference}>
                +
            </button>
            <button
                style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "blue",
                }}
                type="submit">Submit</button>
        </form>
    );
}

export default PreferencesForm;
