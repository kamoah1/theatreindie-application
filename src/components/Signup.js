
import React,{ Component }  from 'react';
import section_ing1  from '../theme/img/home/home__bg5.jpg'
import section_ing2  from '../theme/img/section/section.jpg'
import section_ing3  from '../theme/img/section/section.jpg'
import section_ing4  from '../theme/img/section/section.jpg'
import BannerVideo from  './BannerVideo';
import NavbarLanding from  './NavbarLanding';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
//import vidclip from 'http://view.vzaar.com/2710053.mp4';
import videop from '../vid1.mp4';
import '../home.css';


        
        class Signup extends Component {
         
          render() {
            return (   
        
         <div className="sign section--bg" data-bg="img/section/section.jpg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">
						{/* <!-- authorization form --> */}
						<form action="#" className="sign__form">
							<a href="index.html" className="sign__logo">
								<img src="img/logo.svg" alt=""/>
							</a>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Email"/>
							</div>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Password"/>
							</div>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Confirm Password"/>
							</div>
							
							<button className="sign__btn" type="button">Sign up</button>

							<span className="sign__text">You have an account? <Link to='/Login'>Login</Link></span>

							<span className="sign__text"><a href="#">Forgot password?</a></span>
						</form>
						{/* <!-- end authorization form --> */}
					</div>
				</div>
			</div>
		</div>
	</div>
        

    );
  }
}
    
export default Signup;

