import React from 'react';

class FollowersCard extends React.Component {


    render(){
        return(
            <div className='profile-card' >
                <img src={this.props.followers.avatar_url} alt='profile' />
                <div className='profile-info' >
                    <p>Login: {this.props.followers.name}</p>
                    <p>Location: {this.props.followers.location}</p>
                    <p>Profile: <a href={`https://github.com/${this.props.followers.login}`}>{`https://github.com/${this.props.followers.login}/`}</a></p>
                    <p>Followers: {this.props.followers.followers}</p>
                    <p>Following: {this.props.followers.following}</p>
                </div> 
            </div>
        )
    }
}

export default FollowersCard;