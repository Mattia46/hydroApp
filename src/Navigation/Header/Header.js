import React from 'react';
import PropTypes from 'prop-types';

import style from '../navigation.css';

const Header = ({
  history,
}) => (
  <div className={style.backHeader}>
    <div className={style.header}>
      <div className={style.headerBack} onClick={history.goBack}>
        <img src="../assets/img/logo.png" height="54" />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  setIsAuthorized: PropTypes.func.isRequired,
};

export {
  Header,
};
