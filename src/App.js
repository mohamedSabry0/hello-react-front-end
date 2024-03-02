import './App.css';
import { Route, Routes } from 'react-router';
import Greeting from './components/Greeting';

function App() {
  return (
    <Routes>
      <Route index element={<Greeting />} />
    </Routes>
  );
}

export default App;
