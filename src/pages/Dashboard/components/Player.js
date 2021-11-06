import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { bgColor, textColor } from 'Colors';

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false);
  useEffect(() => setPlay(true), [trackUri]);

  if (!accessToken) return null;
  return <SpotifyPlayer
    token={accessToken}
    callback={(state) => {
      if(!state.isPlaying) setPlay(false);
    }}
    showSaveIcon={true}
    play={play}
    uris={trackUri ? [trackUri] : []}
    styles={{
      activeColor: textColor,
      bgColor: bgColor,
      color: textColor,
      loaderColor: '#fff',
      sliderColor: textColor,
      trackArtistColor: '#ccc',
      trackNameColor: '#fff',
    }}
  />;
};

export default Player;
