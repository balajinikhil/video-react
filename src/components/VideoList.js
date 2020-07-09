import React from 'react'
import VideoItem from './VideoItem'



const VideoList = ({videos, onVideoSelect})=>{

  const renderedList =  videos.map((e)=>{
            return <VideoItem key={e.id.videoId} onVideoSelect={onVideoSelect} video={e} />
    })
    

    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )



}


export default VideoList