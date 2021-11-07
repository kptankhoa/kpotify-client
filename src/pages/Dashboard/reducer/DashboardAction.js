import {
  SET_ME, SET_MY_PLAYLISTS, SET_PLAYING_URI, SET_SEARCH_RESULTS,
} from 'pages/Dashboard/reducer/DashbardReducer';

const getDashboardAction = (spotifyApi, dispatch, me) => ({
  getMe: () => {
    spotifyApi.getMe().then((data) => {
      if (data.body) {
        dispatch({
          type: SET_ME,
          payload: data.body,
        });
      }
    });
  },

  getMyPlaylists: () => {
    spotifyApi.getUserPlaylists(me.id).then((res) => {
      if(res.body) {
        const playlists = res.body.items.map((playlist) => ({
          id: playlist.id,
          name: playlist.name,
          description: playlist.description,
          image: playlist.images[0].url,
          uri: playlist.uri,
        }));
        dispatch({
          type: SET_MY_PLAYLISTS,
          payload: playlists,
        });
      }
    });
  },

  getCurrentPlayingTrack: () => {
    spotifyApi.getMyCurrentPlayingTrack().then((data) => {
      if (data.body) {
        dispatch({
          type: SET_PLAYING_URI,
          payload: data.body.item.uri,
        });
      }
    });
  },

  resetSearch: () => dispatch({
    type: SET_SEARCH_RESULTS,
    payload: [],
  }),

  searchTracks: (keyword) => {
    let cancel = false;
    spotifyApi
      .searchTracks(keyword)
      .then((res) => {
        if (cancel) return;
        const searchResults = res.body.tracks.items.map((track) => ({
          album: {
            id: track.album.id,
            name: track.album.name,
            uri: track.album.uri,
          },
          artist: {
            id: track.artists[0].id,
            name: track.artists[0].name,
            uri: track.artists[0].uri,
          },
          song: {
            id: track.id,
            name: track.name,
            uri: track.uri,
          },
        }),
        );
        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: searchResults,
        });
        return () => cancel = true;
      });
  },

  setPlayingUri: (uri) => dispatch({
    type: SET_PLAYING_URI,
    payload: uri,
  }),
});

export default getDashboardAction;
