import React from 'react'

import Keys from '../assets/Keys.svg'

function Home() {
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10" style={{ display: "block" }}>
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white" style={{ color: "#FD9910", fontWeight: "bold" }}> HOPPER</span>
                    <button className=" text-white flex-end font-bold py-2 px-10" style={{ backgroundColor: "#FD9910", borderRadius: "12px", float: "right", fontSize: "16px" }}>
                        <a href="/register">SIGN UP</a>
                    </button>
                </h2>
            </header>

            <div className="grid grid-cols-3 drop-shadow-md p-5 md:px-10" style={{ display: "block", marginTop:"15%" }}>
                <div>
                    <span className="text-white"style={{ fontSize:"24px", fontWeight:"300"}}>WANT TO CHANGE ROOMS?</span>
                    <h2 className="text-white grad" style={{ fontSize:"60px",marginTop:"-0.5%" }}>CHANGE YOUR ROOM</h2>
                    <h2 className=" grad" style={{ fontSize:"72px",marginTop:"-2%" }}>IN 3 SIMPLE STEPS</h2>
                    <button className=" text-white btn1 flex-end font-bold py-2 px-10" style={{fontSize: "16px", marginTop:"1%"}}>
                        <a href="/register">SIGN UP</a>
                    </button>
                    <div className=" text-white flex-end font-bold" style={{ backgroundColor: "#FD9910", borderRadius: "12px", float: "right", fontSize: "16px" }}>
                    <img src={Keys} alt="image1" className="keys" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Home