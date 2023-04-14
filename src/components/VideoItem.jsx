import React from "react";
import { Grid, Paper, Typography} from "@material-ui/core";

function VideoItem( { video, onVideoSelect }) {
    return (
        <Grid item xs={8}>

          <Paper style= {{display : "flex", alignItems: "right", cursor: "pointer", width:'contain' }} onClick = {() => {
              onVideoSelect(video);
          }} >
              <img style= {{marginRight: "10px", width:'contain'}} alt="thumbnail" src = {video.snippet.thumbnails.medium.url} />
              <Typography variant = "subtitle1" ><b>{video.snippet.title}</b></Typography>
          </Paper>
         </Grid>
    )
}

export default VideoItem;