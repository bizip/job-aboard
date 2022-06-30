import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Header from '../../layouts/Header';
import classes from './Home.module.css';
import direction from '../../../img/direction.svg';
import { displayJobFunction } from '../../../redux/jobs/Job';

const propTypes = {};

const defaultProps = {};

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayJobFunction());
  }, []);
  const jobList = useSelector((state) => state.JobReducer);
  console.log(jobList, 'OOOOOOOOOOOOOOOO');
  return (
    <div>
      <Header />
      <h1 className={classes.title}>Jobs by titles</h1>
      <div className={classes.workgrid}>
        <div className={classes.workgriditem}>
          <div className={classes.icon}>
            <img src={direction} alt="directtion" />
          </div>
          <div className={classes.gridtext}>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
          </div>
        </div>
        <div className={classes.workgriditem}>
          <div className={classes.icon}>
            <img src={direction} alt="directtion" />
          </div>
          <div className={classes.gridtext}>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
          </div>
        </div>
        <div className={classes.workgriditem}>
          <div className={classes.icon}>
            <img src={direction} alt="directtion" />
          </div>
          <div className={classes.gridtext}>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
          </div>
        </div>
        <div className={classes.workgriditem}>
          <div className={classes.icon}>
            <img src={direction} alt="directtion" />
          </div>
          <div className={classes.gridtext}>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
            <h3>Project Director</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
