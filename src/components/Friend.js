import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    
  };

  return (
    <div className="friend">
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checked}
            onChange={handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
        }
        label={props.friend}
      />
      {/* <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" /> */}
    </FormGroup>
    </div>
  );
}