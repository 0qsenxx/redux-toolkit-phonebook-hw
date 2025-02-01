// import { createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const state = {
//   contacts: localStorage.getItem("contacts")
//     ? JSON.parse(localStorage.getItem("contacts"))
//     : [
//         { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//       ],
//   filter: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "setContacts":
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     case "deleteContact":
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           (contact) => contact.id !== action.payload
//         ),
//       };
//     case "setFilter":
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, state, composeWithDevTools());

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/reducer";
import { filterReducer } from "./filter/reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export { store };
