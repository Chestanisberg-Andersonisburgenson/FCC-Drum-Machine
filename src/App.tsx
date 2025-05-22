import './App.css'

function App() {
  const validKeys = new Set(['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']);

  document.querySelectorAll('.drum-pad').forEach((button) => {
    button.addEventListener('click', () => {
      const audio = button.querySelector('audio') as HTMLAudioElement | null;
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key) as HTMLAudioElement | null;
    if (audio){
      audio.currentTime = 0;
      audio.play();
    }
  });

  return (
    <div id="drum-machine">
      <div id="drum-pad">
        <button className="drum-pad" id="Q-pad">Q
          <audio id="Q" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"/></button>
        <button className="drum-pad" id="W-pad">W
          <audio id="W"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"/></button>
        <button className="drum-pad" id="E-pad">E
          <audio id="E"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"/></button>
        <button className="drum-pad" id="A-pad">A
          <audio id="A"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"/></button>
        <button className="drum-pad" id="S-pad">S
          <audio id="S"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"/></button>
        <button className="drum-pad" id="D-pad">D
          <audio id="D"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"/></button>
        <button className="drum-pad" id="Z-pad">Z
          <audio id="Z"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"/></button>
        <button className="drum-pad" id="X-pad">X
          <audio id="X"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"/></button>
        <button className="drum-pad" id="C-pad">C
          <audio id="C"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"/></button>
      </div>

      <div id="display">
      </div>
    </div>   
  )
}

export default App
