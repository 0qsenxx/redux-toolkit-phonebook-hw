import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "./actions";

const contactsInitialState = {
  contacts: localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts"))
    : [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ],
};

const contactsReducer = createReducer(contactsInitialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }))
    .addCase(deleteContact, (state, action) => ({
      ...state,
      contacts: state.contacts.filter(
        (contact) => contact.id !== action.payload
      ),
    }));
});

export { contactsReducer };
