/* eslint-disable camelcase */

// Actions
const MISSIONS_SUCCESS = 'space-travelers/missions/MISSIONS_SUCCESS';
const MISSIONS_FAILURE = 'space-travelers/missions/MISSIONS_FAILURE';
const BOOK_MISSION = 'space-travelers/missions/BOOK_MISSION';
const UNBOOK_MISSION = 'space-travelers/missions/UNBOOK_MISSION';

// API
const baseURL = 'https://api.spacexdata.com/v3/missions/';

// Initial State

const initialState = [];

// Action Creators
export const missionsSuccess = (payload) => ({
  type: MISSIONS_SUCCESS,
  payload,
});

export const missionsFailure = () => ({
  type: MISSIONS_FAILURE,
});

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch(`${baseURL}`, {
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    const missions = await response.json();
    return dispatch(missionsSuccess(missions));
  }
  return dispatch(missionsFailure());
};

export const bookMission = (payload) => ({
  type: BOOK_MISSION,
  payload,
});

export const unbookMission = (payload) => ({
  type: UNBOOK_MISSION,
  payload,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_SUCCESS:
      return action.payload.map((mission) => (
        {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          reserved: false,
        }
      ));
    case MISSIONS_FAILURE:
      return state;
    case BOOK_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    case UNBOOK_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

export default reducer;
