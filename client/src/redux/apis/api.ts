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
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<ITodo, string>({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/todos",
          method: "GET",
          params,
        };
      },
      providesTags: ["Todos"],
    }),
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "/todo",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodo: builder.mutation({
      query: (options) => ({
        url: `/todo/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation, useUpdateTodoMutation } = baseAPI;
