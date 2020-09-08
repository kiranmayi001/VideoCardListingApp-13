import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PlayList.module.css';

const PlayList = (props) => {
// console.log(props);
    return(
        
        <Link className={classes.VideoCard} to={`/video/${props.currentId}`}>
            <div >
                <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.Title}>{props.title}</h3>
            </div>
        </Link>

    );
}

export default PlayList;