import React from 'react'
import NotFoundGif from '../img/NotFound.gif'

export default function NotFound() {
    return (
        <div>

            <img className="img-fluid" src={NotFoundGif} style={{
                width: "100%",
                height: "80vh",
                opacity: "0.8",
                border: "2px solid gray",
                borderRadius: "20px"
            }} alt="Gifffiiii" />
        </div>
    )
}
