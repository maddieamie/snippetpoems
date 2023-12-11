import React from 'react';
import Header from './Header'; 
//import Footer from './Footer';
import About from './About';
import Profile from './Profile';
import GameBoard from './MagnetBoard';
//import { withAuth0 } from '@auth0/auth0-react';


import '../styles/index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





class App extends React.Component {

  
  

  render() {

    //const {isAuthenticated} = this.props.auth0;
     /* <Route 
              exact path="/"
              element={isAuthenticated ? <BestBooks /> : <h3>Please login :)</h3>}
            >
            </Route>*/

    return (
      <>
        <Router>
            <Header />

          <Routes>
          
          
            <Route 
              path="/about"
              element={<About />}
            >
            </Route>

            <Route 
              path="/profile"
              element={<Profile />}>
            </Route>

            <Route 
              path="/"
              element={<GameBoard />}>
            </Route>

          </Routes>
       
        </Router>
      </>
    )
  }
}
export default App;
//export default withAuth0(App);
