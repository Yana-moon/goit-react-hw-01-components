import { FriendsListLi,FriendsStatusOnline,FriendsStatusOffline } from './FriendList.styled.js';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
    return (
    <FriendsListLi>
        {friend.isOnline ? 
        (
        <FriendsStatusOnline></FriendsStatusOnline>
        ) 
        : 
        (
        <FriendsStatusOffline></FriendsStatusOffline>
        )}
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48"
        />
        <p className="name">{friend.name}</p>
    </FriendsListLi>
    );
};


FriendListItem.propTypes = {
    friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    }).isRequired,
};