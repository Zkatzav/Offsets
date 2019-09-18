import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import { observer, inject } from 'mobx-react'
import logo from '../logo_offsets.png'
import axios from 'axios'


@inject("user")
@observer

class Facebook extends Component {
  state = {
    fbLoggedIn: false,
    userExists: false,
    offset: ''
  }
  responseFacebook = async response => {
    let user = await axios.get(`http://localhost:4000/user/${response.userID}`)
    await this.setState({
      fbLoggedIn: true,
      userExists: user.data.length > 0 ? true : false,
      picture: response.picture.data.url,
      offset: user.data.length > 0 ? user.data[0].offset : null
    })
    localStorage.setItem("name", response.name)
    localStorage.setItem("fbID", response.userID)
    localStorage.setItem("friends", JSON.stringify(response.friends.data))
  }
  render() {
    return (
      <div id="container">
        <img className="logo" width="50%" src={logo} alt="logo"></img>
        {
          this.state.fbLoggedIn ?
            this.state.userExists ?
              this.state.offset ?
                <div>You Offsets with {this.state.offset}</div>
                : window.location = "/select-offsets"
              : window.location = "/signup"
            : <FacebookLogin
              appId="708546032960295"
              autoLoad={true}
              fields="name,email,picture,friends"
              onClick={this.componentClicked}
              callback={this.responseFacebook}
            />
        }
      </div>
    )
  }
}

export default Facebook