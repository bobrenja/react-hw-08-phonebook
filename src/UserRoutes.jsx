import { Routes, Route } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import DefaultPage from 'pages/DefaultPage/DefaultPage';
import HomePage from 'pages/HomePage/HomePage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<DefaultPage />} />
    </Routes>
  );
};

export default UserRoutes;
