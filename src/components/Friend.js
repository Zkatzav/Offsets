import React, { useState, useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { async } from 'q';
import { observer, MobXProviderContext } from 'mobx-react'

const useStores = () => React.useContext(MobXProviderContext)


const Friend = observer((props) => {

  const { user } = useStores()

  const [state, setState] = useState({
    checked: false,
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  useEffect(() => {
    if (state.checked) {
      user.setFitOffsetName(props.friend)
    } else {
      user.setFitOffsetName('')
    }
  })
  return (
    <div className="friend">
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange('checked')}
            value="checked"
            color="primary"
          />
        }
        label={props.friend}
      />
    </div>
  );
})

export default Friend