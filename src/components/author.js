import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">
                    <div className="grid-child" id="author-contents">

                        <p>
                          Perry DeFiore is a decorated Vietnam veteran who has always been interested
                          in science. He was a junior high school principal in a foreign country for twenty years 
                          and, during that time, founded a scientific society for the development of young 
                          scientists, taking them on various expeditions in Mexico.
                        </p>

                        <h1 className="author-name-tag">
                          <span>Perry</span>
                          <span>Defiore</span>
                        </h1>
                        
                        <span className="author-tagline">
                          Author & Writer
                        </span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Author;