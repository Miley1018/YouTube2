import React from 'react';

const VideoItem = (props)=>{
   // console.log(props.video);
    return (
        <li className='list-group-item' onClick={()=>{props.onVideoSelect(props.video)}}>
            <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.default.url}/>
            {props.video.snippet.title}
        </li>
    )
}

export default VideoItem;