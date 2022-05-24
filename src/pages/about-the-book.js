import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"

/*Images Imports*/
import Book1 from '../../static/books/Book_Cover.png'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Helmet } from 'react-helmet'


const ATB = (props) => {

  const slug = (props.location.href);

  const disqusConfig = {

    shortname: 'alton-bryant',
    config: { identifier: 12, slug }

  }


  return (
    <>
      <Layout>
        <Helmet title="Books | Alton Bryant" />
        <Nav pathExt={props.path} />

        <Banner
          spanFirst={`About The`}
          contextHeading={`Book`}
        />

        <main className="wrapperMain">
          <div
            className="container"
            id="book-containers" >
             
            <BookInfo
              data={{
                title: `THE MARLAGANS For Mars`,
                spanFirst: ``,
                imgSrc: Book1,
                
                id: 'the_gifted_one',
                content:
                  `
                                 <p>
                                Humans live, work, and play throughout the solar system. Ferdinand Abernaum, 
                                born with multiple birth defects, is now a premiere coder who has augmented 
                                his abilities beyond general human capabilities. Now he is a member of an elite 
                                team of universal explorers, The Marlagans. He, Jim, Becca, Zin, and Rhoan accept 
                                their first mission since the recent death of their former crewmate, Dr. Banthira. 
                                Join us as the Marlagans face threats from every angle on their latest controversial 
                                and confidential mission.
                                </p>
                              `,

                ebooks: {
                  stratton: 'https://www.stratton-press.com/books/the-black-tide/',
                  barnes: 'https://www.barnesandnoble.com/w/the-marlagans-alton-bryant/1140505765?ean=9781648956287',
                  amazon: 'https://www.amazon.ca/dp/B09LCT1Z4X/ref=sr_1_1?keywords=9781648956287&qid=1636471816&s=books&sr=1-1',
                },
                paperback: {
                  amazon: 'https://www.amazon.ca/Marlagans-Mars-Alton-Bryant/dp/1648956270/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1636471816&sr=1-1',
                  barnes: 'https://www.barnesandnoble.com/w/the-marlagans-alton-bryant/1140505765?ean=9781648956270',
                  booksamillion: 'https://www.booksamillion.com/p/Marlagans/Alton-Bryant/9781648956270?id=8158356429268',
                },
                audiobooks: {
                  audiobook: 'https://www.audible.com/pd/The-Marlagans-For-Mars-Audiobook/B09ZNKQG6Q?qid=1653265760&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=QN9Q5YN5M1TMC088711A',
                },
                isComingSoon: false,
              }}
            />
            <h3> Sample AudioBook</h3>
            <AudioPlayer
                                src="https://samples.audible.com/bk/acx0/307839/bk_acx0_307839_sample.mp3"
                                onPlay={e => console.log("onPlay")}
                                // other props here
                            />

            <div className="commentSection">
              <div id="disqus_thread">
                <DiscussionEmbed {...disqusConfig} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}


export default ATB;