import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { observer, inject } from 'mobx-react'
import Friend from './Friend'
// import SelectParty from './SelectParty'
// import axios from 'axios'
import logo from '../logo_offsets.png'
import { async } from 'q'
import axios from 'axios'


@inject("user")
@observer
class Facebook extends Component {
  state = {
    fbLoggedIn: false,
    userID: '',
    name: '',
    email: '',
  }
  componentClicked = () => console.log("clicked");

  responseFacebook = async response => {
    let user = await axios.get(`http://localhost:4000/user/${response.userID}`)
    await this.setState({
      fbLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      friends: response.friends.data,
      userExists: user ? true : false
    });
    localStorage.setItem("name", response.name)
    localStorage.setItem("fbID", response.userID)
  }
  render() {
    let fbContent;
    if (this.state.fbLoggedIn) {
      if (this.state.userExists) {
          fbContent = (
            <div className="profile">
              <h6>Welcome {this.state.name}</h6>
              <h5>Chose friend to Offset with</h5>
              <div className="friends">{this.state.friends.map((f, i) => <Friend key={i} friend={f.name} />)}</div>
            </div>
          )
      } else {
        window.location = "/signup"
      }
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
        <img className="logo" width="50%" src={logo} alt="logo"></img>
        {fbContent}
      </div>
    )
  }
}
export default Facebook