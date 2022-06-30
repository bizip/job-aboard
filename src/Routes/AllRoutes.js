import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Description from '../components/Pages/layouts/Description';
import Home from '../components/Pages/layouts/Home';

const propTypes = {};

const defaultProps = {};

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/description/:id" element={<Description />} />
  </Routes>
);

AllRoutes.propTypes = propTypes;
AllRoutes.defaultProps = defaultProps;

export default AllRoutes;
