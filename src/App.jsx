
import './App.css'
import Portal from './components/Portal'
import Travel from './components/Travel'

import Header from './components/Header'
import SoundBoard from './components/SoundBoard'
import CharacterInfo from './components/CharacterInfo'
import { useState } from 'react'







function App() {
  const [characterId, setCharacterId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);


 
  return (
    <div className="App">

     <Header/>
     
     <Travel setShowInfo={setShowInfo} setCharacterId={setCharacterId}/>
  
     {showInfo?<CharacterInfo character={characterId}/> : null }
     <Portal/>
     

    </div>
  )
}

export default App
