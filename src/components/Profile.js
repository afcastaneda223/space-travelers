import React from 'react';
import ProfileRockets from './ProfileRockets';

function Profile() {
  return (
    <div className="container">
      <div className="row row-cols-lg-2 row-cols-1">
        <div className="col">
          <h3>My Missions</h3>
          {/* <ProfileMissions /> */}
        </div>
        <div className="col">
          <h3>My Rockets</h3>
          <ProfileRockets />
        </div>
      </div>
    </div>
  );
}

export default Profile;
