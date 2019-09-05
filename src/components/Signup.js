import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import axios from 'axios'
import logo from '../logo_offsets.png'


@inject('user')
@observer
class Signup extends Component {
  constructor() {
    super()
    this.state = {
      party: '',
      fitOffsets: []
    }
  }
  setUserParty = async (event) => {
    const target = event.target
    const name = target.value
    await this.setState({ party: name });
    this.props.user.setUserParty(name)
  }
  setFitOffsets = async (event) => {
    const target = event.target
    const name = target.value
    await this.setState({ fitOffsets: [...this.state.fitOffsets, name] })
    await this.props.user.setFitOffsets(this.state.fitOffsets)
  }
  saveNewUser = () => {
    let { name, fbID, party, fitOffsets } = this.props.user
    let newUser = {
      name: localStorage.name,
      fbID: localStorage.fbID,
      party: party,
      offsetsParties: this.props.user.fitOffsets
    }
    axios.post('http://localhost:4000/user/', newUser)
  }
  render() {
    const parties = ["havoda", "biteno", "kholavan", "licud", "sach"]
    return (
      <div>
        <div>
          <img className="logo-signup" width="20%" src={logo} alt="logo"></img>
          <h4>Choose your party</h4>
          {parties.map((p, i) =>
            <button key={i} onClick={this.setUserParty} value={p} className={`avatar ${p}`}></button>
          )}
        </div>
        <div>
          <h4>Choose parties to offsets with</h4>
          {parties.map((p, i) =>
            <button key={i} onClick={this.setFitOffsets} value={p} className={`avatar ${p}`}></button>
            )}
        </div>
        <button onClick={this.saveNewUser}>Done</button>
      </div>
    )
  }
}
export default Signup;