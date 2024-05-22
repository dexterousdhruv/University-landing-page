import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target = player.current)
      setPlayState(false)
  }


  return (
    <div ref={player} className={`video-player ${playState ? "" : "hide"}`} onClick={closePlayer}>
      <video
        // src={}
        autoPlay
        muted
        controls
      ></video>
    </div>
  );
};

export default VideoPlayer;
