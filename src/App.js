import React, { Component } from 'react';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    theme: DarkTheme,
  };

  render() {
    return (
      <PaperProvider theme={this.state.theme}>
        <Navigation theme={this.state.theme} />
      </PaperProvider>
    );
  }
}

export default App;
