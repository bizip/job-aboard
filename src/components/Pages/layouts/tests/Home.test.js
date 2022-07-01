import axios from 'axios';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../../redux/ConfigureStore';
import { displayJobFunction } from '../../../../redux/jobs/Job';
import Home from '../Home';

jest.mock('axios');
const TestHome = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
const response = {
  data: [
    {
      mission_id: 1,
      mission_name: 'mission name',
      description: 'mission description',
      active: false,
    },
  ],
};
axios.get.mockResolvedValue(response);
displayJobFunction();
render(<Router><TestHome /></Router>);

describe('Home Page tests', () => {
  it('It shoul render the home page with the title', () => {
    expect(screen.getByText(/Jobs by titles/i)).toBeInTheDocument();
  });
});
