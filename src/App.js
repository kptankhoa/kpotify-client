import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from 'pages/Login/Login';
import DashboardContainer from 'pages/Dashboard/DashboardContainer';
import 'App.css';
import { bgColor } from './Colors';

const code = new URLSearchParams(window.location.search).get('code');

const App = () => (
  <div style={{ backgroundColor: bgColor }}>
    {code ? <DashboardContainer code={code}/> : <Login/>}
  </div>
);

export default App;
