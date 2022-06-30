/* eslint-disable camelcase */
import React from 'react';
import { useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';
import AboutHeader from '../../layouts/AboutHeader';
import classes from './Home.module.css';

const propTypes = {};

const defaultProps = {};

const Description = () => {
  const locations = useLocation();
  const { state } = locations.state;
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(displayJobFunction());
  // }, []);
  const {
    title, category, company, location, created, contract_time, description,
  } = state;

  return (
    <div>
      <AboutHeader />
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.description}>
        <ul className={classes.jobdetails}>
          <li>
            <p>
              Caegory:
              <br />
              {category.label}
            </p>
          </li>
          <li>
            <p>
              Company Name:
              <br />
              {company.display_name}
            </p>
          </li>
          <li>
            <p>
              Location:
              <br />
              {location.area[1]}
            </p>
          </li>
          <li>
            <p>
              Posted at:
              <br />
              {dateFormat(created, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
            </p>
          </li>
          <li>
            <p>
              Posted at:
              <br />
              {contract_time}
            </p>
          </li>
          <li>
            <p>
              Description:
              <br />
              {description}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
