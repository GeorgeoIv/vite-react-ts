import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import RoomsPage from './RoomsPage';
import { getTodosThunk } from './redux/slices/roomsSlice';

function MyNavBar(): JSX.Element {

  const rooms = useAppSelector((store) => store.rooms);
  console.log(rooms);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosThunk());
  }, []);
 

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/rooms">Home</NavbarBrand>
       
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
