/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import moment from 'moment';
import Header from '../../layouts/Header';
import classes from './Home.module.css';
import direction from '../../../img/direction.svg';
import { displayJobFunction } from '../../../redux/jobs/Job';
import Navbar from '../../layouts/Navbar';

const propTypes = {};

const defaultProps = {};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJobFunction());
  }, []);
  const jobList = useSelector((state) => state.JobReducer);
  return (
    <div>
      <Navbar />
      <Header />
      <h1 className={classes.title}>Jobs by titles</h1>
      <div className={classes.workgrid}>
        {jobList.map((el) => (
          <div key={el.id} className={classes.workgriditem}>
            <div className={classes.icon}>
              <Link
                to="/description"
                state={{ state: el }}
              >
                <img src={direction} id={el.id} alt="direction" />
              </Link>
            </div>
            <div className={classes.gridtext}>
              <h3>{el.title}</h3>
              <h3>{el.location.display_name}</h3>
              <h3>{moment(el.created).fromNow()}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
