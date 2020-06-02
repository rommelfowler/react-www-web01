import React, {Component} from 'react';
import Nav from './Nav/Nav';
// CSS
import classes from './Header.module.css';

class Header extends Component {
  render(){
    return(
      <div className={classes.Header}>
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <a href="#">
                <img src="https://via.placeholder.com/100x50" alt=""/>
              </a>
            </div>
            <div className="col-md-11">
              <Nav/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Header;
