import React from "react";
import { useState } from "react";
import "./Travel.css";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import RickAndMortyLsd from '../assets/rick-and-morty-lsd.gif';

export default function Travel ({info, setShowInfo, setCharacterId}) {
  const [portalClicked, setPortalClicked] = useState(false);

  const handleClick = () => {
    setPortalClicked(true);
  };

  return (
    <div className="travelimg">
      <motion.img 
        src={RickAndMortyLsd}
        alt="Mi gif"
        onClick={handleClick}
        className={portalClicked ? "travel" : ""}
      />

      <motion.div
        className={`slider-container ${portalClicked ? "visible" : ""}`}
        animate={{
          opacity: portalClicked ? 1 : 0,
          x: portalClicked ? 0 : "-100vw",
        }}
        transition={{ duration: 2 }}
      >
        {portalClicked ? (
          <motion.div className="slider">{<Carousel info={info} setShowInfo={setShowInfo} setCharacterId={setCharacterId}/>}</motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
