import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { observer, inject } from 'mobx-react'
import Carrousel from './Carrousel';
// import { async } from 'q';

@inject("user")
@observer
class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    img: ''
  }

  componentClicked = () => console.log("clicked");

  responseFacebook = async response => {
    // console.log(response);
    await this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      friends: response.friends.data,
    });
    this.props.user.setUserFriends(this.state.friends)
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div className="profile">
          <img src={this.state.picture} alt={this.state.name} />
          <h6>Welcome {this.state.name}</h6>
          <h5>Swipe friend to Offset with</h5>

        </div>
      )
    } else {
      fbContent = (
        <div>
          <FacebookLogin
            appId="708546032960295"
            // autoLoad={true}
            fields="name,email,picture,friends"
            onClick={this.componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      )
    }
    return (
      <div id="container">
        {fbContent}
        <Carrousel />
      </div>
    )
  }
}
export default Facebook