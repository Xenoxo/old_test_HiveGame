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
    Stop} from 'react-native-svg';

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
    // this.generateHex(40,35,15);
  }

  // given x,y,and length of a side, will generate and return the coords for a hex
  generateHex(x,y,l){
    let coordArray = [];
    let hexCoords = "";
    let apoth = (Math.sqrt(3)/2*l)
    for (var i = 0; i <= 5; i++) {
      if(i == 0){
        coordArray.push(x);
        coordArray.push(y);
      } else if(i == 1){
        coordArray.push(x+l);
        coordArray.push(y);
      }else if(i == 2){
        coordArray.push(x + (1.5*l));
        coordArray.push(y - apoth);
      }else if(i == 3){
        coordArray.push(x + l);
        coordArray.push(y - (2*apoth));
      }else if(i == 4){
        coordArray.push(x);
        coordArray.push(y - (2*apoth));
      }else if(i == 5){
        coordArray.push(x - (0.5*l));
        coordArray.push(y - apoth);
      }
    }

    for (var i = 0; i <= coordArray.length - 1; i++) {
      if(i%2 === 0)
        hexCoords += coordArray[i]+",";
      else
        hexCoords += coordArray[i]+" ";
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
        
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points={this.generateHex(90,180,55)}
          fill={this.state.color}
          scale='1'
          //onPress={this.onPressLearnMore}
        />
        <Polygon
        //15 each side, for diag points use 7.5 across and 13 down while hypote = 15
          points={this.generateHex(90,350,55)}
          fill={this.state.color}
          scale='1'
          //onPress={this.onPressLearnMore}
        />        

        </Svg>        
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
  }

});
