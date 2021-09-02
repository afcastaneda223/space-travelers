import React, { useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchMissions, bookMission, unbookMission } from '../redux/missions/missions';

function MissionsList() {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions, shallowEqual);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const joinMission = (id) => {
    dispatch(bookMission(id));
  };

  const leaveMission = (id) => {
    dispatch(unbookMission(id));
  };

  const renderBadge = ({ reserved }) => (
    (reserved
      && <Badge bg="badge">Active Member</Badge>
    ) || (<Badge bg="secondary text-uppercase">Not a Member</Badge>)
  );

  const renderBtn = ({ id, reserved }) => (
    (reserved
      && <Button variant="outline-danger" onClick={() => leaveMission(id)}>Leave Mission</Button>
    ) || (<Button variant="outline-secondary" onClick={() => joinMission(id)}>Join Mission</Button>)
  );

  return (
    <>
      {missions.map((mission) => (
        <div key={mission.id} className="row row-cols-1 row-cols-md-12">
          <div className="col-md-2 border border-1"><strong>{mission.name}</strong></div>
          <div className="col-md-6 border border-1">{mission.description}</div>
          <div className="col-md-2 border border-1 d-flex justify-content-center align-items-center">
            <div>
              {renderBadge(mission)}
            </div>
          </div>
          <div className="col-md-2 border border-1 d-flex justify-content-center align-items-center">
            <div>
              {renderBtn(mission)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MissionsList;
