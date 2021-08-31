/* eslint-disable camelcase */

// Actions
const MISSIONS_SUCCESS = 'space-travelers/missions/MISSIONS_SUCCESS';
const MISSIONS_FAILURE = 'space-travelers/missions/MISSIONS_FAILURE';

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

/* export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBooktoAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: payload.titleInfo.id,
      title: payload.titleInfo.title,
      category: payload.titleInfo.category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(addBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const removeBookFromAPI = (payload) => async (dispatch) => {
  const response = await fetch(`${baseURL}books/${payload}`, {
    method: 'DELETE',
  });
  const responseStatus = await response.ok;
  if (responseStatus) {
    return dispatch(removeBook(payload));
  }
  return dispatch(BOOKS_FAILURE());
}; */

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_SUCCESS:
      return action.payload.map((mission) => (
        {
          missionId: mission.mission_id,
          missionName: mission.mission_name,
          missionDescription: mission.description,
        }
      ));
    case MISSIONS_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
