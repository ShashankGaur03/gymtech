import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import AddGym from './Components/AddGym';
import { GymState } from './Contexts/GymContext';
import Gyms from './Components/Gyms';
import SetContexts from './Components/SetContexts';

function App() {
  return (
    <GymState>
    <SetContexts />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/addgym' element={<AddGym />} />
      <Route path='/gyms/:city' element={<Gyms />} />
    </Routes>
    </GymState>
  );
}

export default App;
