import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

//code for a basic React app
//Two of the components referenced, CoordinatesButton and DelayedButton, are being passed props.
ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);


//event.clientX and event.clientY. These provide the current x/y position of a mouse
//The clientX read-only property of the MouseEvent interface provides the horizontal coordinate within the application's viewport at which the event occurred
  //var x = instanceOfMouseEvent.clientX
//The clientY read-only property of the MouseEvent interface provides the vertical coordinate within the application's viewport at which the event occurred 
  //For example, clicking on the top edge of the viewport will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically.
  //var y = instanceOfMouseEvent.clientY
