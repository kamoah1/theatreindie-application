import React,{ Component }  from 'react';
import cover1  from '../theme/img/covers/cover.jpg'
import cover4  from '../theme/img/covers/cover4.jpg'
import cover2  from '../theme/img/covers/cover2.jpg'
import cover3  from '../theme/img/covers/cover3.jpg'
import App from '../App';
// import '../App.css';
class Catalog extends Component {
 
  render() {
    return (    
        <div className="catalog">
		<div className="container">
			<div className="row">
				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
							<img src={cover1} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
							<span className="card__category">
								<a href="#">Action</a>
								<a href="#">Triler</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover2} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Benched</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
						</div>
					</div>
				</div>
				{/* /<!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover3} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Whitney</a></h3>
							<span className="card__category">
								<a href="#">Romance</a>
								<a href="#">Drama</a>
								<a href="#">Music</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				
				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover3} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Whitney</a></h3>
							<span className="card__category">
								<a href="#">Romance</a>
								<a href="#">Drama</a>
								<a href="#">Music</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
						<div className="card__cover">
                        <img src={cover4} alt=""/>
							<a href="#" className="card__play">
								<i className="icon ion-ios-play"></i>
							</a>
						</div>
						<div className="card__content">
							<h3 className="card__title"><a href="#">Blindspotting</a></h3>
							<span className="card__category">
								<a href="#">Comedy</a>
								<a href="#">Drama</a>
							</span>
							<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
						</div>
					</div>
				</div>
				{/* <!-- end card --> */}				{/* ////////////////<!-- paginator --> */}
				<div className="col-12">
					<ul className="paginator">
						<li className="paginator__item paginator__item--prev">
							<a href="#"><i className="icon ion-ios-arrow-back"></i></a>
						</li>
						<li className="paginator__item"><a href="#">1</a></li>
						<li className="paginator__item paginator__item--active"><a href="#">2</a></li>
						<li className="paginator__item"><a href="#">3</a></li>
						<li className="paginator__item"><a href="#">4</a></li>
						<li className="paginator__item paginator__item--next">
							<a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
						</li>
					</ul>
				</div>
				{/* <!-- end paginator --> */}
			</div>
		</div>
	</div>
    );
  }
}
    
export default Catalog;

