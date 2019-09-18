import React, { useState } from 'react';
import { observer, MobXProviderContext } from 'mobx-react'


const useStores = () => React.useContext(MobXProviderContext)


const Friend = observer((props) => {

  const { user } = useStores()

  const [name, setName] = useState("")

  const handleChange = async (e) => {
    let name = e.target.name
    await setName(props.friend)
    await user.setFitOffsetName(name)
  }
  return (
      <button className="friend"
      style={name === props.friend ? { borderColor: 'green' } : null}
        type="button" name={props.friend}
        onClick={handleChange}
      >
        <img className={`avatar ${props.party}`} alt="" />
        <p>{props.friend}</p>
      </button>
  )
})

export default Friend