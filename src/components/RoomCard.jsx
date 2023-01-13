import React from 'react'
import sampleImg from '../assets/samplepic.png'
import "./RoomCard.css"

function RoomCard() {
    //NFT Port sample API Call
    // const [nft, setNFT] = React.useState(null)
    // React.useEffect(() => {
    //     fetch('https://api.nftport.xyz/v1/nfts/0x495f947276749ce646f68ac8c248420045cb7b5e/1')
    //         .then(res => res.json())
    //         .then(data => setNFT(data))
    // }, [])

    return (
        <div className="my-10 mx-8 w-3/4 roomcard">
            <div className="rounded overflow-hidden h-full">
                <img src={
                    sampleImg
                } />
                <div className="px-6 py-4">
                    <div className="text-orange-600 mb-2 px-2">
                        Block:
                    </div>
                    <p className="text-orange-600 mb-3 px-2">Room Number:</p>
                    <p className="text-orange-600 mb-3 px-2">Beds:</p>
                </div>

                <button className="bg-orange-600 text-white font-bold mx-5 mb-5 button px-5 py-2">
                    Request
                </button>

            </div>
        </div>

    )
}

export default RoomCard