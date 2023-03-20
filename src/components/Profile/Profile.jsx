import { ProfileWrapper, UserWrapper, ListWrapper, ProfileName } from './Profile.styled.js';
import PropTypes from 'prop-types';

export const Profile = ({profile: {username, tag, location, avatar, stats}}) => {
    return <ProfileWrapper>
    <UserWrapper>
        <img src={avatar} alt={tag}/>
        <ProfileName className="name">{username}</ProfileName>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </UserWrapper>
    <ListWrapper>
        <li>
            <p className="quantity"> Followers {stats.followers} </p>
        </li>
        <li>
            <p className="quantity"> Views {stats.views}</p>
        </li>
        <li>
            <p className="quantity"> Likes {stats.likes}</p>
        </li>
    </ListWrapper>
</ProfileWrapper>
};

Profile.propTypes = {
    profile: PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  };