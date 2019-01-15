import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../../general/form/input';

const SignInForm = props => {
    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="email" size="s12 m8 offset-m2" label="Email" component={Input}/>
            </div>
            <div className="row">
                <Field name="password" type="password" size="s12 m8 offset-m2" label="Password" component={Input}/>
            </div>
            <div className="row">
                <div className="col s12 m8 offset-m2 right-align">
                    <button className="btn black text white-text">Sign In</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'sign-in-form'
})(SignInForm);