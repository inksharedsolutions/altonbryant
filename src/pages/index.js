import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import Author from "../components/author"
import MidBook from "../components/front-book"
import FeaturedLogos from "../components/mid-main"
import ParallaxBottom from "../components/parallax-bottom"
import Video from "../components/trailer"
import { Helmet } from "react-helmet"


const IndexPage = (props) => (
  <Layout>
      <Helmet title="Home | Perry Defiore" />
      <Nav pathExt={props.path}/>
      <Banner/>
      <MidBook/>
      <Video 
        url="https://www.youtube.com/watch?v=9JzwSof3npw"
        title1="Book"
        title2="Trailer"
        description="Ralph Mullen is a well-known toxicologist who has been involved in numerous investigations. Join Ralph as he investigates the mysterious 'Black Tide' in the Northern Pacific Ocean. Start your journey with him by pressing the play button."/>
      <Author/>
      <ParallaxBottom />
      <Video 
        url="https://www.youtube.com/watch?v=s1g_Fy3mogg"
        title1="Radio"
        title2="Interviews"
        description="Just like how the story of the book goes, the process in writing it was also a journey. Hear about it from the author himself. Click the play button and learn more."/>
      <FeaturedLogos/>
  </Layout>
)

export default IndexPage