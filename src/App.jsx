
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/header/Header';

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<h1> Page Not Found </h1>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
