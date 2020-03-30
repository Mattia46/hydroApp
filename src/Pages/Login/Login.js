import React, { useState } from 'react';
import PropTypes from 'prop-types';

import style from './login.css';

const userInitState = {
    username: '',
    password: '',
};

const Login = ({ history, setIsAuthorized}) => {
    const [user, setUser] = useState(userInitState);

    const onChange = e => {
        e.persist();
        let newUser = {...user, [e.target.name]: e.target.value};
        setUser(newUser);
    };

    const submitLogin = e => {
        e.preventDefault();
        if(user.username === 'Rafael' && user.password === 'vinoted') {
            setIsAuthorized(true);
            localStorage.setItem('login', true);
            return history.push('/homePage');
        }
        setUser(userInitState);
        alert('please type correct username and password');
    };

    return (
            <form className={style.c_form} data-testid="loginFormId" onSubmit={submitLogin}>
                <div className={style.c_login__header}>
                    <div className={style.c_logo} >
                        <img src="../assets/img/img_login.svg" height="160" />
                    </div>
                </div>

                <div className={style.c_login__body}>
                    <div className={style.c_login__body_header} >
                        <div>Hello!</div>
                        <div>Please login with your account.</div>
                    </div>

                    <div className={style.c_login__input}>
                        <input
                            data-testid="usernameId"
                            name="username"
                            onChange={onChange}
                            value={user.username}
                            placeholder="Username"

                            required
                        />
                    </div>
                    <div className={style.c_login__input} >
                        <input
                            data-testid="passwordId"
                            name="password"
                            onChange={onChange}
                            value={user.password}
                            placeholder="Password"
                            type="password"
                            required
                        />
                    </div>
                </div>
            </form>
    );
};

Login.propTypes = {
    history: PropTypes.object.isRequired,
    setIsAuthorized: PropTypes.func,
};
export default Login;
