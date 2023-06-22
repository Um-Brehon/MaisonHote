import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './components/Home/home';
import './reset.css';
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/nearby" element={<Nearby />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
