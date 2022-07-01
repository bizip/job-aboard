import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import JobNav from '../JobNav';

describe('Test for the navigation bar section', () => {
  it('It should render the navigation bar', () => {
    const nav = renderer
      .create(<Router><Navbar /></Router>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });

  it('It should render the descripttions navigation bar', () => {
    const nav = renderer
      .create(<Router><JobNav /></Router>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
