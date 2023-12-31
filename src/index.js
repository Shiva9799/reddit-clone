import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Header from './components/Header';
import SideNav from './components/SideNav';
import SignUpPopup from './components/SignUpPop';
import Main from './components/Main';
// import {Data} from '//Data.js';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './components/Store';
// import ProfileView from './components/redux/Profileview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <SideNav />
    <SignUpPopup />
    <Main />

    {/* <Provider store={store}>
      <div>
        <h1>Reddit Profile</h1>
        <ProfileView />
      </div>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
