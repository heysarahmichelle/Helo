import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
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
        return (
            <div className="nav-component">
                <div className="nav-bar-component">
                    <header>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/newpost'>New Post</Link>
                        <Link to='/post'>Post</Link>
                        <button onClick={this.logout}>Logout</button>
                    </header>
                </div>  
            </div>
        )
    }
}

export default withRouter(Nav);