
import React,{ Component }  from 'react';
import section_ing1  from '../theme/img/home/home__bg5.jpg'
import section_ing2  from '../theme/img/section/section.jpg'
import section_ing3  from '../theme/img/section/section.jpg'
import section_ing4  from '../theme/img/section/section.jpg'
import BannerVideo from  '../components/BannerVideo';
import NavbarLanding from  '../components/NavbarLanding';
//import vidclip from 'http://view.vzaar.com/2710053.mp4';
import videop from '../vid1.mp4';
import '../home.css';

class Home extends Component {
 
  render() {
    return (   

<div>
  <NavbarLanding/>
  <BannerVideo/>
  {/* <div id="outer">
    <div id="home-top-video">
    <video autoPlay  muted loop >
        <source src={videop} type="video/mp4" /> Your browser does not support the video tag. We suggest you upgrade your browser.
      </video>
      <div id="home-text">
        <div><img src="http://marquesslondon.herokuapp.com/images/logo.ee1689ee.png"/></div>
        <h3>LIFESTYLE</h3>
      </div>
    </div>
  </div> */}
</div>



    );
  }
}
    
export default Home;

