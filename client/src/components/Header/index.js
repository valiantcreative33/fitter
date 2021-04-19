import React from 'react';
import Auth from '../../utils/auth';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './HeaderElements';

const Header = () => {

  const logout = event => {
    //overriding the <a> element's default nature of having the browser load a different resource.
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Nav>
        <NavLink to="/" style={{backgroundColor: "#91c788"}}>
          <img src={require('../../../src/assets/logo.svg')} alt="FITTER" height="75px" />
        </NavLink>
        <Bars />
          <NavMenu>
              <div>
                {Auth.loggedIn() ? (
                  <>
                    <NavLink className="nav-link mr-3" to="/profile" activeStyle>Profile</NavLink>
                      <a className="nav-link mr-3" href="/"  onClick={logout} activeStyle>Logout</a>
                    <NavLink className="nav-link mr-3 pb-3" to="/quiz" activeStyle>Set up Your Health Goals!</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink className="nav-link" to="/login" activeStyle>Login</NavLink>
                    <NavLink className="nav-link" to="/signup" activeStyle>Signup</NavLink>
                  </>
                )}
              </div>
          </NavMenu>
      </Nav>
    </>
  );
};


export default Header;
