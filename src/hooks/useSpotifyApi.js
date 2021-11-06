import SpotifyWebApi from 'spotify-web-api-node';
import { useEffect } from 'react';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

const useSpotifyApi = (accessToken) => {
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  return spotifyApi;
};

export default useSpotifyApi;
