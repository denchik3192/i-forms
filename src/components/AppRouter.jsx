import { Route, Routes } from 'react-router';
import App from '../App';
import Main from '../pages/main';
import NewForm from '../pages/new-form';
import Auth from '../pages/auth';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new-form" element={<NewForm />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRouter;
