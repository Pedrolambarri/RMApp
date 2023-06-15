import React from "react";
import PortalGif from "../assets/portal.gif";
import { useState } from "react";
import "./Portal.css";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import SoundBoard from "./SoundBoard";


export default function Portal() {
  const [portalClicked, setPortalClicked] = useState(false);

  const handleClick = () => {
    setPortalClicked(true);
  };

  return (
    <div className="portal-div">
      <motion.img
        src={PortalGif}
        alt="Mi gif"
        onClick={handleClick}
        className={portalClicked ? "clicked" : ""}
      />

      <motion.div
        className={`slider-container soundboard ${portalClicked ? "visible" : ""}`}
        animate={{
          opacity: portalClicked ? 1 : 0,
          x: portalClicked ? 0 : "-100vw",
        }}
        transition={{ duration: 2 }}
      >
        {portalClicked ? (
          <SoundBoard/>
         ) : null}
      </motion.div>
    </div>
  );
}
