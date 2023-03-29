import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TodoType } from '../../types/TodosTypes';
import type { AppThunk } from '../hooks';
// import type { TodoFormType } from '../../types/reduxTypes';

const initialState: TodoType[] = [];

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (_, action: PayloadAction<TodoType[]>) => action.payload,
    // addTodo: (state, action: PayloadAction<TodoType>) => [action.payload, ...state],
    // deleteTodo: (state, action: PayloadAction<number>) =>
    //   state.filter((el) => el.id !== action.payload),
    // statusTodo: (state, action: PayloadAction<TodoType>) =>
    //   state.map((el) => {
    //     if (el.id === action.payload.id) return { ...el, status: action.payload.status };
    //     return el;
    //   }),
    // editTodo: (state, action: PayloadAction<TodoType>) =>
    //   state.map((el) => {
    //     if (el.id === action.payload.id) return action.payload;
    //     return el;
    //   }),
  },
});
// export const { setTodos, addTodo, deleteTodo, statusTodo, editTodo } = todosSlice.actions;
export const { setRooms } = roomsSlice.actions;

export const getTodosThunk = (): AppThunk => (dispatch) => {
  axios<TodoType[]>('/rooms')
    .then(({ rooms }) => dispatch(setRooms(rooms)))
    .catch(console.log);
};

// export const deleteTodoThunk =
//   (id: number): AppThunk =>
//   (dispatch) => {
//     axios
//       .delete(`/api/todos/${id}`)
//       .then(() => dispatch(deleteTodo(id)))
//       .catch(console.log);
//   };

// export const statusTodoThunk =
//   (id: number, status: boolean): AppThunk =>
//   (dispatch, getState) => {
//     axios
//       .patch<TodoType>(`/api/todos/${id}`, { status: !status })
//       .then(({ data }) => {
//         const updatedTodo = data;
//         const index = getState().todos.findIndex((todo) => todo.id === updatedTodo.id);
//         dispatch(statusTodo(updatedTodo));
//       })
//       .catch(console.log);
//   };

// export const addTodoThunk =
//   (inputs: TodoFormType): AppThunk =>
//   (dispatch) => {
//     axios
//       .post<TodoType>('/api/todos', inputs)
//       .then(({ data }) => dispatch(addTodo(data)))
//       .catch(console.log);
//   };

// export const editTodoThunk =
//   (id: number, inputs: TodoFormType): AppThunk =>
//   (dispatch) => {
//     axios
//       .patch<TodoType>(`/api/todos/${id}`, inputs)
//       .then(({ data }) => dispatch(editTodo(data)))
//       .catch(console.log);
//   };

export default roomsSlice.reducer;
