import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Input from '../../general/form/input.js';

class SignUp extends Component {
    render(){
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <form>
                    <div className="row">
                        <Field name="firstName" size="s6" label="First Name" component={Input}/>
                        <Field name="lastName" size="s6" label="Last Name" component={Input}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, {})(
    reduxForm({
        form: 'sign-up'
    })(SignUp)
);
