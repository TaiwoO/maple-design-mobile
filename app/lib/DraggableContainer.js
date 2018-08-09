/**
 * This is basically a component that it draggable. You can drag the component and it will
 * move to that position.
 * This component uses React Native's PanResponder to achieve this affect.
 */
import React from 'react'
import { View, PanResponder } from 'react-native'

export default class DraggableContainer extends React.Component {

  state = {
    isDragging: false,
    dx: 0,
    dy: 0,
    x: 0, // x-axis vector
    y: 0, // y-axis vector
  }

  constructor(props) {
    super(props)

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {

        // Upon the start of a drag, we have change in x, y delta yet
        //
        this.setState((prevState) => ({
          isDragging: true,
          dx: 0,
          dy: 0
        }));

        this.props.onPress(); 
      },
      onPanResponderMove: (evt, gestureState) => {

        // Set object's deltas to represent the current changes in movment
        //
        let dx = gestureState.dx;
        let dy = gestureState.dy;

        this.setState(() => ({
          dx: dx,
          dy: dy
        }));

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {

        // once the drag has ended, The currect accumilated x and y deltas 
        // should be the x,y deltas from the drag plus the previous starting point

        let dx = gestureState.dx;
        let dy = gestureState.dy;

        this.setState((prevState) => ({
          isDragging: false,
          x: prevState.x + dx,
          y: prevState.y + dy
        }));

      },
      onPanResponderTerminate: (evt, gestureState) => {

      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }); // End of pan responder

  }

  render() {

    let transformStyle = {};


    if (this.state.isDragging) {
      // Translate to last posision then add on the deltas gained from the drag
      //
      transformStyle = {
        transform: [
          { translateX: this.state.x + this.state.dx },
          { translateY: this.state.y + this.state.dy }
        ]
      }
    } else {
      //  Translate to the last position using the acumulated x and y vector 
      transformStyle = {
        transform: [
          { translateX: this.state.x },
          { translateY: this.state.y }
        ]
      }
    }

    return (
      <View
        {...this._panResponder.panHandlers}
        style={
          [{ ...this.props.style }, transformStyle, { alignSelf: 'flex-start' }]
        }
      >

        {this.props.children}
      </View>
    );
  }
}
