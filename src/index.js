import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/Context'
import Context from './Store/Context'
import firebase from './firebase/config'
import ContextAllPost from './Store/AllPostContext';

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
        <ContextAllPost>
        <Context>
            <App />
        </Context>
        </ContextAllPost>
    </FirebaseContext.Provider>,
    document.getElementById('root'));
