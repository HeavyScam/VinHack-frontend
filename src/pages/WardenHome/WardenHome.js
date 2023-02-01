import React from 'react'
import MatchCard from '../../components/MatchCard'

const WardenHome = () => {
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span style={{ color: "#E74B41", fontWeight: "bold" }}> HOPPER</span>
                </h2>
            </header>
            <section className="max-w-5xl m-10">
                <h1 className="text-2xl font-bold heading">Requests</h1>
                <div className="grid 
                grid-cols-1
                lg:grid-cols-2
                ">
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                    <MatchCard />
                </div>
            </section>
        </>
    )
}

export default WardenHome