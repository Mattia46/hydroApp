import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import { RoutersList } from '../Configuration/normaliseRoutingConfig';
import Login from '../Pages/Login/Login';
import HomePage from '../Pages/HomePage/HomePage';
import style from './navigation.css';


const navigationRoutes = isAuthorized =>
    Object.keys(RoutersList)
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
                    render={props => isAuthorized
                        ? <Component
                            testId={name}
                            history={props.history}
                        />
                        : <Redirect to="/login" />
                    }
                />
            );
        });

const Routes = ({
    isAuthorized,
    setIsAuthorized,
}) => (
    <div className={style.containerBody}>
        <Switch>
            {navigationRoutes(isAuthorized)}
            <Route
                path="/login"
                render={props =>
                    <Login
                        history={props.history}
                        setIsAuthorized={setIsAuthorized}
                    />
                }
            />
            <Route
                path="*"
                render={() => isAuthorized
                    ? <Redirect to="/homePage" />
                    : <Redirect to="/login" />
                }
            />
            <Route exact path="/" component={HomePage } />
        </Switch>
    </div>
);

Routes.propTypes = {
    history: PropTypes.object.isRequired,
    isAuthorized: PropTypes.bool.isRequired,
    setIsAuthorized: PropTypes.func.isRequired,
};

export {
    Routes
};
