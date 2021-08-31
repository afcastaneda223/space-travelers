import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets';

function RocketList() {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';
  useEffect(() => {
    const apiRockets = async () => {
      const fetchRockets = await fetch(fetchApi);
      const rockets = await fetchRockets.json();
      return dispatch(getRocket(rockets));
    };
    apiRockets();
  }, []);

  //   const myRocketArray = useSelector((state) => state.RocketArray);
  //   console.log(myRocketArray);

  return (
    <div>
      <div className="card mb-3 boder border-1">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RocketList;
