import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../actions';
import Form from './form';

class SignIn extends Component {

    handleSignIn = values => {
        console.log('Sign in with:', values);

        this.props.signIn(values);
    }

    render(){
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <Form onSubmit={this.handleSignIn}/>
            </div>
        );
    }
}

export default connect( null, {signIn} )(SignIn);