import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Title, Surface } from 'react-native-paper';

class MainScreen extends Component {
  state = {
    count: 0,
  };

  _increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <Surface style={styles.view}>
        <Title>{this.state.count}</Title>
        <Button mode="contained" onPress={this._increment}>
          Count up
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
});

export default MainScreen;
