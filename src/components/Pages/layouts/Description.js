import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import dateFormat from 'dateformat';
import AboutHeader from '../../layouts/AboutHeader';
import classes from './Home.module.css';
// import { displayJobFunction } from '../../../redux/jobs/Job';

const propTypes = {};

const defaultProps = {};

const Description = () => {
  const { id } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(displayJobFunction());
  // }, []);
  const singleJob = useSelector((state) => state.JobReducer).filter((item) => item.id === id);
  console.log(singleJob);

  return (
    <div>
      <AboutHeader />
      <h1 className={classes.title}>{singleJob[0].title}</h1>
      <div className={classes.description}>
        <ul className={classes.jobdetails}>
          <li>
            <p>
              Caegory:
              {singleJob[0].category.label}
            </p>
          </li>
          <li><p>{singleJob[0].company.display_name}</p></li>
          <li>
            <p>
              Location:
              {singleJob[0].location.area[1]}
            </p>
          </li>
          <li>
            <p>
              Posted at:
              {dateFormat(singleJob[0].created, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
            </p>
          </li>
          <li>
            <p>
              Posted at:
              {singleJob[0].contract_time}
            </p>
          </li>
          <li><p>{singleJob[0].description}</p></li>
        </ul>
      </div>
    </div>
  );
};

Description.propTypes = propTypes;
Description.defaultProps = defaultProps;

export default Description;
