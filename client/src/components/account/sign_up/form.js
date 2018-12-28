import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../general/form/input';

let SignUpForm = props => {
   return (
       <form>
           <div className="row">
               <Field name="firstName" size="s6" label="First Name" component={Input} />
               <Field name="lastName" size="s6" label="Last Name" component={Input} />
           </div>
       </form>
   )
};

SignUpForm = reduxForm({
   form: 'sign-up'
})(SignUpForm);

export default SignUpForm;