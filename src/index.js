// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import { render } from "react-dom";
import "./index.css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import VideoComponent from './VideoComponent';
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

let dom = document.getElementById("app");
render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <div>
            <AppBar title="React Twilio Video" />
            <VideoComponent />
            </div>
    </MuiThemeProvider>
    ,
    dom
);