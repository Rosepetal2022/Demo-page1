
import Home from './components/pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SecondFooter from './components/SecondFooter';
import Contact from './components/pages/Contact';
import Sales from './components/pages/Sales';
import About from './components/pages/About';
import Facility from './components/pages/Facility';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/About" element={<About />} />
        <Route path="/Facility" element={<Facility />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <SecondFooter />
      <Footer />
    </Router>

  );
}

export default App;
