// Code DelayedButton Component Here
//In the components/DelayedButton.js file, create a DelayedButton React component
//This component takes two props: onDelayedClick (a function), and delay (a number).
//Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
//If successful, the event will be logged to the console once the timeout has finished.
//remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool.

import React from 'react';
export default class DelayedButton extends React.Component {
    //Event pooling means that whenever an event fires, its event data (an object) is sent to the callback.
    handleClick = (event) => {

        //As of v17, e.persist() doesn’t do anything because the SyntheticEvent is no longer pooled.
        //need to access your event data in an asynchronous manner
        //we can make the event persistent by calling that method: event.persist().
        event.persist();
        window.setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };
  
    render() {
      return <button onClick={this.handleClick}>Delayed</button>;
    }
  }
