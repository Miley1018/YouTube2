import React from 'react';
import VideoItem from './videoListItem';

const VideosList = (props)=>{
   console.log(props);
    const videoItems = props.videos.map((video)=>{
        return (
            <VideoItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>
        )
    });
    return(
        <ul>{videoItems}</ul>
    )
}

export default VideosList;