import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormLanding from './form2';

const useStyles = makeStyles((theme) => ({
    root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', 
          height: '400px',
          minHeight: '100vh',
          fontFamily: 'Nunito', 
          background: '#E2E2E2',
      
    },
    div: {
      padding: '12px',
      alignItems: 'center',
      display: 'flex',
      
    },
    section: {
      width: '50%',


    }
    
  }));

function Contact(){

    const classes = useStyles();

    return (
        <div className={classes.root} id="contact">
            <section className={classes.section}>

            </section>
            <section>
            <FormLanding/>
            </section>
        </div>
    );

}

export default Contact;