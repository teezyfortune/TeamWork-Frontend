import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth';
import { withRouter } from 'react-router-dom';

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    return (
  
             <header>
             <nav>
             <ul className = "show">
             <li>
             <link  to = '#' >  LOGO </link>
          </li>
             <li><Link className="nav-link" to="/register" style={{ cursor: 'pointer' }}>
              Create Employee
            </Link></li>
        <li className="nav-item dropdown">
        <Link className="dropdown-item" to="/create-gif">Gif Post</Link>
        </li>
      <li>  <Link className="dropdown-item" to="/create-article"> Post Article</Link></li>

        <li className="nav-item"><link  onClick={this.onLogoutClick.bind(this)} className="nav-link"> log out</link>
          </li>
          </ul>
          </nav>
          </header>
    );
    
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, { logoutUser })(withRouter(Header));