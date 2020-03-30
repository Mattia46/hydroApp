import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import App from './App';

describe('Navigation:', () => {
    afterEach(() => {
        cleanup;
    });
    const history = createMemoryHistory();
    const getContainer = () => render(
          <Router history={history}>
            <App />
          </Router>
    );

    it('Should render the homePage with NavBar', () => {
        const { container } = getContainer();
        const navBar = getByTestId(container, "NavBar");
        expect(navBar).toBeDefined();
        expect(container).toMatchSnapshot();
    });
});

