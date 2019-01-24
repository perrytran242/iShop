import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';
import SideNav from './side_nav';
import './nav.scss';

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

    renderSignOut(){
        return (
            <button onClick={this.props.signOut} 
                    className="btn waves-effect waves-light blue">Sign Out
            </button>
        );
    }

    buildLink(link){
        return (
            <li key={link.to}>
                <Link to={link.to}>{link.text}</Link>
            </li>
        );
    }

    renderLinks = () => {
        const { auth } = this.props;
        let authLinks = [];

        const { auth: navAuth, common, nonAuth} = this.state;

        const commonLinks = common.map(this.buildLink);

        if(auth){
            authLinks = navAuth.map(this.buildLink);
            authLinks.push( <li key='/sign-out' className="sign-out"> {this.renderSignOut()} </li> );
        } else {
            authLinks = nonAuth.map(this.buildLink);
        }

        return [ ...commonLinks, ...authLinks ];
    }

    getSideNavRef(e){
        console.log('Side Nav Ref: ', e);
    }

    render(){
        return (
            <Fragment>
                <nav className="blue-grey darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">iShop</Link>
                        <Link to="#" data-target="side-nav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>

                <SideNav renderLinks={this.renderLinks}/>
            </Fragment>
            
        );
    }
}

// const mapStateToProps = ( {user: {auth}} ) => ({auth});

const mapStateToProps = ( state ) => {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, { signOut })(Nav);