import { observable, action } from 'mobx'


class User {
  @observable name = ''
  @observable friends = []
  @observable fitOffsets = []

  @action setUserName = (name) => {
    this.name = name   
  }
  @action setUserFriends = (friends) => {
    this.friends = friends
  }
}


export default User