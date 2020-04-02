import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Surface, Text, TouchableRipple } from 'react-native-paper';

class MainScreen extends Component {
  state = {
    count: 0,
  };

  _increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  _reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <Surface style={styles.view}>
        <TouchableRipple
          style={styles.touchableCounterTasbeeh}
          onPress={this._increment}>
          <Text style={styles.textCounterTasbeeh}>{this.state.count}</Text>
        </TouchableRipple>
        <Button mode="contained" onPress={this._reset}>
          Reset
        </Button>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCounterTasbeeh: {
    fontSize: 72,
  },
});

export default MainScreen;
