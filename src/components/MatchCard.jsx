import React from 'react'
import './MatchCard.css'

const MatchCard = () => {
    return (
        // 2 columns with 3 rows each (each row is a match) and 2 buttons (accept and reject)
        <div className="match-card m-8 ml-0 px-8 py-5">
            <div className="grid grid-cols-1 text-white lg:grid-cols-2">
                <div className="left-col">
                    <h1
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-2xl font-bold">Room 1 details:</h1>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg mt-8">
                        Reg No: <span className="text-white">1234567890</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        Block: <span className="text-white">Q Block</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        Room No: <span className="text-white">711</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        No.of Beds:
                        <span className="text-white">
                            2</span>
                    </p>
                </div>
                <div className="right-col text-white">
                    <h1
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-2xl font-bold">Room 2 details:</h1>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg mt-8">
                        Reg No: <span className="text-white">1234567890</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        Block: <span className="text-white">Q Block</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        Room No: <span className="text-white">711</span>
                    </p>
                    <p
                        style={{ color: "#F37E3C", fontWeight: "bold" }}
                        className="text-lg">
                        No.of Beds: <span className="text-white">2</span>
                    </p>
                </div>
            </div>
            <div className="buttons mt-8">
                <button
                    style={{ backgroundColor: "transparent", color: "white", borderRadius: "10px", border: "1px solid #52FF00", padding: "8px 30px", fontSize: "1rem" }}
                    className="accept-button mr-5">ACCEPT</button>
                <button className="reject-button"
                    style={{ backgroundColor: "transparent", color: "white", borderRadius: "10px", border: "1px solid #F33C3C", padding: "8px 30px", fontSize: "1rem" }}
                >REJECT</button>
            </div>
        </div>


    )
}

export default MatchCard