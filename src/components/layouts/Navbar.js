import React from 'react';
import classes from './NavBar.module.css';
import microphone from '../../img/microphone.svg';
import setting from '../../img/setting.svg';
import plane from '../../img/plane.svg';

const propTypes = {};

const defaultProps = {};

const Navbar = () => (
  <nav className={classes.nav}>
    <div className={classes.menuContainer}>
      <img src={plane} alt="logo" />
    </div>
    <div className={classes.textContainer}>
      <p>Job aboard</p>
    </div>
    <div className={classes.iconsContainer}>
      <img src={microphone} alt="microphone" />
      <img src={setting} alt="settion" />
    </div>
  </nav>
);

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;
// #endregion

export default Navbar;
