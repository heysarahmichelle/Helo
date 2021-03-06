import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './nav.scss';



class Nav extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }

    logout = () => {
        axios.get('/api/logout').then(res => {
            this.props.history.push('/')
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="nav-component">
                <div className="nav-bar-component">
                    <header>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/newpost'>New Post</Link>
                        <Link to='/post'>Post</Link>
                        <h1>{this.props.username}</h1>
                        <button onClick={this.logout}>Logout</button>
                    </header>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
};

export default withRouter(connect(mapStateToProps)(Nav));