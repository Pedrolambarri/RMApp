import React, { useEffect, useState } from "react";
import './CharacterInfo.css'



export default function CharacterInfo({character}) {
  const [characterInfo, setCharacterInfo] = useState([]);


  useEffect(() => {
    const movieRequest = async () => {
     
      const response = await fetch(`https://rickandmortyapi.com/api/character/${character}`);
      const data = await response.json();
      setCharacterInfo(data); 
      console.log(data);
    };
    movieRequest();
  
  }, [character]);

  
  return (
    <div className="character-info">
        <div>
            <img src={characterInfo.image} alt={characterInfo.name} />
        </div>
        <div className="info">
            <p>Name: {characterInfo.name}</p>
            <p>Status: {characterInfo.status}</p>
            <p>Species: {characterInfo.species}</p>
            <p>Created: {characterInfo.created}</p>
            <p>Gender: {characterInfo.gender}</p>
        </div>
        
    </div>
  );
}