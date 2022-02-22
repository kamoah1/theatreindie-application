import React,{ Component }  from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import Catalog from '../components/Catalog';
import section_ing1  from '../theme/img/home/home__bg5.jpg'
import section_ing2  from '../theme/img/section/section.jpg'
import section_ing3  from '../theme/img/section/section.jpg'
import section_ing4  from '../theme/img/section/section.jpg'
import viddd from  './BannerVideo';
import navl from  './NavbarLanding';
import '../theme/css/main.css';
import '../home.css';
class Main extends Component {
 
  render() {
    return (   

      <div className='App'>
       
      <Navbar/>
      <Banner/>
      <Filter/>
      <Catalog/> 
      {/* <Home/> */}
    </div>
      


    );
  }
}
    
export default Main;

