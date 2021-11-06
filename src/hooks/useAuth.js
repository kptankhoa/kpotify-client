import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  useEffect(() => {
    axios.post(`${process.env.REACT_APP_SPOTIFY_SERVER_API}/auth/login`, {
      code,
    }).then((res) => {
      const { accessToken, refreshToken, expiresIn } = res.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setExpiresIn(expiresIn);
      window.history.pushState({}, null, '/');
    }).catch((err) => {
      console.log(err);
      // window.location = '/';
    });
  }, [code]);

  useEffect(() => {
    if (! refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      axios.post(`${process.env.REACT_APP_SPOTIFY_SERVER_API}/auth/refresh`, {
        refreshToken,
      }).then((res) => {
        const { accessToken, expiresIn } = res.data;
        setAccessToken(accessToken);
        setExpiresIn(expiresIn);
      }).catch(() => {
        window.location = '/';
      });
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
