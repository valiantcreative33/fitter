import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    //overriding the <a> element's default nature of having the browser load a different resource.
    event.preventDefault();
    Auth.logout();
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: "#91c788"}}>
        <Link className="header-title px-3 mx-3" to="/">
          <img src={require('../../../src/assets/logo.svg')} alt="FITTER" height="75px" />
        </Link>
      <div className="collapse navbar-collapse nav-items p-1 mx-2" id="navbarNavAltMarkup">
          <div>
          {Auth.loggedIn() ? (
            <>
              <Link className=" nLink nav-link px-3 mx-3" to="/profile">Profile</Link>
              <a className="nLink nav-link px-3 mx-3" href="/"  onClick={logout}>Logout</a>
              <Link className="nLink nav-link px-3 mx-3" style={{color: "black"}} to="/quiz" >Set up Your Health Goals!</Link>
            </>
          ) : (
            <>
              <Link className="nLink nav-link px-3 mx-3" to="/login">Login</Link>
              <Link className="nLink nav-link px-3 mx-3" to="/signup">Signup</Link>
            </>
          )}
          </div>
      </div>
      </nav>
  );
};


export default Header;
