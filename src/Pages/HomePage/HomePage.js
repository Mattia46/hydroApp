import React from 'react';
import PropTypes from 'prop-types';

const HomePage = () => (
  <div>
    <h2 style={{marginTop: 200, marginLeft: 50}}>Hydro House HomePage</h2>
  </div>
);

HomePage.propTypes = {
  testId: PropTypes.string,
};

export default HomePage;
