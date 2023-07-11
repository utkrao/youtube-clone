import React from "react";
import { Grid } from "@material-ui/core";
// import youtube from "./api/youtube";
import {SearchBar, VideoDetail, VideoList} from "./components";
import youtube from "./api/youtube";
import Test from "./components/Test";

class App extends React.Component {
  state = {
      videos: [],
      selectedVideo: null,

  }

  componentDidMount() {
      this.handleSubmit("JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour by Programming with Mosh");
  }
   
  onVideoSelect = (video) => {
      this.setState({selectedVideo : video});

  }

  handleSubmit = async (searchTerm) => {
      
        const response = await youtube.get("search", { 
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyBTKI9Z0CgXyGeio6dOEN8sSKmoU320rxE",
                q: searchTerm,
       
           }
        }); 
        
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
        
    }

  render() {
      const {selectedVideo, videos} = this.state;
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit ={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
                <VideoDetail video = {selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
                <VideoList videos = {videos} onVideoSelect = {this.onVideoSelect} />
                </Grid>
          </Grid>
        </Grid>
        <Test />
      </Grid>
    );
  }
}

export default App;
