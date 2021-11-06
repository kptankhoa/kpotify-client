import React from 'react';
import { textColor } from 'Colors';

const TrackSearchItem = ({ track, setPlayingUri }) => {
  return (
    <div
      className='my-2'
      style={{ cursor: 'pointer', color: textColor }}
      onClick={() => setPlayingUri(track.uri)}>
      {track.name} - {track.album} - {track.artist}
    </div>
  );
};

export default TrackSearchItem;
