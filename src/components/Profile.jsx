//import { ProfileDiv, DescriptionDiv, ListDiv } from './Profile.styled.js';
//import PropTypes from 'prop-types';

export const Profile = ({profile: {username, tag, location, avatar, stats}}) => {
    return <div>
    <div>
        <img src={avatar} alt={tag}/>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </div>
    <div>
        <li>
            <span className="quantity"> {stats.followers}</span>
        </li>
        <li>
            <span className="quantity"> {stats.views}</span>
        </li>
        <li>
            <span className="quantity"> {stats.likes}</span>
        </li>
    </div>
</div>
};