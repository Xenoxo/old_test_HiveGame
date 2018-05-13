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
});
