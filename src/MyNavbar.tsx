import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { logoutThunk } from './redux/slices/userSlice';
import RoomsPage from './RoomsPage';
import { getTodosThunk } from './redux/slices/roomsSlice';

function MyNavBar(): JSX.Element {
  // const user = useAppSelector((store) => store.user)

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = (): void => setIsOpen(!isOpen);

  //const links = ['todos', 'admin','favorites',]
  const rooms = useAppSelector((store) => store.rooms);
  console.log(rooms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);
  // const logoutHandler = (): void => {
  //   dispatch(logoutThunk())
  // }

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/rooms">Home</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        {/* <NavbarBrand href="/rooms">Rooms</NavbarBrand> */}
        <Nav className="me-auto" navbar>
          {rooms.map((room) => (
            <NavItem key={room.id}>
              <NavLink to={`/rooms/${room.id}`}>{room.room}</NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
