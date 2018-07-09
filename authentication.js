
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
      return responseJson.data.user.authentication_token
    } catch (error) {
      console.error(error);
    }
  }
