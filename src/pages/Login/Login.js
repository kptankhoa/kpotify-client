import React from 'react';
import querystring from 'querystring';
import { Container } from 'react-bootstrap';

const query = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  response_type: 'code',
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  // eslint-disable-next-line max-len
  scope: 'streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state',
};
const AUTH_URL = process.env.REACT_APP_SPOTIFY_AUTH_URL + querystring.stringify(query);

const Login = () => {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <a className='bt btn-success btn-lg text-decoration-none' href={AUTH_URL}>
        Login with Spotify
      </a>
      <p className='text-white'>KPotify by Khoa Phan</p>
    </Container>
  );
};

export default Login;
