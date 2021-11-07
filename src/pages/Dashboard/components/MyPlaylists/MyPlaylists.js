import React, { useContext } from 'react';
import { SpotifyContext } from 'pages/Dashboard/provider/SpotifyProvider';
import TextButton from 'common/TextButton/TextButton';
import { textColor } from 'common/Colors';

const MyPlaylists = ({ setPlayingUri }) => {

  const { state: { myPlaylists, me } } = useContext(SpotifyContext);

  return (
    <div
      style={{ color: textColor }}
    >
      <h3 className='mx-1 p-2'>{me.display_name}&apos;s playlists</h3>
      {
        myPlaylists.map((playlist) => (
          <div
            key={playlist.id}
            className='mx-1 p-2 border-bottom border-success overflow-auto'
          >
            <TextButton
              text={playlist.name}
              onClick={() => setPlayingUri(playlist.uri)}
            />
          </div>
        ))
      }
    </div>
  );
};

export default MyPlaylists;
