import React from 'react';


class ProfileCard extends React.Component {

    render() {
        return(
            <div className='profile-card' >
                <img src={this.props.profile.avatar_url} alt='profile' />
                <div className='profile-info' >
                    <p>Name: {this.props.profile.name}</p>
                    <p>Location: {this.props.profile.location}</p>
                    {this.props.profile.bio ? <p>Bio: {this.props.profile.bio}</p> : ''}
                    <p>Followers: {this.props.profile.followers}</p>
                    <p>Following: {this.props.profile.following}</p>
                    <p>Public Repos: {this.props.profile.public_repos}</p>
                    <p>Profile: <a href={`https://github.com/${this.props.profile.login}`}>{`https://github.com/${this.props.profile.login}/`}</a></p>
                </div> 
            </div>
        )
    }
}

export default ProfileCard;