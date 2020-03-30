import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { RoutersList } from '../Configuration/normaliseRoutingConfig';
import HomePage from '../Pages/HomePage/HomePage';
import style from './navigation.css';

function navigationRoutes() {
  return Object.keys(RoutersList)
    .map((page, index) => {
      const {
        Component,
        url,
        name
      } = RoutersList[page];

      return (
        <Route
          key={index}
          path={url}
          render={props => <Component
            testId={name}
            history={props.history}
          />
          }
        />
      );
    });
}

const Routes = () => (
  <div className={style.containerBody}>
    <Switch>
      {navigationRoutes()}
      <Route path="*">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export {
  Routes
};
