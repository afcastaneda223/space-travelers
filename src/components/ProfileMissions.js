import React from 'react';
import { useSelector } from 'react-redux';

const ProfileMissions = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <ul className="list-group">
        {missions
          .filter((mission) => mission.reserved)
          .map((mission) => (
            <div key={mission.id}>
              <li className="list-group-item list-group-item-action py-4 rounded">{mission.name}</li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ProfileMissions;
