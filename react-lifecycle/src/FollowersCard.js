import React from 'react';

class FollowersCard extends React.Component {


    render(){
        return(
            <div className='profile-card' >
                <img src={this.props.followers.avatar_url} alt='profile' />
                <div className='profile-info' >
                    <p>Name: {this.props.followers.name}</p>
                    <p>Location: {this.props.followers.location ? this.props.followers.location : 'unknown'}</p>
                    <p>Bio: {this.props.followers.bio ? this.props.followers.bio : 'N/A'}</p>
                    <p>Followers: {this.props.followers.followers}</p>
                    <p>Following: {this.props.followers.following}</p>
                    <p>Public Repos: {this.props.followers.public_repos}</p>
                    <p>Profile: <a href={`https://github.com/${this.props.followers.login}`}>{`https://github.com/${this.props.followers.login}/`}</a></p>
                </div> 
            </div>
        )
    }
}

export default FollowersCard;