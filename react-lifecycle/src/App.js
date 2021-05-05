import React from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import FollowersCard from './FollowersCard';
import './App.css';

class App extends React.Component {
  state = {
    profile: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/austin-carman')
      .then(res => {
        this.setState({
          ...this.state, profile: res.data
        })
      })
      .catch(err => {
        console.log('Error: ', err);
      })

    axios.get('https://api.github.com/users/austin-carman/followers')
          .then(res => {
              this.setState({followers: res.data})
          })
          .catch(err => {
              console.log(err);
          })
  }


  render() {
    return (
      <div className="App">
        <h1>Github Profile</h1>
        <ProfileCard profile={this.state.profile} />
        <FollowersCard followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
