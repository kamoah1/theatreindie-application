import React,{ Component }  from 'react';


class Filter extends Component {
 
  render() {
    return (    
		<div className="filter">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="filter__content">
						<div className="filter__items">
							{/* <!-- filter item --> */}
							<div className="filter__item" id="filter__genre">
								<span className="filter__item-label">GENRE:</span>

								<div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-genre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="button" value="Action/Adventure"/>
									<span></span>
								</div>

								<ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
									<li>Action/Adventure</li>
									<li>Animals</li>
									<li>Animation</li>
									<li>Biography</li>
									<li>Comedy</li>
									<li>Cooking</li>
									<li>Dance</li>
									<li>Documentary</li>
									<li>Drama</li>
									<li>Education</li>
									<li>Entertainment</li>
									<li>Family</li>
									<li>Fantasy</li>
									<li>History</li>
									<li>Horror</li>
									<li>Independent</li>
									<li>International</li>
									<li>Kids</li>
									<li>Kids & Family</li>
									<li>Medical</li>
									<li>Military/War</li>
									<li>Music</li>
									<li>Musical</li>
									<li>Mystery/Crime</li>
									<li>Nature</li>
									<li>Paranormal</li>
									<li>Politics</li>
									<li>Racing</li>
									<li>Romance</li>
									<li>Sci-Fi/Horror</li>
									<li>Science</li>
									<li>Science Fiction</li>
									<li>Science/Nature</li>
									<li>Spanish</li>
									<li>Travel</li>
									<li>Western</li>
								</ul>
							</div>
							{/* <!-- end filter item --> */}

							{/* <!-- filter item --> */}
							{/* <div className="filter__item" id="filter__quality">
								<span className="filter__item-label">QUALITY:</span>

								<div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-quality" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="button" value="HD 1080"/>
									<span></span>
								</div>

								<ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-quality">
									<li>HD 1080</li>
									<li>HD 720</li>
									<li>DVD</li>
									<li>TS</li>
								</ul>
							</div> */}
							{/* <!-- end filter item --> */}

							{/* <!-- filter item --> */}
							{/* <div className="filter__item" id="filter__rate">
								<span className="filter__item-label">IMBd:</span>

								<div className="filter__item-btn dropdown-toggle" role="button" id="filter-rate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<div className="filter__range">
										<div id="filter__imbd-start"></div>
										<div id="filter__imbd-end"></div>
									</div>
									<span></span>
								</div>

								<div className="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-rate">
									<div id="filter__imbd"></div>
								</div>
							</div> */}
							{/* <!-- end filter item --> */}

							{/* <!-- filter item --> */}
							{/* <div className="filter__item" id="filter__year">
								<span className="filter__item-label">RELEASE YEAR:</span>

								<div className="filter__item-btn dropdown-toggle" role="button" id="filter-year" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<div className="filter__range">
										<div id="filter__years-start"></div>
										<div id="filter__years-end"></div>
									</div>
									<span></span>
								</div>

								<div className="filter__item-menu filter__item-menu--range dropdown-menu" aria-labelledby="filter-year">
									<div id="filter__years"></div>
								</div>
							</div> */}
							{/* <!-- end filter item --> */}
						</div>
						
						{/* <!-- filter btn --> */}
						<button className="filter__btn" type="button">apply filter</button>
						{/* <!-- end filter btn --> */}
					</div>
				</div>
			</div>
		</div>
	</div>
 
    );
  }
}
    
export default Filter;

