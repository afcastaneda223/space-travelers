/* eslint-disable camelcase */

// Actions
const FETCH_STARTED = 'space-travelers/missions/FETCH_STARTED';
const FETCH_SUCCEDED = 'space-travelers/missions/FETCH_SUCCEDED';
const FETCH_FAILED = 'space-travelers/missions/MISSIONS_FAILED';
const CREATE = 'space-travelers/missions/CREATE';
const REMOVE = 'space-travelers/missions/REMOVE';

// API
const baseURL = 'https://api.spacexdata.com/v3/missions/';

// Initial State

const initialState = {
  status: 'idle',
  entities: [],
};

// Action Creators
export const getMissionsStarted = () => ({
  type: FETCH_STARTED,
});

export const getMissionsSuccess = (payload) => ({
  type: FETCH_SUCCEDED,
  payload,
});

export const getMissionsFailed = () => ({
  type: FETCH_FAILED,
});

export const fetchMissions = () => async (dispatch) => {
  dispatch(getMissionsStarted());
  try {
    const response = await fetch(`${baseURL}`, {});
    const missions = await response.json();
    dispatch(getMissionsSuccess(missions));
  } catch (err) {
    dispatch(getMissionsFailed(err.toString()));
  }
};

export const bookMission = (payload) => ({
  type: CREATE,
  payload,
});

export const unbookMission = (payload) => ({
  type: REMOVE,
  payload,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        status: 'starting',
      };
    case FETCH_SUCCEDED:
      return {
        ...state,
        entities: action.payload.map((mission) => (
          {
            id: mission.mission_id,
            name: mission.mission_name,
            description: mission.description,
            reserved: false,
          }
        )),
        status: 'idle',
      };
    case FETCH_FAILED:
      return state;
    case CREATE:
      return {
        ...state,
        entities: state.entities.map((mission) => {
          if (mission.id !== action.payload) return mission;
          return { ...mission, reserved: true };
        }),
        status: 'failed',
      };
    case REMOVE:
      return {
        ...state,
        entities: state.entities.map((mission) => {
          if (mission.id !== action.payload) return mission;
          return { ...mission, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
