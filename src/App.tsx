import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Items from './pages/Items';
import Login from './pages/Login';
import Orders from './pages/Orders';
import SignUp from './pages/SignUp';
import SingleItem from './pages/SingleItem';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Navigate to='/items' />} />
        <Route path='/items' element={<Items />} />
        <Route path='/items/:name' element={<SingleItem />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
