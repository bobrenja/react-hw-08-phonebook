import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterForm from 'modules/RegisterForm/RegisterForm';
import DefaultPage from 'pages/DefaultPage/DefaultPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<DefaultPage />} />
    </Routes>
  );
};

export default UserRoutes;
