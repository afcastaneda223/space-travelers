// const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const GET_BOOK = 'API_BOOK';
// const initialState = [];
// const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dtv1KpLO9504v7PYIJl4/books/';

// export const addBook = (payload) => ({
//   type: ADD_BOOK,
//   payload,
// });

// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });

// export const getBook = (payload) => ({
//   type: GET_BOOK,
//   payload,
// });

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       fetch(API, {
//         cash: 'reload',
//         method: 'POST',
//         body: JSON.stringify({
//           item_id: action.payload.id,
//           title: action.payload.title,
//           category: action.payload.category,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }).then(() => {
//         window.location.reload();
//       });
//       return state;
//     case REMOVE_BOOK:
//       fetch(`${API}${action.payload.id}`, {
//         cash: 'reload',
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }).then(() => {
//         window.location.reload();
//       });
//       return state;
//     case GET_BOOK:
//       return Object.keys(action.payload).map((key) => ({
//         id: key,
//         title: action.payload[key][0].title,
//         category: action.payload[key][0].category,
//       }));
//     default:
//       return state;
//   }
// };

// export default reducer;
