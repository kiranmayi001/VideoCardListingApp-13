import React from 'react';
import './App.module.css';
import VideoComponent from './VideoComponent/VideoComponent'
import { Route,  BrowserRouter,Switch } from 'react-router-dom';
import Title from './Title/Title';

function App() {
  return (

    <div className="App">
      <Title/>
 <BrowserRouter>
 <Switch>
 <Route exact path="/" component={VideoComponent} />
 <Route exact path="/video/:videoId" component={VideoComponent} />
   </Switch>
   </BrowserRouter>
    </div>
  );
}

export default App;
