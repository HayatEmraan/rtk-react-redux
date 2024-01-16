import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "/todo",
        method: "POST",
        body: todo,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseAPI;
