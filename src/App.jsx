import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CondominiumForm from './components/condominum-info/CondominiumForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/condominium" element={<CondominiumForm />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
