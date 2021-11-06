export const SET_PLAYING_URI = 'SET_PLAYING_URI';
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';

export const initialSpotifyState = {
  playingUri: null,
  searchResults: [],
};

const reducer = (state, action) => {
  switch (action.type) {
  case SET_PLAYING_URI:
    return { ...state, playingUri: action.payload };
  case SET_SEARCH_RESULTS:
    return { ...state, searchResults: action.payload };
  default:
    return state;
  }
};

export default reducer;
