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
        const followersLogin = []
        res.data.map(user => {
          return(
            followersLogin.push(user.login)
          )
        })
        // console.log(followersLogin);
          followersLogin.forEach(fol => {
            axios.get(`https://api.github.com/users/${fol}`)
              .then(resp => {
                // console.log(resp);
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
      // console.log(this.state.followers);
  }


  render() {
    return (
      <div className="App">
        <h1>Github Profile</h1>
        <ProfileCard profile={this.state.profile} />
        {this.state.followers.map(res => {
          return(
            <FollowersCard followers={res} />
          )
        })
        } 
      </div>
    );
  }
}

export default App;
