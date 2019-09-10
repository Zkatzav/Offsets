import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import axios from 'axios'
import logo from '../logo_offsets.png'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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
    const value = target.value
    await this.setState({ party: value });
    this.props.user.setUserParty(value)
  }
  setFitOffsets = async (event) => {
    const target = event.target
    const name = target.value
    await this.setState({ fitOffsets: [...this.state.fitOffsets, name] })
    await this.props.user.setFitOffsets(this.state.fitOffsets)
  }
  saveNewUser = () => {  
    let { party, fitOffsets } = this.props.user
    let newUser = {
      name: localStorage.name,
      fbID: localStorage.fbID,
      friends: JSON.parse(localStorage.friends),
      party: party,
      offsetsParties: fitOffsets
    }
    axios.post('http://localhost:4000/user/', newUser)
    window.location = "/select-offsets"
  }
  useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  render() {
    const parties = ["havoda", "biteno", "kholavan", "licud", "sach"]
    return (
      <div id="signup-container">
        <div>
          <img className="logo-signup" width="20%" src={logo} alt="logo"></img>
          <h2>Choose your party</h2>
          {parties.map((p, i) =>
            <button key={i} onClick={this.setUserParty} value={p} className={`avatar ${p}`}></button>
          )}
        </div>
        <div className="offsets-parties">
          <h2>Choose parties to offsets with</h2>
          {parties.map((p, i) =>
            <button style={{ backgroundColor: 'red' }} key={i} onClick={this.setFitOffsets} value={p} className={`avatar ${p}`}></button>
          )}
        </div>
        <Button onClick={this.saveNewUser} variant="contained" color="primary" className={this.useStyles.button}>
          sign up
        </Button>
      </div>
    )
  }
}

export default Signup;