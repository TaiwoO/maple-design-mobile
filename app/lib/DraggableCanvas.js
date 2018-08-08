/**
 * This is a canvas which is draggable. Items can be dropped in (ideally DraggableContainers)
 */

import React from 'react'
import { View, PanResponder, Image, StyleSheet } from 'react-native'

export default class DraggableCanvas extends React.Component {

  state = {
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
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

      onPanResponderGrant: (evt, gestureState) => {

        this.setState({ isDragging: true, dx: 0, dy: 0 });
      },
      onPanResponderMove: (evt, gestureState) => {

        this.setState({
          dx: gestureState.dx,
          dy: gestureState.dy
        });

      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {

        let dx = gestureState.dx;
        let dy = gestureState.dy;

        // once the drag has ended, The currect accumilated x and y deltas 
        // should be the x,y deltas from the drag plus the previous starting point
        this.setState((prevState) => ({
          isDragging: false,
          x: prevState.x + dx,
          y: prevState.y + dy
        }));

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
      // Object should go to its previous x,y positon before it can add deltas
      //
      transformStyle = {
        transform: [
          { translateX: this.state.x + this.state.dx },
          { translateY: this.state.y + this.state.dy },

        ]
      };
    } else {
      // Object should just go to its previous x, y
      transformStyle = {
        transform: [
          { translateX: this.state.x },
          { translateY: this.state.y }
        ]
      };
    }

    return (

      <View
        {...this._panResponder.panHandlers}
        style={
          [{ ...this.props.style }, styles["canvas-container"]]
        }
        ref={'canvasContainer'}
      >

        <View
          style={[transformStyle]}
        >
          <Image // FIlls the background with the provided image :p
            source={this.props.bgSrc}
            style={styles['canvas-bg']}
            ref={'canvasBg'}
          />

          <View style={styles["canvas-items-container"]}>
            {this.props.children}

          </View>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  "canvas-container": {
    flex: 1,
    position: 'relative',
    overflow: 'hidden', // so that the objects dont escape this canvas

  },

  "canvas-bg": {  // The background is simply a massive sheet. I move it to the left and top to center it so that you dont see the white space
    left: -10000,
    top: -10000,
    width: 20000,
    height: 20000,
    resizeMode: 'repeat',
    position: 'absolute',
  },

  "canvas-items-container": {

  }

});
