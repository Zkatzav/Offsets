import React from 'react';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { async } from 'q';


 const Friend = (props) => {
  const [state, setState] = React.useState({
    checked: false,
  });
  const handleChange = name => async event => {
    await setState({ ...state, [name]: event.target.checked });
    console.log(state.checked)

  };
  return (
    <div className="friend">
    {/* <FormGroup row> */}
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
    {/* </FormGroup> */}
    </div>
  );
}

export default Friend