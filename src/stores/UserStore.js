import { observable, action } from 'mobx'


class User {
  @observable name = ""
  @observable fbID = ""
  @observable party = ""
  @observable fitOffsets = []

  @action setUserName (name) {
    this.name = name 
  }  
  @action setfbID = (fbID) => this.fbID = fbID
  @action setUserParty = (party) => this.party = party
  @action setFitOffsets = (fitOffsets) => this.fitOffsets = fitOffsets
}


export default new User ()