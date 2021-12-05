import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
