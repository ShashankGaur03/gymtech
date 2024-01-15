import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AddGym from './Components/AddGym';
import { GymState } from './Contexts/GymContext';

function App() {
  return (
    <GymState>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/addgym' element={<AddGym />} />
    </Routes>
    </GymState>
  );
}

export default App;
