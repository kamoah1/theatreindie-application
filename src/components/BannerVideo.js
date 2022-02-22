import React,{ Component }  from 'react';
import section_ing1  from '../theme/img/home/home__bg5.jpg'
import section_ing2  from '../theme/img/section/section.jpg'
import section_ing3  from '../theme/img/section/section.jpg'
import section_ing4  from '../theme/img/section/section.jpg'
 import videop from '../vid1.mp4';
//import videophttps://www.youtube.com/watch?v=XIqGsHkF1i0&ab_channel=IyobosaStudios
 import '../home.css';
 import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
 import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
class BannerVideo extends Component {
 
  render() {
    return (   

   <div className="jumbo-hero" style={{width:'100%'}}>
        <div className="" style={{width:'100%'}}>
            <div className="jumbo-hero__inner">
              
          <BrowserView>
          <div id="outer">
        <div id="home-top-video">
       
        <video autoPlay loop muted playsinline style={{width:'100%'}} >
            <source src={videop} type="video/mp4" /> Your browser does not support the video tag. We suggest you upgrade your browser.
          </video>
       
            
        </div>
      </div>
            <div id="home-text">
          
              <h1 className="content__title" style={{color:'white'}} >Stream Free Movies &amp; TV Shows</h1>
                <h3 className="" style={{color: `white`}}>Browse and Watch all your favorite online movies &amp; series for free!</h3>
               
                <Link to='./Login' className="section__btn" style={{position:'right'}}>
									
									<span> Sign up for free </span>
						    </Link>
                
            </div>
          </BrowserView>
          <MobileView>
          <div className="jumbo-hero"  style={{backgroundImage: `url(${section_ing1})`}}>
          <div id="home-text-mobile">
          
          <h1 className="content__title" style={{color:'white'}} >Stream Free Movies &amp; TV Shows</h1>
                <h3 className="" style={{color: `white`}}>Browse and Watch all your favorite online movies &amp; series for free!</h3>
               
                <Link to='./Login' className="section__btn" style={{position:'right'}}>
									
									<span> Sign up for free </span>
						    </Link>
             
          </div></div>
          </MobileView>

    
    </div>

          
           
        </div>
    </div>


 
    );
  }
}
    
export default BannerVideo;

