import { color } from "framer-motion";
import React from "react";

export default function Character({ character, setCharacterId, setShowInfo}) {


  const info = () => {
 
    setShowInfo(true);
    setCharacterId(character.id)
    }


  return (
    <div>
      <h3 className="characterName" onClick={info} >{character.name}</h3>
      <img src={character.image} />
    </div>
  );
}
