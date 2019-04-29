import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { connect } from 'react-redux';

import { getBookings } from '../actions';


  class Greeting extends Component {

      constructor(props){
          super(props);
          this.state = {
          }
      }

      renderTestContent(){
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        );
      }


      render(){
        return (
          <div className="content-main">
            <h3>
              <button className="button submit" type="button" onClick={()=>{
                this.props.getBookings()
              }}>
                BOOKING LIST:
              </button>
                {JSON.stringify(this.props.bookings)}
            </h3>
              { this.renderTestContent() }
          </div>
        );
      }
  }

  function mapStateToProps(state) {
    return { bookings: state.reducerBooking.bookings
           };
  }

  export default connect(mapStateToProps, { getBookings })(Greeting);
