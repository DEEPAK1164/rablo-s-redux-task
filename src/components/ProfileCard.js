// components/ProfileCard.js
import React from 'react';
import { connect } from 'react-redux';
import { setProfileData } from '../actions/actions';

import '../styles/ProfileCard.scss';

const ProfileCard = ({ name, experience, rating, details, subjects, setProfileData }) => {
  
  const removeSubject = (subjectIndex) => {
    // Create a copy of the subjects array without the subject to remove
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(subjectIndex, 1);

    // Dispatch an action to update the subjects in the Redux store
    setProfileData({ subjects: updatedSubjects });
  };

  return (
    <>
    <h1 className='heading'>Profile Info</h1>
    <div className="profile-card">
      <div className="profile-picture">
       
        <img src='https://media.licdn.com/dms/image/D4D35AQHrfNOzhlIpwQ/profile-framedphoto-shrink_400_400/0/1677159339103?e=1697486400&v=beta&t=aHrNYC5pKf9KVsHwkcsQ53RTDw59bekjuBiBNfbgrIc'/>
      </div>
      <div className="profile-info">
        <h2>{name}, {experience}</h2>
       
        <p className="rating" style={{color:'blue'}}>{rating} Rating</p>
        <div className="details">
          <p>{details}</p>
        </div>
        <div className="subjects">
          <h3>Subjects</h3>
          <ul>
            {subjects.map((subject, index) => (
              <li  key={index} style={{color:'blue'}}>
                {subject+" "}
                <button style={{color:'red' }} onClick={() => removeSubject(index)}>-</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.profile.name,
  experience: state.profile.experience,
  rating: state.profile.rating,
  details: state.profile.details,
  subjects: state.profile.subjects,
});

const mapDispatchToProps = {
  setProfileData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
