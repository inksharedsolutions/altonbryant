import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"

/*Images Imports*/
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'
import Book3 from '../../static/books/Book_Cover_03.png'
import Book4 from '../../static/books/Book_Cover_04.png'
import Book5 from '../../static/books/Book_Cover_05.png'
import Book6 from '../../static/books/Book_Cover_06.png'
import Book7 from '../../static/books/Book_Cover_07.png'
import Book8 from '../../static/books/Book_Cover_08.png'
import Coming from '../../static/books/Book_Coming.png'
import { Helmet } from 'react-helmet'


const ATB = (props)=>{

  const slug =(props.location.href);
    
	const disqusConfig = {

	  shortname: 'perry-defiore',
	  config: { identifier:  12, slug}

  }
    

	return (
		<>
		 	<Layout>
         <Helmet title="Books | Perry Defiore" />
		 		<Nav pathExt={props.path}/>
                 
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
                              title:`The Paraponera`,
                              spanFirst:`An Eminent National Danger`,
                              imgSrc: Book6,
                              id:'the_gifted_one',
                              content:
                              `
                                <p>
                                   Dr. Richard Denton, a brilliant entomologist, is shy, introverted, and protective of the secret projects he hides in the basement of the country home he rents. He knows his creation is a major scientific breakthrough but fears the consequences of his discovery all the same.
                                </p> 

                                <p>
                                   When one of Richard's few friends convinces him to take a weekend off, he does so - and returns to find that some of his hybrid ants have escaped into the world. Worried, he waits to hear and in the meantime finds an unexpected romance. Sightings of the ants become major international news, and as Richard watches, he knows it is just the beginning. A university associate helps develop a poison to combat the ferocious carnivorous insects, whose colonies soon reach into the millions. As the death toll climbs, Richard works to help defeat the demon he has created while attempting to keep his own responsibility for the ants a secret. But all bets are off when he learns that the ants are attacking the woman he loves.
                                </p>

                                <p>
                                  In this novel, a scientist's carnivorous hybrid ants break loose and overrun the United States, and only time well tell if he can contain the menace he has unleashed.
                                </p>

                                <hr />

                                <p>
                                  Perry is the author of eight books, <b>The Paraponera</b> is the first of the Ralph Mullen adventure series. Born in Allentown, Pa., he has settled in Spring, Texas where he dedicates life to writing, learning, and family.
                                </p>
                              `,

                              ebooks:{},
                              paperback:{},
                              isComingSoon:true,
                          }}
                      />

                      <BookInfo
                          data={{
                              title:`The Black Tide`,
                              spanFirst:``,
                              imgSrc: Book1,
                              id:'the_gifted_one',
                              content:
                              `
                                <p>
                                   Ralph Mullen is a famous toxicologist who has done many
                                   investigations for the United States government and has recently
                                   retired; however, good men, especially with Ralph’s talents in
                                   science and skill as a Force Recon Marine, are not allowed
                                   to retire so easily. They become part-time retirees.
                                </p> 

                                <p>
                                   Ralph gets a call to investigate a strange “black tide”
                                   in the Northern Pacific Ocean. He thinks it is a waste
                                   of his time, but a longtime friend of his is asking, so
                                   he accepts the project. What he encounters is more than he bargained for.
                                </p>
                              `,

                              ebooks:{
                                  stratton:'https://www.stratton-press.com/books/the-black-tide/',
                                  barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459264',
                                  amazon:'https://www.amazon.com/Black-Tide-Perry-DeFiore-ebook/dp/B085KM3MSC/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                              },
                              paperback:{
                                  amazon:'https://www.amazon.com/Black-Tide-Perry-DeFiore/dp/1643459252/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600277345&sr=1-4',
                                  barnes:'https://www.barnesandnoble.com/w/the-black-tide-perry-defiore/1136605834?ean=9781643459257',
                                  booksamillion:'https://www.booksamillion.com/p/Black-Tide/Perry-Defiore/9781643459257?id=7714171848832',
                              },
                              isComingSoon:false,
                          }}
                      />

                      <BookInfo
                          data={{
                              title:`Menace from the Deep`,
                              spanFirst:``,
                              imgSrc: Book2,
                              id:'the_gifted_one',
                              content:
                              `
                                <p>
                                  Ralph is retired. He tells himself he doesn’t want
                                  to work because his family insists he doesn’t work,
                                  but his wife’s passing leaves him empty inside,
                                  so why not investigate what this strange species is?
                                </p> 

                                <p>
                                  As usual, Ralph’s investigations become dangerous
                                  and are filled with adventures. His grandson,
                                  who he has been grooming to take his place against
                                  his daughter’s wishes, secretly helps him on this new adventure.
                                  A creature that is rarely seen and that usually stays in the black depths of the sea,
                                  a creature made from chemosynthesis, decides to wreak havoc at the ocean’s surface.
                                </p>
                              `,

                              ebooks:{
                                  stratton:'https://www.stratton-press.com/books/menace-from-the-deep/',
                                  barnes:'https://www.barnesandnoble.com/w/menace-from-the-deep-perry-defiore/1136605835?ean=9781643459288',
                                  amazon:'https://www.amazon.com/Menace-Deep-Perry-DeFiore-ebook/dp/B085KMMH4R/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598033772&sr=1-2',
                              },
                              paperback:{
                                  amazon:'https://www.amazon.com/Menace-Deep-Perry-DeFiore/dp/1643459279/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598033772&sr=1-2',
                                  barnes:'https://www.barnesandnoble.com/w/menace-from-the-deep-perry-defiore/1136605835?ean=9781643459271',
                                  booksamillion:'https://www.booksamillion.com/p/Menace-from-Deep/Perry-Defiore/9781643459271?id=7714171848832',
                              },
                              isComingSoon:false,
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`The Fiddler`,
                              spanFirst:`Another Ralph Muller Adventure`,
                              imgSrc: Book4,
                              id:'',
                              content:
                              `
                                <p>
                                  Ralph Mullen takes his grandson on a fishing trip
                                  to enjoy a weekend with quality time with his namesake.
                                  He is asked to help seek and destroy what he believes is
                                  a nest of the venomous brown recluse spider and his grandson
                                  volunteers for the both of them. Unfortunately, a simple location
                                  and elimination of a nest of spiders turns into a multiple murder
                                  that endangers Ralph and his grandson’s life.
                                </p> 
                              `,
                              isComingSoon:false,
                              ebooks:{
                                stratton:'',
                                barnes:'https://www.barnesandnoble.com/w/the-fiddler-perry-d-defiore/1137881710?ean=9781648952135',
                                amazon:'https://www.amazon.com/Fiddler-Another-Ralph-Mullen-Adventure-ebook/dp/B08KWMJPP2/ref=sr_1_1?dchild=1&keywords=9781648952135&qid=1602270887&sr=8-1',
                              },
                              paperback:{
                                amazon:'https://www.amazon.com/dp/1648952127/ref=sr_1_1?dchild=1&keywords=9781648952128&qid=1602271480&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/the-fiddler-perry-d-defiore/1137881710?ean=9781648952128',
                                booksamillion:'https://www.booksamillion.com/p/Fiddler/Perry-D-Defiore/9781648952128?id=8182376598095',
                              }
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`I DIE TO LIVE`,
                              spanFirst:`Another Ralph Muller Adventure`,
                              imgSrc: Book5,
                              id:'',
                              content:
                              `
                                <p>
                                  Once again, Ralph Mullen faces danger, but
                                  this time, he’s on his grandson’s mission who
                                  seems to have inherited his grandfather’s nose for
                                  adventure, intrigue, and murder.
                                </p>
                              `,
                              isComingSoon:false,
                              ebooks:{
                                stratton:'',
                                barnes:'https://www.barnesandnoble.com/w/i-die-to-live-perry-d-defiore/1139421663;jsessionid=7E4C90418393FA291023C6B621F57C0C.prodny_store02-atgap06?ean=9781648953774',
                                amazon:'https://www.amazon.com/Die-Live-Perry-D-DeFiore-ebook/dp/B094BYF1B5/ref=sr_1_1?dchild=1&keywords=9781648953774&qid=1620658824&sr=8-1',
                              },
                              paperback:{
                                amazon:'https://www.amazon.com/I-Die-Live-Perry-Defiore/dp/164895376X/ref=sr_1_1?dchild=1&keywords=9781648953767&qid=1620658796&sr=8-1',
                                barnes:'https://www.barnesandnoble.com/w/i-die-to-live-perry-d-defiore/1139421663?ean=9781648953767',
                                booksamillion:'https://www.booksamillion.com/p/Die-Live/Perry-D-Defiore/9781648953767?id=8258036461372',
                              }
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`The Black Widow`,
                              spanFirst:`Another Ralph Mullen Adventure`,
                              imgSrc: Book7,
                              id:'',
                              content:
                              `
                                <p>
                                  Ralph tries to find himself after his grandfather died and left him Mullen Island. The DEA recruits him and Ralph feels he will do his thing to save many more lives than his grandfather did by stopping the drug lords. It wasn't what he expected. Although he does a good job for the DEA and builds himself a good reputation, he finds his life is in turmoil battling between work and personal relationships, and Ralph almost joins his grandfather a lot earlier that he planned when he meets up with a Black Widow.
                                </p> 

                                <p>
                                  The Black Widow is the sixth of Perry's Ralph Mullen Adventures and he is presently working on his seventh. Ralph Mullen was introduced into the series with the first book, The Paraponera, then the experienced scientist continued his adventures with The Black Tide, Menace from the Deep, The Fiddler, I Die to Live and now his grandson, who carries his same name is to follow in his grandfather's footsteps as he takes on his first assignment in The Black Widow.
                                </p>

                                <p>
                                  Perry's stories are based on real dangerous species that exist in today's world. Perry has studies in Environmental Science, Oceanography, Ocean Sciences, Chemistry, Physics, Astrophysics, Cosmology and many other minor areas. He has been published in Who's Who in the World, he speaks fluent Spanish. He founded a scientific society for the development of young scientists. He has worked with other scientists from various other countries on scientific expeditions, scientists who were Biologists, Geologists, and Paleontologists. He is comfortable in the laboratory, even working from a floating lab he designed while diving in thermal pools in Mexico.
                                </p>

                                <p>
                                  Perry has retired from education and science activities so he now writes about them, creating interesting characters and taking his readers around many parts of the world that he has traveled (according to BEEN, he has been to 21% of the world). He has three national radio interviews with Ric Bratton and his first book, The Paraponera has recently been translated into German and French as well as English.
                                </p>
                              `,

                              ebooks:{},
                              paperback:{},
                              isComingSoon:true,
                          }} 
                      /> 
                      
                      <BookInfo
                          data={{
                              title:`The Tetradotoxin Case`,
                              spanFirst:``,
                              imgSrc: Coming,
                              id:'',
                              content:
                              `
                                <p>
                                  
                                </p> 
                              `,

                              ebooks:{},
                              paperback:{},
                              isComingSoon:true,
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`Alien Propagation`,
                              spanFirst:``,
                              imgSrc: Book3,
                              id:'',
                              content:
                              `
                                <p>
                                  Many decades have been filled with stories about UFOs,
                                  the possibility of aliens, but all explanations are
                                  dubious…until now. Jack is a leading architect in a
                                  firm in Houston. He has a wife that every man desires,
                                  and he must continually worry about losing her. Going through
                                  one of his “rough” spots, he takes his beautiful lady on a short vacation
                                  to smooth things out between them. He’s in for the experience of a lifetime
                                  that teaches him, firsthand, how aliens can propagate the Earth.
                                </p> 
                              `,

                              ebooks:{
                                  stratton:'https://www.stratton-press.com/books/alien-propagation/',
                                  barnes:'https://www.barnesandnoble.com/w/alien-propagation-perry-defiore/1137192155?ean=9781648950872',
                                  amazon:'https://www.amazon.com/Alien-Propagation-Perry-DeFiore-ebook/dp/B08BF3XJQ7/ref=sr_1_3?dchild=1&keywords=Perry+DeFiore&qid=1600278089&s=books&sr=1-3',
                              },
                              paperback:{
                                  amazon:'https://www.amazon.com/Alien-Propagation-Perry-Defiore/dp/1648950868/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1600278089&sr=1-3',
                                  barnes:'https://www.barnesandnoble.com/w/alien-propagation-perry-defiore/1137192155?ean=9781648950865',
                                  booksamillion:'https://www.booksamillion.com/p/Alien-Propagation/Perry-Defiore/9781648950865?id=7714171848832',
                              },
                              isComingSoon:false,
                          }} 
                      />

                      <BookInfo
                          data={{
                              title:`Escape from Progress`,
                              spanFirst:``,
                              imgSrc: Book8,
                              id:'',
                              content:
                              `
                                <p>
                                  Domed Cities have sprung up across the US and have even begun to be built in other countries, advertising a utopian lifestyle; no sickness, no employment, perfect weather all year, but the population is divided on living in this perfec, futuristic world, and have insisted on living outside the enormous cities which lifestyle will dominate? There are hidden reasons for the domed cities' success and an 18 year old protégé is about to find out what they are and why they are hidden, but there will be trouble ahead, serious trouble.
                                </p> 

                                <p>
                                  This is Perry's 8th book. He has started his 9th book which will be the 5th of his Ralph Mullen adventures which will be entitled I DIE TO LIVE. Perry has extensive knowledge in the are of sciences which include Environmental Sciences, Ocean Sciences, Astrophysics and Cosmology. He was born and raised in Allentown, PA.
                                </p>
                              `,

                              ebooks:{},
                              paperback:{},
                              isComingSoon:true,
                          }} 
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