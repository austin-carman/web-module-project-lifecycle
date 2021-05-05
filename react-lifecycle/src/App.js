import React from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import FollowersList from './FollowersList';
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
        const followersLogin = []
        res.data.map(user => (
            followersLogin.push(user.url)
        ))
          followersLogin.forEach(fol => {
            axios.get(fol)
              .then(resp => {
                this.setState({followers: [...this.state.followers, resp.data]});
              })
              .catch(err => {
                console.log(err);
              })
          })
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
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
