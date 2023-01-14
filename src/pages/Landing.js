import React from 'react'
import landingimg from "../assets/landingimage.png"

function Landing() {
    return (
        <>
            <header className="sticky top-0 z-50 grid grid-cols-3 drop-shadow-md p-5 md:px-10">
                <h2>
                    <span className="text-white">HOSTEL </span><span className="text-white"> HOPPER</span>
                </h2>
            </header>

            {/* Some text in the left and img on the right
             */}
            <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-20 px-5">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-extralight text-white">WANT TO CHANGE ROOMS?</h1>
                    <h1 className="text-4xl font-bold text-orange-600">CHANGE YOUR ROOM IN 3 SIMPLE STEPS</h1>
                </div>
                <div className="flex justify-center">
                    <img src=
                        {landingimg}
                        alt="hostel" />
                </div>
            </section>

            <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full mx-auto block">Get Started</button>

        </>
    )
}

export default Landing