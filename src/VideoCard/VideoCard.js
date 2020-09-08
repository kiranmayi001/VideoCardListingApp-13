import React, { Component } from 'react'
import classes from './VideoCard.module.css';
import axios from 'axios';

 class VideoCard extends Component {
    state = {
        videoData:{},
    
    }

componentDidMount(){
    axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/1`)
    .then(response=>{
        console.log(response.data);
        this.setState({videoData:{...response.data}})
    })
    .catch(err=>{
        console.log("error in Default video")
    })
}

//  shouldComponentUpdate(nextProps,nextState){
//     //  console.log("should it?");
//      if(this.props.currentId!==nextProps.currentId){
//      this.setState({videoId:nextProps.currentId})
//      return true;
//      }
//      console.log("this is changing oy"+this.state.videoId)
//    return false;
//  }
componentDidUpdate(){
    console.log(this.props.currentId)
    const videoId=this.props.currentId;
    // console.log("component did Update in videoPlayer")
    if(videoId!==this.state.videoData.id){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/video/"+videoId)
        .then(response=>{
            console.log(response.data);
            this.setState({videoData:{...response.data}})
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
        })
        .catch(err=>{
            console.log("Loading error in video details")
        })
    }
}
    render() {

   



        return (
            <div>
                <div className={classes.VideoCardDiv}>
                <iframe className={classes.Videoplayer} src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`} frameBorder="0"></iframe>
              <div className={classes.Response}>
                  <p className={classes.Views}>{this.state.videoData.views} views</p>
                  <div className={classes.IconsDiv}>
                  <i  className={["far","fa-heart",this.state.videoData.isLiked==='true' || this.state.videoData.isLiked=== true ? classes.Yellow : classes.Heart].join(" ")}></i>
                  <i className="far fa-comment-alt" aria-hidden="true" style={{
                      fontSize:"24px",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginRight:"20px",
                      marginTop:"16px"
                  }}></i>
                  <i className={["far","fa-bookmark",this.state.videoData.isSaved==='true' || this.state.videoData.isSaved===true ? classes.Yellow : classes.Heart].join(" ")} aria-hidden="true" ></i>
                  </div>
              </div>
            <h3 className={classes.VideoTitle}>
              {this.state.videoData.title}
            </h3>
                <p className={classes.VideoDescription}>{this.state.videoData.description}</p>

                </div>
            </div>
        )
    }
}

export default VideoCard;
