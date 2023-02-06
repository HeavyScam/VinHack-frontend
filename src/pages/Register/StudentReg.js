import React from 'react'
import "./StudentReg.css"

import Image1 from "../../assets/image1.svg"
import Image2 from "../../assets/image2.svg"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const StudentReg = () => {
    const [signUp, setSignup] = React.useState({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        reg_number: "",
        room_number: "",
        block_name: "",
        no_of_beds: "",
        gender: 1,
    })

    const handleSignup = (e) => {
        e.preventDefault()
        signUp.no_of_beds = parseInt(signUp.no_of_beds)
        console.log(signUp)

        fetch(`${process.env.REACT_APP_API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUp),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.error) {
                    toast.error(data.error, {
                        position: toast.POSITION.TOP_RIGHT,
                        className: 'toast'
                    })
                } else {
                    toast.success('Registered Successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            }
            )
    }





    return (
        <>

            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{ color: "#6441E7", fontWeight: "bold" }}> HOPPER</span>
                </h2>
            </header>
            <img src={Image1} alt="image1" className="image1" />
            <form className='login-signup-form' onSubmit={handleSignup}
            >
                <h2 className="register">STUDENT INFO</h2>
                <div className="input-wrapper">
                    <input type="email" placeholder="Email"
                        value={signUp.email}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, email: e.target.value })
                        }

                        id="email" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Password"
                        value={signUp.password}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, password: e.target.value })
                        }

                        id="password" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="First Name"
                        value={signUp.first_name}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, first_name: e.target.value })
                        }
                        id="fname" className='email-inputs'
                        style={{ textAlign: "center" }}
                        required />
                    <input type="text" placeholder="Last Name"
                        value={signUp.last_name}
                        style={{ textAlign: "center" }}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, last_name: e.target.value })
                        }
                        id="lname" className='email-inputs' required />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Registration Number"
                        value={signUp.reg_number}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, reg_number: e.target.value })
                        }

                        id="regno" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Room Number"
                        value={signUp.room_number}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, room_number: e.target.value })
                        }
                        id="roomno" className='email-inputs'
                        required />
                </div>
                <div className="input-wrapper">
                    <select name="blockName" id="blockName" className='inputs'
                        value={signUp.block_name}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, block_name: e.target.value })
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
                        value={signUp.no_of_beds}
                        onChange={
                            (e) =>
                                setSignup({ ...signUp, no_of_beds: e.target.value })
                        }
                        id="no-of-beds" className='email-inputs'
                        required />
                </div>
                {/* div to have user to select gender */}

                <div className="submit-wrapper" >
                    <button className='btn'>SUBMIT</button>
                </div>
                <ToastContainer
                    progressClassName="toastProgress"
                    bodyClassName="toastBody"
                />
            </form>
            <img src={Image2} alt="image2" className="image2" />
        </>
    )
}

export default StudentReg