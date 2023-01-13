import React from 'react'
import "./BlockForm.css"

const BlockForm = () => {
    const [signUp, setSignup] = React.useState({
        blockName: '',
        noOfBeds: ''
    })

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(signUp)
    }
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white"> HOPPER</span>
                </h2>
            </header>
            <form className='login-signup-form' onSubmit={handleSignup}
            >
                <h2 className="register">REQUEST ROOM</h2>
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
        </>
    )
}

export default BlockForm