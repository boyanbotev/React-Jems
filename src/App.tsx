import React, {useEffect, useState} from 'react';
import './App.css';
import { UI } from './UI';

function App() {
  const [imageNum, setImageNum] = useState(0);
  const imgCount = 2;

  const [isStarted, setIsStarted] = useState(false);
  const [isVoPlayed, setVoPlayed] = useState(false);

  const jemSynth = new Audio(require("./jems night synth louder.wav"));
  const horns = new Audio(require("./jems night brass melody louder.wav"));
  const vo = new Audio(require('./lusseryan quote.mp3'));
  const vocal = new Audio(require('./Jems synth 3.mp3'));

  function unlockVO(){
    if (!isVoPlayed)
    {
      // start(vo);
      setVoPlayed(true);
      start(vocal, true);
    }
  }

  const start = (audio: HTMLAudioElement, isLooped?: boolean) => {
    audio.play();
    if (isLooped)
      audio.loop = true;
  }

  function startLevelMusic(){
    start(jemSynth, true);
    // start(horns, true);
    start(vocal, true);
  }

  function nextImage(){
    if (imageNum < imgCount-1) {
      setImageNum((prev)=> prev + 1);
      unlockVO();
    }
  }

  function prevImage(){
    if (imageNum > 0){
      setImageNum((prev)=> prev - 1);
    }
    
  }

  function startGame() {
    if (!isStarted)
    {
      startLevelMusic();
      setIsStarted(true);
    }
  }

  const imgClassName = "background-image item " + "img"+imageNum;

  return (
    <div className='container'>
      <div className={imgClassName}></div>
     <div className='ui-container'>
        <UI isStarted={isStarted} startGame={startGame} nextImage={nextImage} prevImage={prevImage}/>
     </div>
    </div>
  );
}

export default App;
