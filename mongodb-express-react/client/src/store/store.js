import {configureStore} from "@reduxjs/toolkit";
import {usersApiSlice} from "./users/usersApiSlice.js";

export const store = configureStore({
  reducer: {
    [usersApiSlice.reducerPath]: usersApiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(
      usersApiSlice.middleware
    )
  )
});