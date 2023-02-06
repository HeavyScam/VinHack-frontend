import React, { useState } from "react";

const Preferences = ({ preference, index, handleChange }) => (

    <>
        <div className="input-wrapper">
            <select name="blockName" id="blockName" className='inputs'
                value={preference.block_name}
                onChange={(e) => handleChange(e, index, "block_name")}
                placeholder='Block Name 1'
            >
                <option value="K" className='optionvals'>K</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="N">N</option>
                <option value="P">P</option>
                <option value="Q">Q</option>
                <option value="R">R</option>
            </select>
        </div>
        <div className="input-wrapper">
            <input type="number" placeholder="Number Of Beds"
                value={preference.no_of_beds}
                onChange={(e) => handleChange(e, index, "no_of_beds")}
                id="email" className='email-inputs'
                required />
        </div>
    </>

);

export default Preferences;