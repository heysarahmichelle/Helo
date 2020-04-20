import React, { Component } from 'react';
import axios from 'axios';

export default class NewPost extends Component {
    constructor(){
        super()
        this.state={
            title:'',
            image:'',
            content:'',
        }
    }
    addNewPost = () => {
        axios.post('/api/addpost', {...this.state})
        .then(res =>{
            this.setState({
                title:'',
                image:'',
                content:'',
            })
        })
        .catch(err=> console.log(err))
    }
    render() {
        return (
            <div className="new-post-component">
                <div className="new-post-box">
                    <h2>New Post</h2>
                    <p>Title:</p>
                    <input value={this.state.title} onChange={(e)=> this.setState({title: e.target.value})}className="title-input"></input>
                    <div className="image-container">
                        <img src="https://i.pinimg.com/originals/d3/e1/b5/d3e1b5e98385201d3ff62c1f2b318243.jpg" height="200px" width="200px"/>
                    </div>
                    <p>Image URL:</p>
                    <input value={this.state.image} onChange={(e)=> this.setState({image: e.target.value})}className="image-url"></input>
                    <p>Content:</p>
                    <input value={this.state.content} onChange={(e)=> this.setState({content: e.target.value})}className="content"></input>
                    <div className="post-button">
                        <button onClick={this.addNewPost} className="new-post-button">Post</button>
                    </div>
                </div>

            </div>
        )
    }
}
