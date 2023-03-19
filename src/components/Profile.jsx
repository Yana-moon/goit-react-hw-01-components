import { ProfileDiv, DescriptionDiv, ListDiv } from './Profile.styled.js';
import PropTypes from 'prop-types';

export const Profile = ({
    user: {
    avatar, 
    username, 
    tag, 
    location,
    stats
    },
}) => {
    return (
        <ProfileDiv>
            <DescriptionDiv>
                <img src={avatar} alt={tag}/>
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </DescriptionDiv>
            
            <ListDiv>
                <li>
                    <span className="quantity"> {stats.followers}</span>
                </li>
                <li>
                    <span className="quantity"> {stats.views}</span>
                </li>
                <li>
                    <span className="quantity"> {stats.likes}</span>
                </li>
            </ListDiv>
        </ProfileDiv>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
    }).isRequired,
};