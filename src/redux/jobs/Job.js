import axios from 'axios';

const url = 'https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=4cb2e04b&app_key=670d7e2c98c9293ab7646a85a1317065';
// Actions
const DISPLAY_JOBS = 'Jobaboard/jobs/DISPALY_JOBS';

// action creator
// Action creator function that will display data once it is dispatched
export const displayJobFunction = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    return dispatch({ type: DISPLAY_JOBS, payload: response.data.results });
  } catch (err) {
    return err;
  }
};
// reducer function
const JobReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_JOBS:
      return action.payload;
    default:
      return state;
  }
};

export default JobReducer;
