// const BOOK_ROCKET = 'BOOK_ROCKET';
// const UNBOOK_ROCKET = 'UNBOOK_ROCKET';
const GET_ROCKET = 'GET_ROCKET';
const initialState = [];
// const API = '';

// export const addBook = (payload) => ({
//   type: BOOK_ROCKET,
//   payload,
// });

// export const removeBook = (payload) => ({
//   type: UNBOOK_ROCKET,
//   payload,
// });

export const getRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case BOOK_ROCKET:
    //   fetch(API, {
    //     cash: 'reload',
    //     method: 'POST',
    //     body: JSON.stringify({
    //       item_id: action.payload.id,
    //       title: action.payload.title,
    //       category: action.payload.category,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(() => {
    //     window.location.reload();
    //   });
    //   return state;
    // case UNBOOK_ROCKET:
    //   fetch(`${API}${action.payload.id}`, {
    //     cash: 'reload',
    //     method: 'DELETE',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }).then(() => {
    //     window.location.reload();
    //   });
    //   return state;
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
