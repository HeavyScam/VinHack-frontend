import React from 'react'
import './MatchCard.css'

const MatchCard = () => {
    return (
        // 2 columns with 3 rows and 2 buttons - accept and deny
        <>
            <div className="md:flex
                    justify-space-between
                    flex-grow
                    items-center
                    rounded-lg
                    shadow-lg
                    p-4
                    match-card
                    mx-10
                    my-4
                    space-x-8
                    
                    
    ">
                <div className="left mx-4"
                    style={{
                        color: "#F37E3C"
                    }}
                >
                    <h1 className="text-lg m-2">Room 1 details:</h1>
                    <p className="text-xl m-2">
                        Reg No:
                    </p>
                    <p className="text-xl m-2">
                        Block:
                    </p>
                    <p className="text-xl m-2">
                        Room No:
                    </p>
                    <p className="text-xl m-2">
                        Bed Type:
                    </p>
                </div>
                <div className="right mx-4"
                    style={{
                        color: "#F37E3C"
                    }}
                >
                    <h1 className="text-lg">Room 2 details:</h1>
                    <p className="text-xl m-2">
                        Reg No:
                    </p>
                    <p className="text-xl m-2">
                        Block:
                    </p>
                    <p className="text-xl m-2">
                        Room No:
                    </p>
                    <p className="text-xl m-2">
                        Bed Type:
                    </p>
                </div>

            </div>


        </>
    )
}

export default MatchCard