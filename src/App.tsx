import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container} from 'react-bootstrap';
import MainPage from './MainPage';
import MyNavBar from './MyNavbar';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import RoomsPage from './RoomsPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  
  return (
    <Container>
      <MyNavBar />
     
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:id" element={<DevPage />} />
        </Routes>
    </Container>
  );
}

export default App;
