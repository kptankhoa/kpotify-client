import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from 'pages/Dashboard/components/SearchForm/SearchForm';
import Player from 'pages/Dashboard/components/Player/Player';
import { ApiContext } from 'pages/Dashboard/DashboardContainer';
import { SpotifyContext } from 'pages/Dashboard/provider/SpotifyProvider';
import getDashboardAction from './reducer/DashboardAction';
import SearchResults from './components/SearchResults/SearchResults';
import MyPlaylists from './components/MyPlaylists/MyPlaylists';

const Dashboard = () => {

  const { spotifyApi, accessToken } = useContext(ApiContext);
  const { state: { playingUri, me }, dispatch } = useContext(SpotifyContext);

  const [searchValue, setSearchValue] = useState('');

  const {
    getCurrentPlayingTrack,
    getMe,
    getMyPlaylists,
    resetSearch,
    searchTracks,
    setPlayingUri,
  } = getDashboardAction(spotifyApi, dispatch, me);

  useEffect(() => {
    if (!accessToken) return;
    getCurrentPlayingTrack();
    getMe();
    getMyPlaylists();
  }, [accessToken]);
  useEffect(() => {
    if (!searchValue) return resetSearch();
    if (!accessToken) return;
    searchTracks(searchValue);
  }, [searchValue, accessToken]);

  return (
    <Container className="d-flex flex-column py-2 vh-100">
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="flex-grow-1">
        {searchValue ? (
          <SearchResults setPlayingUri={setPlayingUri}/>
        ) : (
          <MyPlaylists setPlayingUri={setPlayingUri}/>
        )}
      </div>
      <div>
        <Player playingUri={playingUri}/>
      </div>
    </Container>
  );
};

export default Dashboard;
