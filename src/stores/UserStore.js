import { observable, action } from 'mobx'
import axios from 'axios'

class User {
  @observable name = ''
  @observable fbID = ""
  @observable party = ""
  @observable friends = []
  @observable fitOffsetName = ''

  @action setUserName = (name) => this.name = name
  @action setfbID = (fbID) => this.fbID = fbID
  @action setUserParty = (party) => this.party = party
  @action setFriend = async (friend) => {
    let user = await axios.get(`http://localhost:4000/user/${friend.fbID}`)
    if (user.data.length > 0) {
      this.friends.push({name: user.data[0].name, party: user.data[0].party.myParty})
    }
  }
  @action setFitOffsetName = (fitOffsetName) => {
    this.fitOffsetName = fitOffsetName
  }  
}


export default new User()