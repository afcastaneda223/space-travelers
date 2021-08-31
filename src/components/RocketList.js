import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket } from '../redux/rockets/rockets';

function RocketList() {
  const dispatch = useDispatch();
  const fetchApi = 'https://api.spacexdata.com/v3/rockets';

  const myRocketArray = useSelector((state) => state.rockets);

  useEffect(() => {
    const apiRockets = async () => {
      const fetchRocket = await fetch(fetchApi);
      const rockets = await fetchRocket.json();
      return dispatch(getRocket(rockets));
    };
    if (myRocketArray.length === 0) {
      apiRockets();
    }
  }, []);

  return (
    <div>
      {myRocketArray.map((rocket) => (
        <div className="card mb-3" key={rocket.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={rocket.flickr_images} className="img-fluid rounded-start" alt={rocket.rocket_name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{rocket.rocket_name}</h5>
                <p className="card-text">{rocket.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RocketList;
