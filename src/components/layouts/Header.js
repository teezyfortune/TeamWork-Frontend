import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { logoutUser } from '../../actions/auth';

class Header extends Component {
//   onLogoutClick(e) {
//     e.preventDefault();
//     this.props.logoutUser(this.props.history);
//   }

  render() {
    return (
           <div>
             <header>
             <nav>
             <ul className = "show">
             <div>
             <li>
             <a  href = '/' >  LOGO </a>
          </li>
          </div>
          
             <li><a className="nav-link" href="/register" style={{ cursor: 'pointer' }}>
              Create Employee
            </a></li>
        <li className="nav-item dropdown">
        <a className="dropdown-item" href="/create-gif">Gif Post</a>
        </li>
      <li>  <a className="dropdown-item" href="/create-article"> Post Article</a></li>

        <li className="nav-item"><a  href = '/logout'> log out</a>
          </li>
          </ul>
          </nav>
          </header>
          </div>
    );
    
  }
}



export default Header;