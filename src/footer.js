import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './footer.css';
import Ticker from 'react-ticker';
import Mus from './vids/apple-music-logo-circle-png-28.png'


function footer() {
    return (
        <div className="foots">
            <div className="foots_attri">
                <h4>@stanley_eis</h4>
                <p>this is a footer and thats all you should know :)</p>
                <div className="ticker">
                    <MusicNoteIcon className="Icon_icon" />
                    <Ticker mode='smooth' >
                        {({ index }) => (
                            <>
                                <p>my emotions</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <div className='spinner'>
                <img src={Mus} />
            </div>
        </div>
    )
}

export default footer
