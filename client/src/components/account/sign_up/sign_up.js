import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './form';

class SignUp extends Component {
   render(){
       return (
           <div>
               <h1 className="center">Sign Up</h1>
               <Form/>
           </div>
       )
   }
}

export default connect(null, {})(SignUp);