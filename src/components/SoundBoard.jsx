
import './SoundBoard.css';
import Sound1 from '../sounds/sound1.mp3';
import Sound2 from '../sounds/sound2.mp3';
import Sound3 from '../sounds/sound3.mp3';
import Sound4 from '../sounds/sound4.mp3';
import Sound5 from '../sounds/sound5.mp3';
import Sound6 from '../sounds/sound6.mp3';
import Sound7 from '../sounds/sound7.mp3';
import Sound8 from '../sounds/sound8.mp3';
import Sound9 from '../sounds/sound9.mp3';
import Sound10 from '../sounds/sound10.mp3';
import { useRef, useState } from 'react';
import Pepinillo from '../../src/assets/pepinillo.webp'
import Meeseeks from '../../src/assets/meeseeksSmoke.webp'

const buttons = [
  { label: 'Rick', soundFile: Sound1 },
  { label: 'Morty', soundFile: Sound2},
  { label: 'Summer', soundFile: Sound3},
  { label: 'Beth', soundFile: Sound4},
  { label: 'Jerry', soundFile: Sound5},
  { label: 'Meeseeks', soundFile: Sound6},
  { label: 'Birdperson', soundFile: Sound7},
  { label: 'Mr. Poopybutthole', soundFile: Sound8},
  { label: 'Alien', soundFile: Sound9},
  { label: 'Baby Legs', soundFile: Sound10}
]

export default function SoundBoard() {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const audioRef = useRef(null);

  const toggleSound = (sound) => {
    const audio = audioRef.current;
    const selectedSound = sound;

    if (isPlaying && selectedSound === currentSound) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setCurrentSound(selectedSound);
      audio.src = selectedSound;
      audio.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="portal">
   
      <div >
        {buttons.map((button, index) => (
          <button
  
            key={index}
            className={`btn-shine playing btn${index} ${isPlaying && button.soundFile === currentSound ? 'playing' : ''}`}
            onClick={() => toggleSound(button.soundFile)}
          >
         
         {button.label} {isPlaying && button.soundFile === currentSound ? ' - Stop' : ''}
          </button>
        ))}

      </div>
      <div>
     
      </div>
      <audio ref={audioRef}>
        <source src={currentSound} type="audio/mpeg" />
      </audio>
      {<img className='meeseeks' src={Meeseeks} alt="Smoking Meeseeks"></img>}
      {<img className='pickle' src={Pepinillo} alt="pickle"></img>}
    </div>
  );
}