import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("filter/changeFilter");
export const addItem = createAction("items/addItem");
export const removeItem = createAction("items/removeItem");
export const filterItems = createAction("items/filterItems");
