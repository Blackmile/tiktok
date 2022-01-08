import React, { useState } from 'react';
import './sidebar.css';
import { Favorite, FavoriteBorder, Message, Share } from '@material-ui/icons';

function Sidebar({ likes, shares, messages }) {

    const [liked, setLiked] = useState(false)

    return (
        <div className='videoSidebar'>
            <div className='videoSidebar_button'>
                {liked ? (
                    <Favorite fontsize='large' />
                ):(
                    <FavoriteBorder fontSize='large' onClick={(e) => setLiked(true)} />
                )}
                <p>{liked ? likes += 1 : likes}</p>
            </div>
            <div className='videoSidebar_button'>
                <Message fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSidebar_button'>
                <Share fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar
