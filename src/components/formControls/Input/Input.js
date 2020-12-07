import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError/TextError";
import TextField from "@material-ui/core/TextField";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <Field name={name}>
        {(props) => {
          console.log(props);
          const { field } = props;
          return (
            <TextField
              {...field}
              {...rest}
              variant="outlined"
              margin="normal"
              fullWidth
              id={name}
              label={label}
              name={name}
            />
            // <FormControl variant="outlined">
            //     <InputLabel htmlFor="component-outlined">{label}</InputLabel>
            //     <OutlinedInput id="component-outlined" {...field} {...rest}
            //     // label={label}
            //      />
            // </FormControl>
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
