import React, { useRef, useState } from 'react';
import Footer from './footer';
import Sidebar from './sidebar';
import video1 from './vids/cf099a1d8fc34a30b6de327211fc72d6.mp4';
import './Video.css';

function Video() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVids = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
          <video
            loop
            onClick={handleVids}
            ref={videoRef}
            muted
            className="video_player" src={video1} />
            
            <Footer />

        </div>
    )
}

export default Video
