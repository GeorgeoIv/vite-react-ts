import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
// import AdminPage from './AdminPage';
// import AuthPage from './AuthPage';
// import FavoritesPage from './FavoritesPage';
// import ProtectedRoute from './hocs/ProtectedRoute';
// import MainPage from './MainPage';
import MyNavBar from './MyNavbar';
import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { checkAuthThunk } from './redux/slices/userSlice';
import RoomsPage from './RoomsPage';

function App(): JSX.Element {
  // const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(checkAuthThunk());
  // }, []);
  
  return (
    <Container>
      <MyNavBar />
     
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}

          
            <Route path="/rooms" element={<RoomsPage />} />
            {/* <Route path="/admin" element={<AdminPage />} />
            <Route path="/favorites" element={<FavoritesPage />} /> */}

          

        </Routes>
    </Container>
  );
}

export default App;
