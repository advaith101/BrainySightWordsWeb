import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {WordProvider} from './context';
import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <WordProvider>
            <App />
        </WordProvider>
    </Provider>,
    document.getElementById('root'),
);