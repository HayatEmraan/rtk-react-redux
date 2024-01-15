import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  title: string;
  priority: string;
  description: string;
  isCompleted?: boolean;
}

const initialState = {
  todos: [] as ITodo[],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    completedTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo!.isCompleted = !todo?.isCompleted;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
