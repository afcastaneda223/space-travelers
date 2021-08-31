import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

function Missions() {
  const dispatch = useDispatch();
  // const missions = useSelector((state) => state.missions, shallowEqual);

  const showMissions = () => {
    dispatch(fetchMissions());
  };

  return (
    <div>
      <button type="button" onClick={showMissions}>MISSIONS</button>
    </div>
  );
}

export default Missions;
