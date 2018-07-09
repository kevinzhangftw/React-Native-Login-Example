import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fetchAuthToken from './authentication'
export default class App extends React.Component {
  state = {
    authToken: null,
  }

  componentDidMount(){
    fetchAuthToken().then( token => {
      this.setState({authToken: token})
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.authToken}</Text>
      </View>
    )
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
