import React from 'react';
import FollowersCard from './FollowersCard';

class FollowersList extends React.Component {

    render() {
        return(
            <div className='list-container'>
                <h2>Austin's Followers</h2>
                {
                    this.props.followers.map(res => {
                        return(<FollowersCard key={res.id} followers={res} />)
                    })
                }
            </div>
        )
    }
}

export default FollowersList;