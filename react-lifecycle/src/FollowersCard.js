import React from 'react';

class FollowersCard extends React.Component {


    render(){
        return(
            <div className='followers-card' >
                <h2>Followers</h2>
                <div className='follower'>
                    { 
                        this.props.followers.map(follower => (
                            <ul key={follower.id}>
                                <li>{follower.login}</li>
                            </ul>
                        ))
                    }
                </div>
                {/* <p>{this.props.follower}</p> */}
            </div>
        )
    }
}

export default FollowersCard;