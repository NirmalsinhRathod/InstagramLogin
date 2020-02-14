# Login Using Instagram


### Install 

 ```
npm install react-native-instagram-login --save
```

```
react-native link react-native-webview
```

Run `cd ios && pod install && cd ..` to install pod for iOS.

### How to get Client ID of instagram?
 - Go to `https://developers.facebook.com/` and create a new app
![Screenshot 2020-02-14 at 6.11.56 PM.png](https://www.dropbox.com/s/pl5gb1b7o7kylje/Screenshot%202020-02-14%20at%206.11.56%20PM.png?dl=0&raw=1)

### Example

```
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import InstagramLogin from 'react-native-instagram-login';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      igToken: '',
      igUserId: '',
      failure: '',
    };
  }
  setIgToken = async data => {
    this.setState({igToken: data.access_token, igUserId: data.user_id});
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            backgroundColor: 'orange',
            height: 30,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => this.instagramLogin.show()}>
          <Text style={{color: 'white', textAlign: 'center'}}>Login now</Text>
        </TouchableOpacity>
        <Text style={{margin: 10}}>Token: {this.state.token}</Text>
        {this.state.failure && (
          <View>
            <Text style={{margin: 10}}>
              failure: {JSON.stringify(this.state.failure)}
            </Text>
          </View>
        )}
        <InstagramLogin
          ref={ref => (this.instagramLogin = ref)}
          appId="your_app_id"
          appSecret="your_app_secret"
          redirectUrl="your_redirect_url"
          scopes={['user_profile', 'user_media']}
          onLoginSuccess={this.setIgToken}
          onLoginFailure={data => this.setState({failure: data})}
        />
      </View>
    );
  }
}

export default App;
```



