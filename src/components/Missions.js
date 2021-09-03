import React from 'react';
import MissionsList from './MissionsList';

function Missions() {
  return (
    <div className="container">
      <div className="row d-none d-md-flex row-cols-md-12">
        <div className="col-md-2 border border-1 p-3"><strong>Mission</strong></div>
        <div className="col-md-6 border border-1 p-3"><strong>Description</strong></div>
        <div className="col-md-2 border border-1 p-3"><strong>Status</strong></div>
        <div className="col-md-2 border border-1 p-3" />
      </div>
      <MissionsList />
    </div>
  );
}

export default Missions;
