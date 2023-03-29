import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import type { DevType } from './types';
import { changeStatusByDeviceThunkAction } from './redux/slice/roomsSlice';

type RespType = {
  results: DevType;
};

export default function DevCard({ res }: ResponseType): JSX.Element {
  const rooms1 = useAppSelector((state) => state.roomsSlice.id);
  const dispatch = useAppDispatch();

  return (
    <Card className="m-3">
      <p>img</p>
      <Button className="btn btn-warning ">
      {data}
      </Button>
    </Card>
  );
}