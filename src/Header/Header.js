import React, { Component } from 'react'
import { APP_NAME } from '../Constants/Constants';
class Header extends Component {
  render() {
    return (
      <div className="row">
        <header className="d-flex w-100 justify-content-center bg--squad">
          <nav className="col-12 col-lg-10 navbar">
            <span className="nav--squad">{APP_NAME}</span>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;
