import { SET_PLAYING_URI, SET_SEARCH_RESULTS } from 'pages/Dashboard/reducer/DashbardReducer';

export const getCurrentPlayingTrack = (spotifyApi, dispatch) => {
  spotifyApi.getMyCurrentPlayingTrack().then((data) => {
    if (data.body) {
      dispatch({
        type: SET_PLAYING_URI,
        payload: data.body.item.uri,
      });
    }
  });
};

export const searchTracks = (spotifyApi, dispatch, keyword) => {
  let cancel = false;
  spotifyApi
    .searchTracks(keyword)
    .then((res) => {
      if (cancel) return;
      const searchResults = res.body.tracks.items.map((track) => {
        return {
          artist: track.artists[0].name,
          album: track.album.name,
          name: track.name,
          href: track.href,
          uri: track.uri,
        };
      });
      dispatch({
        type: SET_SEARCH_RESULTS,
        payload: searchResults,
      });
      return () => cancel = true;
    });
};

export const resetSearch = (dispatch) => {
  return dispatch({
    type: SET_SEARCH_RESULTS,
    payload: [],
  });
};

export const setPlayingUri = (dispatch) => {
  return (uri) => dispatch({
    type: SET_PLAYING_URI,
    payload: uri,
  });
};
