import React, { createContext } from 'react';
import useAuth from 'hooks/useAuth';
import useSpotifyApi from 'hooks/useSpotifyApi';
import Dashboard from 'pages/Dashboard/Dashboard';
import SpotifyProvider from 'pages/Dashboard/provider/SpotifyProvider';

export const ApiContext = createContext({});

const DashboardContainer = ({ code }) => {
  const token = useAuth(code);
  const spotifyApi = useSpotifyApi(token);

  return (
    <ApiContext.Provider value={{ spotifyApi, accessToken: spotifyApi.getAccessToken() }}>
      <SpotifyProvider>
        <Dashboard />
      </SpotifyProvider>
    </ApiContext.Provider>
  );
};

export default DashboardContainer;
