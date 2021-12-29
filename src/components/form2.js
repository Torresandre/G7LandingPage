/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center', 
        
        minHeight: '80vh',
        fontFamily: 'Nunito', 
        width: '100%',
        background: '#002336',
        padding: '2rem',
        borderRadius: '10px',
       
    
  },
  nome: {
    display: 'flex',
    alignItems: 'top',
  },
  divEmail: {
    display: 'grid',
    padding: '12px',
  },
  divForm: {
    padding: '12px',
    alignItems: 'center',
    display: 'grid',
    flexDirection: 'collumn',
    justifyContent: 'center',
  },
  Form: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
}));


function FormLanding() {

  const classes = useStyles();
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  return (
    <div className={classes.root}>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: '',
          lastName: '',
          email: '',
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form className={classes.Form}>
            <div className={classes.nome}>
            <div className={classes.divForm}>
              <label>Nome:</label>
              <Field name="name" type="text" className={classes.field} variant="outlined" />
              <ErrorMessage name="name" />
            </div>
            <div className={classes.divForm}>
              <label>Sobrenome:</label>
              <Field name="lastName" type="text" className={classes.field} variant="outlined" />
              <ErrorMessage name="lastName" />
            </div>
          </div>
          <div className={classes.divEmail}>
              <label>Email:</label>
              <Field name="email" type="email" className={classes.fieldEmail} variant="outlined" />
              <ErrorMessage name="email" />
            </div>
            <Button color="primary" variant="outlined" disabled={!isValid} fullWidth type="submit">
            Receber Material
        </Button>
            
            </Form>
             
         
          
        )}
      />
    </div>
  );
}

export default FormLanding;