import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../types';
import '../styles/Navbar.css';

const Navbar: React.FunctionComponent = (props): JSX.Element => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/test">Test API</Link>
  </nav>
);

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Navbar);
