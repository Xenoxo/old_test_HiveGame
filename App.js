import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:"#841584",
      playPiece:[],
    }
  }
  


  onPressLearnMore = () => {
    this.setState({color:"#cd5422"});
  }

  render() {
    return (
      <View>
       <Svg
        height="100"
        width="100"
        fill="green">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        <Polygon
          points="40,5 70,150  25,95"
          fill="lime"
          stroke="purple"
          strokeWidth="1"
        />          
        </Svg>
       <Svg
        height="200"
        width="200">
          <Rect
            x="0"
            y="0"
            width="200"
            height="200"
            stroke="red"
            strokeWidth="0"
            fill="grey"
          /> 
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points="40,5 57,5 65,20 57,35 40,35 32,20"
          fill="orange"
          scale='2'
        />
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points="40,35 57,35 65,50 57,65 40,65 32,50"
          fill="blue"
          scale='2'
        />        
        </Svg>        
        </View>
    );
  }
}

export class Hex extends React.Component {
  render() {
    return (
      <View> 
        <View style={styles.trapezoidTop} />
        <View style={styles.trapezoidBot} />        
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

trapezoidTop: {
    width: 200,
    backgroundColor:'green',
    borderBottomWidth: 90,
    borderBottomColor: 'black',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    position: 'absolute',
    top: 100,
  },
  trapezoidBot: {
    width: 200,
    height: 0,
    borderTopWidth: 90,
    borderTopColor: 'red',
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderStyle: 'solid', 
    position: 'absolute',
    top: 190,
  },

  hexagon: {
    width: 100,
    height: 55,
  },
  hexagonInner: {
    width: 100,
    height: 55,
    backgroundColor: 'blue'
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'red'
  },
  hexagonBefore: {
    position: 'absolute',
    top: -25,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderLeftColor: 'transparent',
    borderRightWidth: 50,
    borderRightColor: 'transparent',
    borderBottomWidth: 25,
    borderBottomColor: 'red'
  },
});
