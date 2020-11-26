import React from 'react';
import CreateButton from '../../../components/button/Button';
import {Formik,Form} from 'formik';
import FromikControl from '../../../components/formControls/FormikControl';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../../Routes/History';
const initialValues={
    email:'',
    password:''
}
const onSubmit = values=>{
    console.log('form state',values)
    history.push('/')
}
const validatationSchema=Yup.object({
    email:Yup.string().required('Email is required').email('Invalid Email format'),
    password:Yup.string().required('Password is required')
})
 
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm() {
     const classes = useStyles();
    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validatationSchema}
                onSubmit={onSubmit}
            >
                {formik=>(
                    <Form className={classes.form}>
                        <FromikControl
                            control='input'
                            name='email'
                            type='email'
                            label='Email'
                        />
                        <FromikControl
                            control='input'
                            name='password'
                            type='password'
                            label='Password'
                        />
                        <CreateButton type="submit" label="Login" color="primary" className={classes.submit}/>
                    </Form>
                )}
            </Formik>
    )
}

export default LoginForm
