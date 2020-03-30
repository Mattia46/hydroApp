import React, { useState } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import {
  BrowserRouter,
} from 'react-router-dom';
import { createBrowserHistory } from "history";

import {
  Routes,
} from '../Navigation/Navigation';
import { Header } from '../Navigation/Header/Header';
import style from '../Navigation/navigation.css';
import Mattia from '../Navigation/Navigation2';

const App = () => {
  const history = createBrowserHistory();
  const initialState = true;
  const [isAuthorized, setIsAuthorized] = useState(initialState);

  return (
    <BrowserRouter>
      <div className={style.main}>
        <Header
          history={history}
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />
        <Routes
          history={history}
          isAuthorized={isAuthorized}
          setIsAuthorized={setIsAuthorized}
        />
        <Mattia />
      </div>
    </BrowserRouter>
  );
};

export default withAuthenticator(App);
//export default withAuthenticator(App, { includeGreetings: true });
