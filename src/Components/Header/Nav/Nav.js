import React from 'react';
import classes from './Nav.module.css';

const nav = () => {
  return(
    <div className={classes.Nav}>
    <ul >
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Service</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
    </div>
  )
}

export default nav;
