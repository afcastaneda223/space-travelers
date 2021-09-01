import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchMissions, bookMission } from '../redux/missions/missions';

function Missions() {
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

  const missionsList = missions.map((mission) => (
    <div key={mission.missionId} className="row row-cols-1 row-cols-md-12">
      <div className="col-md-2 border border-1"><strong>{mission.missionName}</strong></div>
      <div className="col-md-7 border border-1">{mission.missionDescription}</div>
      <div className="col-md-1 border border-1" />
      <div className="col-md-2 border border-1 d-flex justify-content-center align-items-center">
        <div>
          <Button variant="outline-secondary" onClick={() => joinMission(mission.missionId)}>Join Mission</Button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container border border-3">
      <div className="row row-cols-1 row-cols-md-12">
        <div className="col-md-2 border border-1"><strong>Mission</strong></div>
        <div className="col-md-7 border border-1"><strong>Description</strong></div>
        <div className="col-md-1 border border-1"><strong>Status</strong></div>
        <div className="col-md-2 border border-1" />
      </div>
      {missionsList}
    </div>
  );
}

export default Missions;
