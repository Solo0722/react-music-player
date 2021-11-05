import { useState,useEffect } from 'react'
import Player from './components/Player';


function App() {
  const [songs, setSongs] = useState([
    {
      title: 'Bestie',
      artist: 'Abochi',
      img_src: './images/Bestie.jpg',
      song_src: './music/Bestie.mp3'
    },
    {
      title: 'Queen Of My  Heart',
      artist: 'Westlife',
      img_src: './images/Queen.jpg',
      song_src: './music/Queen of my heart.mp3'
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      img_src: './images/Bad.jpg',
      song_src: './music/Bad Habits.mp3'
    },
    {
      title: 'Shake It Off',
      artist: 'Taylor Swift',
      img_src: './images/Shake.jpg',
      song_src: './music/Shake it off.mp3'
    },
    {
      title: "Angel's Wings",
      artist: 'Westlife',
      img_src: './images/Angel.jpg',
      song_src: './music/Angel Wings.mp3'
    },
    {
      title: 'Sign Of Victory',
      artist: 'R. Kelly',
      img_src: './images/Sign.jpg',
      song_src: './music/SignOfVictory.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={ songs}
      />
    </div>
  );
}

export default App;
