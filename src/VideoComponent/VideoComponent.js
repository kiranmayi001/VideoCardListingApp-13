import React, { Component } from 'react';
import PlayList from '../PlayList/Playlist';
import axios from 'axios';
import classes from './VideoComponent.module.css';
import VideoCard from '../VideoCard/VideoCard';
// import { Route,  BrowserRouter,Switch } from 'react-router-dom';

 class VideoComponent extends Component {
     state={
         playlist:[],
         currentId:1,
         videoData:{}
        
     }
     componentDidMount(){
      console.log(this.state.currentId);
         axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
         .then(response=>{
          this.setState({ playlist:[...response.data]})
         })
         .catch(err=>{
           console.log("err");
         })
     }


     handleActive=(id)=>{
        this.setState({
            currentId:id,
        })
        }
//    componentDidUpdate(){
//     //    console.log(this.state.currentId);
//    }
    render() {
        // console.log(this.state.currentId);
        const playlistdata=this.state.playlist.map(item=>{
            return (<div key={ item.id} className={`${item.id===this.state.currentId ? classes.Active : null} ${classes.VCard}`}
            onClick={()=>this.handleActive(item.id)}><PlayList thumbnail={item.thumbnail} title={item.title} currentId={this.state.currentId}
            handleActive={this.handleActive}/>           
          </div>)
        })
    
        return (
            <div className={classes.VideoComponent}>
             {/* <PlayList  />    */}
             <div className={classes.VideoCard }>
         
                 <VideoCard currentId={this.state.currentId}/>
             </div>

             <div className={classes.PlayList}>
             {playlistdata}
             </div>
            </div>
        )
    }
}

export default VideoComponent;
