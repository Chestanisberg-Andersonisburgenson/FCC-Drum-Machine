import './App.css'

function App() {
  const validKeys = new Set(['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']);

  return (
    <div id="drum-machine">
      <div id="drum-pad">
        <button className="drum-pad" id="1">Q
          <audio id="Q" className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"/></button>
        <button className="drum-pad" id="2">W
          <audio id="W"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"/></button>
        <button className="drum-pad" id="3">E
          <audio id="E"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"/></button>
        <button className="drum-pad" id="4">A
          <audio id="A"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"/></button>
        <button className="drum-pad" id="5">S
          <audio id="S"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"/></button>
        <button className="drum-pad" id="6">D
          <audio id="D"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"/></button>
        <button className="drum-pad" id="7">Z
          <audio id="Z"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"/></button>
        <button className="drum-pad" id="8">X
          <audio id="X"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"/></button>
        <button className="drum-pad" id="9">C
          <audio id="C"  className="clip" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"/></button>
      </div>
      <div id="display">
      </div>
    </div>   
  )
}

export default App
