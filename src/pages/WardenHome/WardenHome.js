import React from 'react'
import MatchCard from '../../components/MatchCard'

const WardenHome = () => {
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white"> HOPPER</span>
                </h2>
            </header>
            <section className="max-w-5xl">
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