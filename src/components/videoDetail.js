import React from 'react';

const VideoDetail = ({selectedVideo})=>{
    if (!selectedVideo){
        return <div>Loading...</div>
    }
    const videoId = selectedVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`
    return(
        <div>
            <div>
                <iframe src={url}></iframe>
            </div>
            <div>
                <div>{selectedVideo.snippet.title}</div>
                <div>{selectedVideo.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;