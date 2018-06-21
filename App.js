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
      color:"orange",
      playPiece:[],
      HEX_COORDS:[40,35,65,35,77.5,56.7,65,78.4,40,78.4,27.5,56.7],
    }
  }
  


  onPressLearnMore = () => {
    let newColor = "";
    if(this.state.color === "#cd5422"){
      newColor = "orange";
    } else {
      newColor = "#cd5422";
    }
    this.setState({color: newColor});
    
  }

  // used to create the coordinates for hexagons
  centerHex() {
    let baseCoords = this.state.HEX_COORDS;
    let hexCoords = "";

    for (var i = 0; i <= baseCoords.length - 1; i++) {
      if(i%2 === 0)
        hexCoords += baseCoords[i]+",";
      else
        hexCoords += baseCoords[i]+" ";
    }
    console.log(hexCoords);
    return hexCoords;
  }

  movedHex(pixels){
    let baseCoords = this.state.HEX_COORDS;
    let hexCoords = "";

    for (var i = 0; i <= baseCoords.length - 1; i++) {
      if(i%2 === 0)
        hexCoords += (baseCoords[i]+pixels)+",";
      else
        hexCoords += (baseCoords[i]+pixels)+" ";
    }
    console.log(hexCoords);
    return hexCoords;    
  }

  render() {
    return (
      <View>
       <Svg
        height="500"
        width="400">
          <Rect
            x="0"
            y="0"
            width="900"
            height="900"
            stroke="red"
            strokeWidth="0"
            fill="grey"
          />
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points={this.centerHex()}
          fill={this.state.color}
          scale='2'
          onPress={this.onPressLearnMore}
        />
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points={this.movedHex(15)}
          fill={"blue"}
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
