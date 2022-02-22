import React,{ Component }  from 'react';
import main  from '../components/Main';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

class NavbarLanding extends Component {

	
  render() {
    return (    
        <header className="header">
		<div className="header__wrap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header__content">
							{/* <!-- header logo --> */}
							<a href="index.html" className="header__logo">
								<img src="img/logo.svg" alt=""/>
							</a>
						
							<Link to='./Login' className="header__sign-in" style={{position:'right'}}>
									<i className="icon ion-ios-log-in"></i>
									<span> Sign up for free </span>
						    </Link>
							
							</div>
							{/* <!-- end header auth --> */}

							{/* <!-- header menu btn --> */}
							<button className="header__btn" type="button">
								<span></span>
								<span></span>
								<span></span>
							</button>
							{/* <!-- end header menu btn --> */}
						</div>
					</div>
				</div>
			</div>
		

	</header>
 
    );
  }
}
    
export default NavbarLanding;

