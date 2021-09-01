import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocket, bookRocket, unbookRocket } from '../redux/rockets/rockets';

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

  const reserveRocket = (e) => {
    dispatch(bookRocket(e.target.id));
  };

  const cancelReserve = (e) => {
    dispatch(unbookRocket(e.target.id));
  };

  return (
    <div>
      {myRocketArray.map((rocket) => (
        <div className="card mb-5 border-0" key={rocket.id}>
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={rocket.flickr_images} className="img-fluid rounded-start" alt={rocket.rocket_name} />
            </div>
            <div className="col-lg-8">
              <div className="card-body">
                <h5 className="card-title">{rocket.rocket_name}</h5>
                <p className="card-text">
                  { rocket.reserved ? <span className="badge me-2">Reserved</span> : null}
                  {rocket.description}
                </p>
                { rocket.reserved ? <button type="button" onClick={cancelReserve} id={rocket.id} className="btn btn-outline-dark mt-lg-5">Cancel Reservation</button> : <button type="button" onClick={reserveRocket} id={rocket.id} className="btn btn-primary mt-lg-5">Reserve Rocket</button>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RocketList;
