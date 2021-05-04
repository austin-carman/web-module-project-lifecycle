import React from 'react';


class ProfileCard extends React.Component {

    render() {
        return(
            <div>
                <h2>User Profile</h2>
                <img src={this.props.profile.avatar_url} alt='profile' />
                <p>{this.props.profile.name}</p>
                <p>Location: {this.props.profile.location}</p>
                <a href={`https://github.com/${this.props.profile.login}`}> Profile: {`https://github.com/${this.props.profile.login}/`}</a>
                <p>Followers: {this.props.profile.followers}</p>
                <p>Following: {this.props.profile.following}</p>
            </div>
        )
    }
}

export default ProfileCard;