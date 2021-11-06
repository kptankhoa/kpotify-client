import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from 'pages/Login/Login';
import Dashboard from 'pages/Dashboard/Dashboard';
import { bgColor } from './Colors';

const code = new URLSearchParams(window.location.search).get('code');

const App = () => (
  <div style={{ backgroundColor: bgColor }}>
    {code ? <Dashboard code={code}/> : <Login/>}
  </div>
);

export default App;
