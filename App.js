import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:"#841584",
    }
  }
  

  onPressLearnMore = () => {
    this.setState({color:"#cd5422"});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{width:50, height:50, backgroundColor:'#cd5244'}}>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color={this.state.color}
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
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
