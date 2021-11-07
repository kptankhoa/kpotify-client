export const SET_PLAYING_URI = 'SET_PLAYING_URI';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const SET_ME = 'SET_ME';
export const SET_MY_PLAYLISTS = 'SET_MY_PLAYLISTS';

export const initialSpotifyState = {
  playingUri: null,
  me: {},
  myPlaylists: [],
  searchResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
  case SET_PLAYING_URI:
    return { ...state, playingUri: action.payload };
  case SET_SEARCH_RESULTS:
    return { ...state, searchResults: action.payload };
  case SET_ME:
    return { ...state, me: action.payload };
  case SET_MY_PLAYLISTS:
    return { ...state, myPlaylists: action.payload };
  default:
    return state;
  }
};

export default reducer;
