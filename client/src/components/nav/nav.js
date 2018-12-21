import React, { Component } from 'react';

class Nav extends Component{

    state = {
        common: [
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'Shop',
                to: '/products'
            }
        ],

        auth: [
            {
                text: 'Orders',
                to: '/account/orders'
            },
            {
                text: 'Profile',
                to: '/account'
            }
        ],

        nonAuth: [
            {
                text: 'Sign In',
                to: '/account/sign-in'
            },
            {
                text: 'Sign Up',
                to: '/account/sign-up'
            }
        ]
    }

    render(){
        return (
            <nav className="blue-grey darken-2"></nav>
        );
    }
}

export default Nav;