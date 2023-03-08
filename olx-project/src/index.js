import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import { AuthProvider } from './store/AuthProvider';
import firebase from './/firebase/config'
import Post from './store/PostContext';

ReactDOM.render(
    
    <FirebaseContext.Provider value={{firebase}}>
        <AuthProvider>
            <Post>
             <App/>
            </Post>
        </AuthProvider>
    </FirebaseContext.Provider>
,document.getElementById('root'));



