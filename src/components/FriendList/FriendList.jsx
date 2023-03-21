import { FriendsListWrapper } from './FriendList.styled.js';
import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
    return (
        <FriendsListWrapper>
            {friends.map((friend) => 
            <FriendListItem key={friend.id} friend={friend}/>
            )}
        </FriendsListWrapper>
    );
    };

    FriendList.propTypes = {
        friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
        ).isRequired,
    };