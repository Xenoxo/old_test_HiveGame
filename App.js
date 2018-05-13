import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

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
      ////style={styles.container}
      <View> 
        <View style={{width:50, height:50, backgroundColor:'#cd5244'}}>
        </View>
        <TouchableOpacity
          style={{backgroundColor: "red", padding: 20, width:50, height:50, position: "absolute", right: 50}} 
          onPress={this.onPressLearnMore}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: "blue", padding: 20, width:50, height:50, position: "absolute", right: 50, top: 50}} 
          onPress={this.onPressLearnMore}
        >        
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.hexagon}>
          <View style={styles.hexagonInner} />
          <View style={styles.hexagonBefore} />
          <View style={styles.hexagonAfter} />
        </View>
        <View style={styles.trapezoidTop} />
        <View style={styles.trapezoidBot} />

        
        <Hex />
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
