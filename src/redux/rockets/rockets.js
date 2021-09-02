const BOOK_ROCKET = 'BOOK_ROCKET';
const UNBOOK_ROCKET = 'UNBOOK_ROCKET';
const GET_ROCKET = 'GET_ROCKET';
const initialState = [];
// const API = '';

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const unbookRocket = (payload) => ({
  type: UNBOOK_ROCKET,
  payload,
});

export const getRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: true };
      });
    case UNBOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) return rocket;
        return { ...rocket, reserved: false };
      });
    case GET_ROCKET:
      return action.payload.map((key) => ({
        id: key.id,
        rocket_name: key.rocket_name,
        description: key.description,
        flickr_images: key.flickr_images[0],
        reserved: false,
      }));
    default:
      return state;
  }
};

export default reducer;
