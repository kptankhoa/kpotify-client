import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from 'hooks/useAuth';
import { Container } from 'react-bootstrap';
import SearchForm from 'pages/Dashboard/components/SearchForm';
import TrackSearchItem from './components/TrackSearchItem';
import Player from './components/Player';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingUri, setPlayingUri] = useState();

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);
  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getMyCurrentPlayingTrack().then((data) => {
      if (data.body) {
        setPlayingUri(data.body.item.uri);
      }
    });
  }, [accessToken]);
  useEffect(() => {
    if (!searchValue) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi
      .searchTracks(searchValue)
      .then((res) => {
        if (cancel) return;
        const searchedResult = res.body.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
            album: track.album.name,
            name: track.name,
            href: track.href,
            uri: track.uri,
          };
        });
        setSearchResults(searchedResult);
      });
    return () => cancel = true;
  }, [searchValue, accessToken]);

  return (
    <Container className="d-flex flex-column py-2 vh-100">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="flex-grow-1">
        {searchResults.map(track => <TrackSearchItem key={track.uri} track={track} setPlayingUri={setPlayingUri}/>)}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingUri}/>
      </div>
    </Container>
  );
};

export default Dashboard;
