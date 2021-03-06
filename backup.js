import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      authToken: null
    }
  }

  componentDidMount() {
    this.fetchAuthToken()
  }

  async fetchAuthToken(){
    try {
      let response = await
        fetch('http://littlestagings.herokuapp.com/mobile_login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            device_type: 'ios',
            device_token: 'deadbeef_june',
            email: 'dispatcher2@littlefleets.com',
            password: 'password',
        }),
      })
      let responseJson = await response.json()
      this.setState({ authToken: responseJson.data.user.authentication_token })

      return responseJson.data.user.authentication_token
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Token: {this.state.authToken}</Text>
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
