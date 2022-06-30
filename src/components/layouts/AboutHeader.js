import React from 'react';
import classes from './Header.module.css';

const propTypes = {};

const defaultProps = {};

const AboutHeader = () => (
  <div className={classes.aboutheader}>
    <h1>This is the header</h1>
  </div>
);

AboutHeader.propTypes = propTypes;
AboutHeader.defaultProps = defaultProps;
// #endregion

export default AboutHeader;
