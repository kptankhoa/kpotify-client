import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from 'pages/Dashboard/components/SearchForm';
import TrackSearchItem from 'pages/Dashboard/components/TrackSearchItem';
import Player from 'pages/Dashboard/components/Player';
import { ApiContext } from 'pages/Dashboard/DashboardContainer';
import { SpotifyContext } from 'pages/Dashboard/provider/SpotifyProvider';
import { getCurrentPlayingTrack, resetSearch, searchTracks, setPlayingUri } from './reducer/DashboardAction';

const Dashboard = () => {

  const { spotifyApi, accessToken } = useContext(ApiContext);
  const { state: { playingUri, searchResults }, dispatch } = useContext(SpotifyContext);

  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (!accessToken) return;
    getCurrentPlayingTrack(spotifyApi, dispatch);
  }, [accessToken]);
  useEffect(() => {
    if (!searchValue) return resetSearch(dispatch);
    if (!accessToken) return;
    searchTracks(spotifyApi, dispatch, searchValue);
  }, [searchValue, accessToken]);

  return (
    <Container className="d-flex flex-column py-2 vh-100">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="flex-grow-1 overflow-auto">
        {searchResults.map((track) =>
          <TrackSearchItem key={track.uri} track={track} setPlayingUri={setPlayingUri(dispatch)}/>)
        }
      </div>
      <div>
        <Player playingUri={playingUri}/>
      </div>
    </Container>
  );
};

export default Dashboard;
