import React, {Component} from 'react';
import VideoContainer from './VideoContainer/VideoContainer';

// CSS
import classes from './Body.module.css';

class Body extends Component {
  render() {
    return(
      <div className={classes.Body}>
        <div className="container">
          <div className="row">
            <VideoContainer/>
            <VideoContainer/>
            <VideoContainer/>
            <VideoContainer/>
          </div>
        </div>

      </div>
    );
  }
}

export default Body;
