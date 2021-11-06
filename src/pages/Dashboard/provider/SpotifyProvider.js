import React, { createContext, useReducer } from 'react';
import reducer, { initialSpotifyState } from 'pages/Dashboard/reducer/DashbardReducer';

export const SpotifyContext = createContext(initialSpotifyState);

function init(initialValue) {
  return { ...initialValue };
}

const SpotifyProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialSpotifyState, init);

  return (
    <SpotifyContext.Provider value={{ state, dispatch }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
