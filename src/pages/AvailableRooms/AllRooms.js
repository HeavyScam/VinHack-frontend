import React from 'react'
import RoomCard from '../../components/RoomCard'
import "./AllRooms.css"

const AllRooms = () => {
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white"> HOPPER</span>
                </h2>
            </header>
            <div>
                <h1 className="text-2xl font-bold mx-10 mt-5 heading">Available Rooms</h1>
                <section className="pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                        <RoomCard />
                    </div>
                </section>
            </div>
        </>
    )
}

export default AllRooms