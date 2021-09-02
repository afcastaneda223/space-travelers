import React from 'react';
import MissionsList from './MissionsList';

function Missions() {
  return (
    <div className="container border border-3">
      <div className="row row-cols-1 row-cols-md-12">
        <div className="col-md-2 border border-1"><strong>Mission</strong></div>
        <div className="col-md-6 border border-1"><strong>Description</strong></div>
        <div className="col-md-2 border border-1"><strong>Status</strong></div>
        <div className="col-md-2 border border-1" />
      </div>
      <MissionsList />
    </div>
  );
}

export default Missions;
