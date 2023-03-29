// import React, { useEffect } from 'react';
// import { ListGroup, Row, Col } from 'reactstrap';
// import { useTodoContext } from '../contexts/TodosContext';
// import { useAppDispatch, useAppSelector } from '../redux/hooks';
// import { getTodosThunk } from '../redux/slices/todosSlice';
// import OneTodo from './OneTodo';
// import TodosForm from './TodosForm';


// export default function MainPage(): JSX.Element {
//   const todos = useAppSelector((store) => store.todos);
//   const dispatch = useAppDispatch();
//   useEffect(() => {
//     dispatch(getTodosThunk());
//   }, []);
//   return (
//     <Row>
//       <Col xs={8}>
//         <TodosForm />
//         <ListGroup>
//           {todos.map((todo) => (
//             <OneTodo key={todo.id} todo={todo} />
//           ))}
//         </ListGroup>
//       </Col>
//     </Row>
//   );
// }

import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
}
