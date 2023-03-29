import React, { useEffect } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getTodosThunk } from './redux/slices/roomsSlice';
// import OneTodo from './OneTodo';
// import TodosForm from './TodosForm';

export default function RoomsPage(): JSX.Element {
  const rooms = useAppSelector((store) => store.rooms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);
  return (
    <Row>
      <Col xs={8}>
        <ListGroup>
          {rooms.map((room) => (
            <div> 123 {room.id} </div>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}
