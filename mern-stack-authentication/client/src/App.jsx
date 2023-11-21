import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import axiosInstance from '../api/interceptor';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

const Home = () => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/');
        console.log(response)
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export default App
