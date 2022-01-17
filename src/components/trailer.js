import React from "react"
import { Link } from "gatsby"
import ReactPlayer from 'react-player/youtube'



const Trailer = (props) =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Alton Bryant</h5>
                        <h1>
                            <span>{props.title1}</span>
                            <span>{props.title2}</span>
                        </h1>
                        <p>{props.description}</p>
                        <Link to="/videos">
                            <button>See more videos here</button>
                        </Link>
                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={props.url}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Trailer;