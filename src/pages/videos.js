import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import ReactPlayer from 'react-player/youtube'
import { Helmet } from 'react-helmet';

const radInt = (props) =>{
	return(
		<>
		 	<Layout>
                <Helmet title="Videos | Perry Defiore" />
			 	<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={``}
                    contextHeading={`Videos`} 
                />

	 			<div className="radio-interviews-content">
				 	<div className="container-gt">
						{/* <h1 className="video-header">Radio Interviews</h1> */}
						<div className="grid-two-columns">  
							<div className="radint-vid video-1">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"https://www.youtube.com/watch?v=vhf_5wWt60s"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
							</div>    
							<div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"https://www.youtube.com/watch?v=XHeBWwp349w"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
							</div>  
                            <div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"https://www.youtube.com/watch?v=s1g_Fy3mogg"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
							</div>
							<div className="radint-vid video-2">
								<div className="player-wrapper">
									<ReactPlayer
										className="react-player"
										url={"https://www.youtube.com/watch?v=9JzwSof3npw"}
										width="100%"
										height="400px"
										controls={true}
										playIcon
									/>
								</div>
							</div> 
						</div>
					</div>
 				</div>
	 		</Layout>
		</>
	)
}

export default radInt;