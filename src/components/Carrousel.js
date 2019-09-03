import React, { Component } from 'react'
import { Swipeable } from 'react-swipeable'
import { observer, inject } from 'mobx-react'

@inject("user")
@observer
class Carrousel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      Idx: 0,
      RIGHT: "-1",
      LEFT: "+1",
    };
  }
  componentDidMount = () => {
  }
  onSwiped(direction) {
    let { RIGHT, LEFT } = this.state
    let data = this.props.user.friends
    let change = direction === RIGHT ? RIGHT : LEFT;
    let adjustedIdx = this.state.Idx + Number(change);
    let newIdx;

    if (adjustedIdx >= data.length) {
      newIdx = 0;
    } else if (adjustedIdx < 0) {
      newIdx = data.length - 1;
    } else {
      newIdx = adjustedIdx;
    }
    this.setState({ Idx: newIdx });
  }
  swipedL = () => {
    this.onSwiped()
    console.log("swiped l")
  }
  swipedR = () => {
    this.onSwiped()
    console.log("swiped R")
  }
  render() {
    let friends = this.props.user.friends
    let { Idx } = this.state
    return (
      <div>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.swipedL()}
          onSwipedRight={() => this.swipedR()}
        >
          {friends.length > 0 ? friends[Idx].name : null}
        </Swipeable>
      </div>
    );
  }
}
export default Carrousel