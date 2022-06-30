import axios from 'axios';

const url = 'https://arbeitnow.com/api/job-board-api';
// Actions
const DISPLAY_JOBS = 'jobaboard/jobs/DISPLAY_JOB';

// action creator

// Action creator function that will display data once it is dispatched
export const displayJobFunction = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    return dispatch({ type: DISPLAY_JOBS, payload: response.data });
  } catch (err) {
    return err;
  }
};

// reducer function
const JobReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_JOBS:
      return 'the converted array from the object';
    default:
      return state;
  }
};

export default JobReducer;
