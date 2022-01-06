import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './footer.css';

function footer() {
    return (
        <div className="foots">
            <div className="foots_attri">
                <h4>@stanley_eis</h4>
                <p>this is a footer and thats all you should know :)</p>
                <div className="Icon">
                    <MusicNoteIcon className="Icon_icon" />
                </div>
            </div>
        </div>
    )
}

export default footer
