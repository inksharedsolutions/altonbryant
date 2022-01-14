import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'
import { Helmet } from 'react-helmet'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
                 <Helmet title="Author | Perry Defiore" />
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Perry DeFiore"/>
                            </div>

                            <div className="heading-quote">
                          
                            </div>
                            
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Perry was born December 22, 1947, in Allentown,
                                Pennsylvania. His mother was of Irish roots (McClellan)
                                and his father originated from Italy. He was raised
                                in the Allentown area in a lower income society and
                                joined the Marines at the age of seventeen to find his
                                way to go to college. He served thirteen plus months in Vietnam,
                                receiving a Certificate of Commendation for saving a fellow Marine’s life.
                                He studied Physics and Business Administration along with other military
                                courses in Rifle Squad and Topography while in the service.
                                Upon leaving the military in August, 1968, he began a lifetime
                                of studies: Cost Accounting at Las Salle University,
                                Electronics and Mechanics at the Cleveland Institute,
                                writing at the New York Institute, Environmental
                                Science at CU, Ocean Sciences at WU, Oceanography,
                                and, most recently Astrophysics (his personal favorite science).
                                There were countless other courses he accumulated giving him
                                enough papers to wall paper one wall of his office.
                                He has been a member of the Planetary Society and the New York Academy of Sciences.
                                He feels education is the most valuable gift a parent can give their children.
                            </p>

                            <p>
                                He used his business administration to become a general manager
                                of a large thirty-six store operation in Florida. He used his
                                sciences background to work as a Junior High School principal
                                in a foreign country. He speaks, reads, and writes Spanish and English fluently.
                                He founded a scientific society for the development of young scientists which
                                still exists today, although he has retired. He accompanied other scientists
                                on various scientific expeditions internationally. He used his writing background
                                to write his novels (8 now and growing) since he retired. The Veterans Administration
                                has awarded him a 100% disability.
                            </p>

                            <p>
                                He married at the age of twenty shortly after
                                returning from Vietnam and had two children.
                                He divorced after eleven years and remarried a widow with
                                four children and, after thirty-nine years of marriage and
                                seven grandchildren, still remains married. He enjoys golf
                                and fishing and has traveled to twenty percent of the countries
                                of the world.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Perry Defiore</span>
                                </span>
                            </p>
                            
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;