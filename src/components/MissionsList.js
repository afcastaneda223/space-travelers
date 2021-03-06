import React, { useEffect } from 'react';
import { Badge, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchMissions, bookMission, unbookMission } from '../redux/missions/missions';

function MissionsList() {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions.entities, shallowEqual);
  const loadingStatus = useSelector((state) => state.missions.status);

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

  if (loadingStatus === 'starting') {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      {missions.map((mission) => (
        <div key={mission.id} className="row row-cols-1 row-cols-md-12 mb-3 mb-md-0 mission-card">
          <div className="col-md-2 p-4 border border-1"><strong>{mission.name}</strong></div>
          <div className="col-md-6 p-4 border border-1">{mission.description}</div>
          <div className="col-md-2 d-none d-md-flex border border-1 justify-content-center align-items-center">
            <div>
              {renderBadge(mission)}
            </div>
          </div>
          <div className="col-md-2 border border-1 d-flex justify-content-center align-items-center">
            <div className="d-none d-md-block">
              {renderBtn(mission)}
            </div>
            <div className="d-md-none py-3">
              {renderBadge(mission)}
              <div className="d-inline-block mx-3" />
              {renderBtn(mission)}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MissionsList;
