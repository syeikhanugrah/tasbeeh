import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class App extends Component {
  state = {
    count: 0,
  };

  _increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View style={styles.view}>
        <Text>{this.state.count}</Text>
        <Button title="+" onPress={this._increment} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
