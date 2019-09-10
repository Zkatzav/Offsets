import { observable, action } from 'mobx'
import { async } from 'q'
import axios from 'axios'

class User {
  @observable name = ''
  @observable fbID = ""
  @observable party = ""
  @observable friends = []
  @observable fitOffsets = []

  @action setUserName(name) {
    this.name = name
  }
  
  // @action setUser = () => {
    // let intervalID = setInterval(() => {

  //     if() {

  //       clearInterval(intervalID)
  //     }
  //   }, 500)
  // }
  
  @action setfbID = (fbID) => this.fbID = fbID
  @action setUserParty = (party) => this.party = party
  @action setFriend = async (friend) => {
    
    let user = await axios.get(`http://localhost:4000/user/${friend.fbID}`)
    if (user.data.length > 0) {
      this.friends.push(friend)
    }
  }
  @action setFitOffsets = (fitOffsets) => this.fitOffsets = fitOffsets
}


export default new User()