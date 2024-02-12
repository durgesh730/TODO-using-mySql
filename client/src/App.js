import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddTask from './component/AddTask';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
