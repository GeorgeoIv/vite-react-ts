import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { DevType, TodoType } from '../../types/TodosTypes';
import type { AppThunk } from '../hooks';

const initialState: {
  rooms: TodoType[];
  devices: DevType[];
  currentIdRoomDevices: TodoType['id']} = 
  {rooms: [],
  devices: [],
  currentIdRoomDevices: 0
};

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    setRooms: (state, action: PayloadAction<TodoType[]>) => {state.rooms = action.payload},
  },
});

export const { setRooms, setDevices } = roomsSlice.actions;

export const getTodosThunk = (): AppThunk => (dispatch) => {
  axios<TodoType[]>('/rooms')
    .then(({ data }) => dispatch(setRooms(data)))
    .catch(console.log);
};


export const getDevicesByIdThunkAction =
  (id: TodoType['id']): AppThunk =>
  (dispatch) => {
    axios<{devices: DevType[]}>(`/rooms/${id}`)
      .then(({ data }) => dispatch(setDevices(data)))
      .catch(console.log);
  };


export default roomsSlice.reducer;
