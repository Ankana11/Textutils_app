import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-3" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">{props.about}</a>
              </li>
              
            </ul>
            <div className={`form-check mx-7 form-switch text-${props.mode==="light"?'dark':'light'}`} >
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              <input className="form-check-input"  type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};
