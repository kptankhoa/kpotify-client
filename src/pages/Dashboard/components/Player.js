import React, { useContext, useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import { bgColor, textColor } from 'Colors';
import { ApiContext } from '../DashboardContainer';

const Player = ({ playingUri }) => {
  const [play, setPlay] = useState(false);
  const { accessToken } = useContext(ApiContext);

  useEffect(() => setPlay(true), [playingUri]);
  if (!accessToken) return null;
  return <SpotifyPlayer
    token={accessToken}
    callback={(state) => {
      if(!state.isPlaying) setPlay(false);
    }}
    showSaveIcon={true}
    play={play}
    uris={playingUri ? [playingUri] : []}
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
