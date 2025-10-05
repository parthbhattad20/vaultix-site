import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Security from './pages/Security'; // New import
import Industries from './pages/Industries'; // New import

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/security" element={<Security />} /> {/* New Route */}
            <Route path="/industries" element={<Industries />} /> {/* New Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

