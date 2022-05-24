import React from 'react'
import {Link} from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'

// import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="The Black Tide"/>
                           
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                                Humans live, work, and play throughout the solar system. Ferdinand Abernaum, 
                                born with multiple birth defects, is now a premiere coder who has augmented 
                                his abilities beyond general human capabilities. Now he is a member of an elite 
                                team of universal explorers, The Marlagans. He, Jim, Becca, Zin, and Rhoan accept 
                                their first mission since the recent death of their former crewmate, Dr. Banthira. 
                                Join us as the Marlagans face threats from every angle on their latest controversial 
                                and confidential mission.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook