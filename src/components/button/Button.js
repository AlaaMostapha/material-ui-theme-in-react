import React from 'react';
import Button from '@material-ui/core/Button';


function CreateButton(props) {
    const {label,...rest}=props
    return (
            <Button
              fullWidth
              variant="contained"
              {...rest}
            >
              {label}
            </Button>
    )
}

export default CreateButton
