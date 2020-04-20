import React, {Component} from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Routes from './routes';

class App extends Component{
  constructor(){
    super()
    this.state={

    }
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render(){
  return (
    <div className="App">
      {this.props.location.pathname === '/'?
        null
        :
        <Nav/>
      }
      {Routes}
    </div>
  );
}
}
export default withRouter(App)
