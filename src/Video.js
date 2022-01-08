import React, { useRef, useState } from 'react';
import Footer from './footer';
import Sidebar from './sidebar';
import './Video.css';

function Video({ url, channel, description, song, likes, messages, shares }) {
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
            className="video_player" src={url} />
            
            <Footer
                channel={channel}
                description={description}
                song={song}
            />
            <Sidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
