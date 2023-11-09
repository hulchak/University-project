import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../config";

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  tagTypes: ["Users"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      headers.set("Content-Type", "application/json");
    }
  }),
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => `/users`,
      providesTags: ["Users"]
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    })
  })
});

export const {useFetchUsersQuery, useAddUserMutation} = usersApiSlice;