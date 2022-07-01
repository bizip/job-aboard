import React from 'react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';
import microphone from '../../img/microphone.svg';
import setting from '../../img/setting.svg';
import back from '../../img/back.svg';

const propTypes = {};

const defaultProps = {};

const JobNav = () => (
  <nav className={classes.nav}>
    <Link to="/">
      {' '}
      <div className={classes.menuContainer}>
        <img src={back} alt="logo" />
      </div>
    </Link>

    <div className={classes.textContainer}>
      <p>Job aboard</p>
    </div>
    <div className={classes.iconsContainer}>
      <img src={microphone} alt="microphone" />
      <img src={setting} alt="settion" />
    </div>
  </nav>
);

JobNav.propTypes = propTypes;
JobNav.defaultProps = defaultProps;
// #endregion

export default JobNav;
