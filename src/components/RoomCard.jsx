import React from 'react'
import sampleImg from '../assets/samplepic.svg'
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
        <div className="my-10 mx-8 roomcard" style={{ width: "80%" }}>
            <div className="rounded overflow-hidden h-full">
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <img src={sampleImg}
                        alt='sample'
                    />
                </div>
                <div className="px-6 py-4">
                    <div className="text-orange-600 mb-2 px-2">
                        Block: <span className="text-white"> Q Block</span>
                    </div>
                    <p className="text-orange-600 mb-3 px-2">Room Number:
                        <span className="text-white"> 711</span>
                    </p>
                    <p className="text-orange-600 mb-3 px-2">Beds:
                        <span className="text-white"> 2</span>
                    </p>
                </div>
                <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                    <button className="bg-orange-600 text-white font-bold mx-5 mb-5 button px-5 py-2">
                        Request
                    </button>
                </div>

            </div>
        </div>

    )
}

export default RoomCard