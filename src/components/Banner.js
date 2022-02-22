import React,{ Component }  from 'react';
import section_ing1  from '../theme/img/home/home__bg5.jpg'
import section_ing2  from '../theme/img/section/section.jpg'
import section_ing3  from '../theme/img/section/section.jpg'
import section_ing4  from '../theme/img/section/section.jpg'
 import '../App.css';
class Banner extends Component {
 
  render() {
    return (   

   <div className="jumbo-hero"  style={{backgroundImage: `url(${section_ing1})`}}>
        <div className="container">
            <div className="jumbo-hero__inner">
                <h1 className="content__title" >Stream Free Movies &amp; TV Shows</h1>
                <h3 className="" style={{color: `white`}}>Browse and Watch all your favorite online movies &amp; series for free!</h3>

            </div>
        </div>
    </div>

	

		
	// 	<section className="home" style={{backgroundImage: `url(${section_ing1})`}}>
	// 	{/* <!-- home bg --> */}
	// 	<div className="owl-carousel home__bg">
	// 		<div className="item home__cover"   style={{backgroundImage: `url(${section_ing1})`}}></div>
	// 		<div className="item home__cover"  style={{backgroundImage: `url(${section_ing2})`}}></div>
	// 		<div className="item home__cover"  style={{backgroundImage: `url(${section_ing3})`}}></div>
	// 		<div className="item home__cover"  style={{backgroundImage: `url(${section_ing4})`}}></div>
	// 	</div>
	// 	{/* <!-- end home bg --> */}

	// 	<div className="container">
	// 		<div className="row">
	// 			<div className="col-12">
				

	// 				<h1 className="home__title"><b>Stream Free Movies & TV Shows</b> 2022</h1>

	// 				<button className="home__nav home__nav--prev" type="button">
	// 					<i className="icon ion-ios-arrow-round-back"></i>
	// 				</button>
	// 				<button className="home__nav home__nav--next" type="button">
	// 					<i className="icon ion-ios-arrow-round-forward"></i>
	// 				</button>
	// 			</div>

	// 			<div className="col-12">
	// 				<div className="owl-carousel home__carousel">
	// 					<div className="item">
	// 						{/* <!-- card --> */}
	// 						<div className="card card--big">
	// 							<div className="card__cover">
	// 								<img src="img/covers/cover.jpg" alt=""/>
	// 								<a href="#" className="card__play">
	// 									<i className="icon ion-ios-play"></i>
	// 								</a>
	// 							</div>
	// 							<div className="card__content">
	// 								<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
	// 								<span className="card__category">
	// 									<a href="#">Action</a>
	// 									<a href="#">Triler</a>
	// 								</span>
	// 								<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
	// 							</div>
	// 						</div>
	// 						{/* <!-- end card --> */}
	// 					</div>

	// 					<div className="item">
	// 						{/* <!-- card --> */}
	// 						<div className="card card--big">
	// 							<div className="card__cover">
	// 								<img src="img/covers/cover2.jpg" alt=""/>
	// 								<a href="#" className="card__play">
	// 									<i className="icon ion-ios-play"></i>
	// 								</a>
	// 							</div>
	// 							<div className="card__content">
	// 								<h3 className="card__title"><a href="#">Benched</a></h3>
	// 								<span className="card__category">
	// 									<a href="#">Comedy</a>
	// 								</span>
	// 								<span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
	// 							</div>
	// 						</div>
	// 						{/* <!-- end card --> */}
	// 					</div>

	// 					<div className="item">
	// 						{/* <!-- card --> */}
	// 						<div className="card card--big">
	// 							<div className="card__cover">
	// 								<img src="img/covers/cover3.jpg" alt=""/>
	// 								<a href="#" className="card__play">
	// 									<i className="icon ion-ios-play"></i>
	// 								</a>
	// 							</div>
	// 							<div className="card__content">
	// 								<h3 className="card__title"><a href="#">Whitney</a></h3>
	// 								<span className="card__category">
	// 									<a href="#">Romance</a>
	// 									<a href="#">Drama</a>
	// 								</span>
	// 								<span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
	// 							</div>
	// 						</div>
	// 						{/* <!-- end card --> */}
	// 					</div>

	// 					<div className="item">
	// 						{/* <!-- card --> */}
	// 						<div className="card card--big">
	// 							<div className="card__cover">
	// 								<img src="img/covers/cover4.jpg" alt=""/>
	// 								<a href="#" className="card__play">
	// 									<i className="icon ion-ios-play"></i>
	// 								</a>
	// 							</div>
	// 							<div className="card__content">
	// 								<h3 className="card__title"><a href="#">Blindspotting</a></h3>
	// 								<span className="card__category">
	// 									<a href="#">Comedy</a>
	// 									<a href="#">Drama</a>
	// 								</span>
	// 								<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
	// 							</div>
	// 						</div>
	// 						{/* <!-- end card --> */}
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>

 
    );
  }
}
    
export default Banner;

