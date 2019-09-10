import React, { useEffect } from 'react';
import Friend from './Friend'
import logo from '../logo_offsets.png'
import { observer, MobXProviderContext } from 'mobx-react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import { async } from 'q';
import axios from 'axios'



const useStores = () => React.useContext(MobXProviderContext)

const SelectOffset = observer(() => {

  const { user } = useStores()
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    }
  }));
  const setFriends = () => {
    let friends = JSON.parse(localStorage.friends)
    if(friends.length > 0) {
      friends.forEach(async f => await user.setFriend({name: f.name, fbID: f.id}))
    }
  } 
  const setUserName = () => {
    let userName = localStorage.name
    user.setUserName(userName)
    console.log(user.name)
  }
  useEffect(() => {
    setFriends()
    setUserName()
  }, [])
  const sendOffset = () => {
    console.log(user.name)
    axios.put(`http://localhost:4000/offset/${user.name}/${user.fitOffsetName}`)
  }
  return (
    <div className="profile">
      
      <h3>Welcome {localStorage.name}</h3>
      <h5>Chose friend to Offset with</h5>
      <div className="friends">
        {user.friends.map((f, i) =>
          <Friend key={i} friend={f.name} />)}
      </div>
      <Button onClick={() => sendOffset()} size="small" variant="contained" color="primary" className={useStyles.button}>
        send
      </Button>
      <img className="logo-signup" width="20%" src={logo} alt="logo"></img>
    </div>
  )
})

export default SelectOffset;