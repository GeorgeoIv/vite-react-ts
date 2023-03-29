import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { getDevicesByIdThunkAction } from './redux/slice/roomsSlice';
import type { DevType } from './types';
import DevCard from './DevCard';

export default function DevPage(): JSX.Element {
 const {id} = useParams();
 const devices = useAppSelector((state) => state.roomsSlice.devices);
 
 const allRoomsID = useAppSelector((state) => state.roomsSlice.rooms.map((el) => el.id));

  return (
    <div>
      {' '}
      {devices?.map((el: DevType) => (
        <DevCard key={el.id} results={el} />
      ))}
    </div>
  );
}