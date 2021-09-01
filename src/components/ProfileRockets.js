import React from 'react';
import { useSelector } from 'react-redux';

function ProfileRockets() {
  const myRocketArray = useSelector((state) => state.rockets);

  return (
    <div>
      <ul className="list-group">
        {myRocketArray.filter((rocket) => rocket.reserved).map((rocket) => (
          <div key={rocket.id}>
            <li className="list-group-item list-group-item-action py-4 rounded">{rocket.rocket_name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ProfileRockets;
