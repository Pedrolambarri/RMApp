
import React, { useEffect, useState } from "react";
import Character from "../components/Character";
import "./Carousel.css";
import { motion } from "framer-motion";





export default function Carousel({info, setCharacterId, setShowInfo}) {
  const [character, setCharacter] = useState([]);
  const [button, setButton] = useState(1);
    



  useEffect(() => {
    const movieRequest = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${button}`);
      const data = await response.json();
      setCharacter(data.results);
      
    };
    movieRequest();
  }, [button]);

 
  return (
    <div className="carousel">
      
      <div className="buttons">
       <button className="btn-shine" onClick={() => setButton(button - 1)}><span>PREV</span></button>
       <button className="btn-shine" onClick={() => setButton(button + 1)}><span>NEXT</span></button>
      </div>
      <motion.div className="slider" drag='x' dragConstraints={{right: 0, left:-3450}}>
        {character.map((character) => (
          <motion.div key={character.id} className="item">
            <Character key={character.id}  character={character} info={info} setShowInfo={setShowInfo} setCharacterId={setCharacterId} />
          </motion.div>
        ))}
      </motion.div>
     
     
    </div>
  );
}