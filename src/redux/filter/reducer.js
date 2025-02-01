import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./actions";

const filterInitialState = {
  filter: "",
};

const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(setFilter, (state, action) => ({
    ...state,
    filter: action.payload,
  }));
});

export { filterReducer };
