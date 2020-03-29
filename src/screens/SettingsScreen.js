import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Surface, Title } from 'react-native-paper';

class SettingsScreen extends Component {
  render() {
    return (
      <Surface style={styles.view}>
        <Title>Settings Screen</Title>
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

export default SettingsScreen;
