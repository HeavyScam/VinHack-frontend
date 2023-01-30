import React from 'react'
import { redirect } from 'react-router-dom';

import Keys from '../assets/Keys.svg'
import Logo from '../assets/Logo.svg'

function Home() {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 2500);
    }, []);
    if (loading) {
        return(
        <div className="loader bounce2">
            
            <img src={Logo} alt="Loading..." className='load' />
            
        </div>)
    }
    
    const redirect = (e) => {
        window.location.href = "/register"

    }
    return (
        <>
            <header className="sticky fade-in-down top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10" style={{ display: "block" }}>
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{ color: "#FD9910", fontWeight: "bold" }}> HOPPER</span>
                    <button className="btn-hover text-white flex-end font-bold py-2 px-10" style={{ backgroundColor: "#FD9910", borderRadius: "12px", float: "right", fontSize: "16px" }}>
                        <a href="/register">SIGN UP</a>
                    </button>
                </h2>
            </header>

            <div className="grid grid-cols-3 drop-shadow-md p-5 md:px-10 fade-in-left" style={{ display: "block", marginTop:"15%" }}>
                <div>
                    <span className="text-white"style={{ fontSize:"24px", fontWeight:"300"}}>WANT TO CHANGE ROOMS?</span>
                    <h2 className="text-white grad" style={{ fontSize:"60px",marginTop:"-0.5%" }}>CHANGE YOUR ROOM</h2>
                    <h2 className=" grad" style={{ fontSize:"72px",marginTop:"-2%" }}>IN 3 SIMPLE STEPS</h2>
                    <button className=" text-white btn1 flex-end font-bold py-2 px-10" style={{fontSize: "16px", marginTop:"1%"}} onClick={redirect}>SIGN UP</button>
                    <div className=" text-white flex-end font-bold" style={{ backgroundColor: "#FD9910", borderRadius: "12px", float: "right", fontSize: "16px" }}>
                    <img src={Keys} alt="image1" className="keys" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home