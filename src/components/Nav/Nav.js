import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import axios from 'axios';



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
        return (
            <div className="nav-component">
            <header>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/newpost'>New Post</Link>
                <Link to='/post'>Post</Link>
                <button onClick={this.logout}>Logout</button>
            </header>
            </div>
        )
    }
}

export default withRouter(Nav);