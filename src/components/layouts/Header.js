import React from 'react';
import classes from './Header.module.css';

const propTypes = {};

const defaultProps = {};

const Header = () => (
  <div className={classes.header}>
    <h1>Connect your talent to the job market</h1>
  </div>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;
