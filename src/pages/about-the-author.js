import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'
import { Helmet } from 'react-helmet'

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="Author | Alton Bryant" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="Perry DeFiore" />
                            </div>

                            <div className="heading-quote">

                            </div>

                        </div>

                        <article className="article-section column" id="author">

                            <p>
                                Alton was born in Johns Hopkins Hospital in Baltimore, MD, on December 11, 1966,
                                to Alton Bryant and Annie Brown. For much of his childhood, his family moved several
                                times throughout Prince Georges County in Maryland. His family was not a wealthy one.
                                Their family suffered moments without home security, electricity, water, gas and food.
                                At the age of 14, his parents divorced, causing his mother and siblings to move back to
                                Baltimore. He, his siblings and mother refurbished and moved into a condemned crack house.
                                It was tough and nasty, but the final product stunned the city government during inspection
                                for a day care home. Alton attended Frederick Douglass High School in NW Baltimore, where he
                                had to gain his footing. For all his life to that point, he was bussed to newly integrated
                                white schools. It was tough dealing with so much racism at such an early age, but he learned
                                the value of the education he received from those upper class schools. He had never been involved
                                in school activities until going to Douglass, a 99% black school. During his time at high school in
                                Baltimore, he started and presided over a social club, was editor of the school newspaper, was president
                                of the school’s chapter of the National Honor Society, and president of the Student Government Association.
                                Then he graduated valedictorian in 1984.
                            </p>

                            <p>
                                Though he was awarded a full 4-year tuition scholarship to Pennsylvania State University, his family could not
                                afford the rest of the expenses of college and had no guidance on student loans. So it was no surprise when a
                                roar of boos filled the auditorium during his graduation ceremony when it was announce that Alton chose to join
                                the United States Marine Corps in hopes of learning a skill while being paid and attending college while the
                                ilitary paid for it. During his 4 years of service, Alton became an Air Traffic Controller, but was denied every
                                opportunity to go to college because of a racist Gunnery Sergeant in his chain of command, who never allowed any
                                of the black Marines to go to college. He and his fellow Marines had to watch this blatant racism with no support
                                from the Gunnery SGT’s superiors. In the third year of his four-year, he became a Chaplain’s Assistant when they offered
                                him the opportunity to attend college. In the four years of service to his country, he was able to complete 11 credits of
                                a community college, but knew he would like a career in Air Traffic Control, so he applied to the Federal Aviation Administration.
                            </p>

                            <p>
                                In the two years between his honorable discharge and hiring with the FAA, Alton worked as a perfume salesman, vacuum salesman,
                                construction worker, cab driver and security guard. As an Air Traffic Controller, he spent his career in the Washington DC Metropolitan
                                Area. Working a 24-hour cycle job left little time for family and community involvement. Always a philanthropist, he felt the urge to
                                do more for others. One day he prayed for more time to serve the people of his community. Two weeks later, his career was cut short when
                                his frequency in the Potomac TRACON was struck by lightning and managed to reach Alton’s left ear. At that moment Alton experienced his
                                first migraine. It was extremely severe and lasted for three months straight along with other disturbing and debilitating symptoms. The
                                most severe of them was vertigo. The injuries sustained to his middle ear and brain caused the FAA to retire him a couple years earlier than
                                scheduled. After years of debilitation, he began to function again.
                            </p>

                            <p>
                                Feeling his prayer for time was answered, he committed to a life of serving others. His roles of service include many roles in his church, 
                                Dulles Community Church, including the role of elder and leading several team and groups. He leads community support groups and community 
                                committees. He has also joined the fight against sex trafficking. He is a founding manager at the Washington West Film Festival in Reston, 
                                Virginia. Recently, after determining he may be able to maintain a consistent schedule, Alton became a certified mental health coach and a 
                                Crisis Response and Trauma Care Specialist. He also became a full-time psychology student in hopes of beginning a second career to serving 
                                an even larger community with mental health services. Unfortunately, because he was blocked from attending college in the Marine Corps, he 
                                had to start his education from scratch. In his personal life, Alton is joyously married to the love of his life. He has two amazing children 
                                from a previous marriage, Destin and Alia. He has also considers his godson, Isaiah, one of his own children. Soon after committing to a relationship 
                                with his wife, Esther, they became kinship parents of three more children, Davonna, Delano and Deshea. They are also registered foster parents in Loudoun County, Virginia.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Alton Bryant</span>
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