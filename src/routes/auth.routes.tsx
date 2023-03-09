import { Route, Routes } from 'react-router-dom';
import Login from '../views/Login';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;
