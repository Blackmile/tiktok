import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './footer.css';
import Ticker from 'react-ticker';
import Mus from './vids/apple-music-logo-circle-png-28.png'


function footer({ channel, description, song }) {
    return (
        <div className="foots">
            <div className="foots_attri">
                <h4>@{channel}</h4>
                <p>{description}</p>
                <div className="ticker">
                    <MusicNoteIcon className="Icon_icon" />
                    <Ticker mode='smooth' >
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <div className='spinner'>
                <img src={Mus} alt=''/>
            </div>
        </div>
    )
}

export default footer
