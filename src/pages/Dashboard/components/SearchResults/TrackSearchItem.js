import React from 'react';
import { textColor } from 'common/Colors';
import TextButton from 'common/TextButton/TextButton';

const TrackSearchItem = ({ track, setPlayingUri }) => {
  const { song, artist, album } = track;
  return (
    <div
      className='mx-1 p-2 border-bottom border-success'
      style={{ color: textColor }}
    >
      <TextButton text={song.name} onClick={() => setPlayingUri(song.uri)}/>
      &nbsp;-&nbsp;
      <TextButton text={album.name} onClick={() => setPlayingUri(album.uri)}/>
      &nbsp;-&nbsp;
      <TextButton text={artist.name} onClick={() => {}}/>
    </div>
  );
};

export default TrackSearchItem;
