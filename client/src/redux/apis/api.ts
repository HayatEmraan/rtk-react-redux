import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ITodo {
  status: boolean;
  data: [
    {
      _id: string;
      title: string;
      priority: string;
      description: string;
      isCompleted: boolean;
    }
  ];
}

export const baseAPI = createApi({
  reducerPath: "baseAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo, void>({
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
