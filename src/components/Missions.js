import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Missions() {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions, shallowEqual);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const missionsList = missions.map((mission) => (
    <div key={mission.missionId} className="row row-cols-1 row-cols-md-12">
      <div className="col-md-2 border border-1"><strong>{mission.missionName}</strong></div>
      <div className="col-md-7 border border-1">{mission.missionDescription}</div>
      <div className="col-md-1 border border-1">Status</div>
      <div className="col-md-2 border border-1">TEMP</div>
    </div>
  ));

  return (
    <div className="container border border-3">
      <div className="row row-cols-1 row-cols-md-12">
        <div className="col-md-2 border border-1"><strong>Mission</strong></div>
        <div className="col-md-7 border border-1"><strong>Description</strong></div>
        <div className="col-md-1 border border-1"><strong>Status</strong></div>
        <div className="col-md-2 border border-1"><strong>TEMP</strong></div>
      </div>
      {missionsList}
    </div>
  );
}

export default Missions;
