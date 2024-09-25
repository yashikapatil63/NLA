import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fontsource/sora';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/ContactUs'

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
