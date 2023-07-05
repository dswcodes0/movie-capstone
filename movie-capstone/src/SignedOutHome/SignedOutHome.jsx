import React from 'react';
import './SignedOutHome.css';
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

const SignedOutHome = () => {
    return (
      <Router>
      <div>
        <nav>
          <ul> 
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
            <li>
            <Link to="/SignUp">Sign Up</Link>
            </li>
          </ul>          
        </nav>
        <Switch>
          <Route path="/SignIn">
            <SignIn/>
          </Route>
          <Route path="/SignOut">
            <SignUp/>
          </Route>
        </Switch>
      </div>
      </Router>

    );
  };
  
  export default SignedOutHome;