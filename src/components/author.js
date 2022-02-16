import React from 'react'
import AuthorImg from '../../static/author/author.jpeg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">
                    <div className="grid-child" id="author-contents">

                        <p>
                        Alton was born in Johns Hopkins Hospital in Baltimore, MD, on December 11, 1966, to Alton Bryant and Annie Brown. 
                        For much of his childhood, his family moved several times throughout Prince Georges County in Maryland.
                        His family was not a wealthy one. Their family suffered moments without home security, electricity, water, gas and food. 
                        </p>

                        <h1 className="author-name-tag">
                          <span>Alton</span>
                          <span>Bryant</span>
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
