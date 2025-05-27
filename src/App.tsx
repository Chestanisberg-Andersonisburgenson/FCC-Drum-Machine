import { useEffect } from 'react';
import './App.css';

const pads = [
  { key: 'Q', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { key: 'W', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { key: 'E', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { key: 'A', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { key: 'S', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { key: 'D', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { key: 'Z', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { key: 'X', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { key: 'C', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
];

function App() {
  //for playing sounds when keyboard keys are pressed
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      const audio = document.getElementById(key) as HTMLAudioElement | null;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        const display = document.getElementById('display');
        display!.textContent = `Playing: ${audio.id}`;
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);
 
  //for playing sounds when buttons are clicked
  const handleClick = (key: string) => {
    const audio = document.getElementById(key) as HTMLAudioElement | null;
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      const display = document.getElementById('display');
      display!.textContent = `Playing: ${key}`;
    }
  };

  return (
    <div id="drum-machine">
      <h1 id="title">Drum Machine</h1>   
      <div id="container"> 
        <div id="drum-pad">
          {pads.map(pad => (
            <button
              key={pad.key}
              className="drum-pad"
              id={`${pad.key}-pad`}
              onClick={() => handleClick(pad.key)}
            >
              {pad.key}
              <audio
                id={pad.key}
                className="clip"
                src={pad.src}
              />
            </button>
          ))}
        </div>
        <div id="controls">
          <p>Press a key or click a button to play a sound.</p>
          <div id="display">Playing:</div>
        </div>
      </div>
    </div>
  );
}

export default App;
