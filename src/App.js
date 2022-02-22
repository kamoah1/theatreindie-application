

import React,{ Component }  from 'react';

import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import './theme/css/bootstrap-reboot.min.css';
import Home from './components/Home';
import './theme/css/bootstrap-grid.min.css';
import './theme/css/owl.carousel.min.css';
import './theme/css/jquery.mCustomScrollbar.min.css';
import './theme/css/nouislider.min.css';
import './theme/css/ionicons.min.css';
import './theme/css/plyr.css';
import './theme/css/photoswipe.css';
import './theme/css/default-skin.css';
// import './theme/css/main.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import './theme/js/jquery-3.3.1.min.js' 
//import './theme/js/main.js';
class App extends Component {

   
 
  render() {
    return (    
 
        <Router>
        <Switch>
          <Route exact path="/">
          {/* <Mainview /> */}
          <Home />
          </Route>
          <Route path="/Home">
          <Main />
          
          </Route>
          <Route path="/Signup">
          <Signup />
          
          </Route>
          <Route exact path="/Login">
          {/* <Mainview /> */}
          <Login />
          </Route>
        </Switch>
       </Router>
         
 
    );
  }
}
    
export default App;