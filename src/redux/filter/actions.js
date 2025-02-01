import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("filter/setFilter", (filterValue) => ({
  payload: filterValue,
}));

export { setFilter };
