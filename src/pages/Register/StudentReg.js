import React from 'react'
import "./StudentReg.css"

import Image1 from "../../assets/image1.svg"
import Image2 from "../../assets/image2.svg"

const StudentReg = () => {
    const [signUp, setSignup] = React.useState({
        firstName: '',
        lastName: '',
        regNo: '',
        roomNo: '',
        blockName: '',
        noOfBeds: '',
    })

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(signUp)
    }

    return (
        <>
            
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{color:"#6441E7", fontWeight:"bold"}}> HOPPER</span>
                </h2>
            </header>
            <img src={Image1} alt="image1" className="image1" />
            <form className='login-signup-form' onSubmit={handleSignup}
            >
                <h2 className="register">STUDENT INFO</h2>
                <div className="input-wrapper">
                    <input type="text" placeholder="First Name"
                        value={signUp.firstName}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, firstName: e.target.value })
                        }
                        id="fname" className='email-inputs' required />
                    <input type="text" placeholder="Last Name"
                        value={signUp.lastName}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, lastName: e.target.value })
                        }
                        id="lname" className='email-inputs' required />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Registration Number"
                        value={signUp.regNo}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, regNo: e.target.value })
                        }
                        id="email" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Room Number"
                        value={signUp.roomNo}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, roomNo: e.target.value })
                        }
                        id="email" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <select name="blockName" id="blockName" className='inputs'
                        value={signUp.blockName}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, blockName: e.target.value })
                        }
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
                    <input type="number" placeholder="Number of Beds" min={1} max={8}
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
            <img src={Image2} alt="image2" className="image2" />
        </>
    )
}

export default StudentReg