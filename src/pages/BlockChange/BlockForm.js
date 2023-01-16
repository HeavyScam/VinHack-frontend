import React from 'react'
import "./BlockForm.css"

import Image3 from "../../assets/image3.svg"
import Image4 from "../../assets/image4.svg"

const BlockForm = () => {
    const [signUp, setSignup] = React.useState({
        blockName: '',
        noOfBeds: ''
    })

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(signUp)
        window.location.href = "/availablerooms"
    }
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{color:"#23A3F6", fontWeight:"bold"}}> HOPPER</span>
                </h2>
            </header>
            <form className='request-signup-form' onSubmit={handleSignup}
            >
                <h2 className="request">REQUEST ROOM</h2>
                <div className="input-wrapper">
                    <select name="blockName" id="blockName" className='inputs'
                        value={signUp.blockName}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, blockName: e.target.value })
                        }
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
                    <input type="text" placeholder="Number Of Beds"
                        value={signUp.noOfBeds}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, noOfBeds: e.target.value })
                        }
                        id="email" className='email-inputs'
                        required />
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