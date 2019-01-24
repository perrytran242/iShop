import React, { Component } from 'react';
import {connect} from 'react-redux';

export default (WrappedComponent, to='/', requireAuth = true) => {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }
        componentDidUpdate(){
            this.checkAuth();
        }
        checkAuth(){
            const { auth, history } = this.props;

            if(auth !== requireAuth){
                history.push(to);
            }
        }
        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    const mapStateToProps = state => { 
        return {
            auth: state.user.auth
        }
     }
     return connect(mapStateToProps)(Auth);
}