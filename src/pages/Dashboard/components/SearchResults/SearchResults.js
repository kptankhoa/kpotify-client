import React, { useContext } from 'react';
import { SpotifyContext } from 'pages/Dashboard/provider/SpotifyProvider';
import TrackSearchItem from './TrackSearchItem';

const SearchResults = ({ setPlayingUri }) => {

  const { state: { searchResults } } = useContext(SpotifyContext);

  return (
    <div className='overflow-auto'>
      {searchResults.map((track) => (
        <TrackSearchItem key={track.song.id} track={track} setPlayingUri={setPlayingUri}/>
      ))}
    </div>
  );
};

export default SearchResults;
