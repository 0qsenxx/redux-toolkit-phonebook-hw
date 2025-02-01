import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction(
  "contacts/setContacts",
  ({ name, number }) => ({
    payload: {
      name,
      number,
      id: nanoid(),
    },
  })
);

const deleteContact = createAction(
  "contacts/deleteContact",
  (idConatctToDelete) => ({
    payload: idConatctToDelete,
  })
);

export { addContact, deleteContact };
