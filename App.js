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
