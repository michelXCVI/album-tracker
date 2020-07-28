import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './home.component.css'


export const HomeComponent:React.FC = () =>{
return (
  <div id="home-content">
    <div className="jumbotron" id="top-half">
      <h1 className="display-4">Welcome Aboard!</h1>
      <p className="lead">
        This is Album Tracker, a place in which you can track your favorite
        musicians' musical catalog
      </p>
      <hr className="my-4" />
      <p>
        Navigate the different links displayed on the navbar based on your need,
        happy browsing!
      </p>
    </div>
    <section>
      <img src={require("../../../images/festival.jpg")} />
    </section>
  </div>
);
}