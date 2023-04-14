import React from "react";
import { Paper, Typography } from "@material-ui/core"; 

function VideoDetail({video}) {
    if (!video) {return <div>Loading</div>}
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    console.log(video);
    

    return <React.Fragment>
        <Paper elevation = {4} style = {{height: "60%"}}>
          <iframe frameBorder ="0" height = "810px" width = "978px" title = "Video Player" src = {videoSrc}  />
        </Paper>
        <Paper elevation = {6} style = {{padding: "15px"}}>
           <Typography variant = "h4">{video.snippet.title} - {video.snippet.channelTitle} </Typography>
           <Typography variant = "subtitle1"> {video.snippet.channelTitle} </Typography>
           <Typography variant = "subtitle2"> {video.snippet.description} </Typography>
        </Paper>
    </React.Fragment>
}

export default VideoDetail;
