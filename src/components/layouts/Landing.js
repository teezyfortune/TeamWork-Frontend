import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import devc from '../../images/landing.jpg'
import { Link } from 'react-router-dom'
import {Grid, cell} from 'reect-md';

class Landing extends Component {

  render() {
  
    return (

    )
      
}
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(Landing)