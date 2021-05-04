import React from 'react';

class FollowersCard extends React.Component {


    render(){
        return(
            <div>
                <h2>Followers</h2>
                {
                    this.props.followers.map(follower => (  
                        <p key={follower.id}>{follower.login}</p>
                    ))
                }
                {/* <p>{this.props.follower}</p> */}
            </div>
        )
    }
}

export default FollowersCard;