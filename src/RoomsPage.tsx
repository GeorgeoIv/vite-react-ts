import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import type { TodosTypes } from './types';

export default function RoomsPage(): JSX.Element {
  const rooms = useAppSelector((state) => state.roomSlice.rooms);
  const dispatch = useAppDispatch();
  };
  return (
    <div>
      {rooms?.map((room) => (
        <Row>
          <p>
            {room.id}
          </p>
        </Row>
      ))}
    </div>
  );
}
