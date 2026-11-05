import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { InMemory, InShadow } from './pages/Series';
import About from './pages/About';
import Contact from './pages/Contact';
import './site.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

// If <BrowserRouter> is already in your main.jsx, remove it from here.
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <nav className="site-nav" aria-label="Main">
        <Link className="brand" to="/">
          <img src="/images/optimized/logo.webp" alt="" />Riley Galpin
        </Link>
        <ul>
          <li><NavLink to="/in-memory">In Memory</NavLink></li>
          <li><NavLink to="/in-shadow">In Shadow</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/in-memory" element={<InMemory />} />
        <Route path="/in-shadow" element={<InShadow />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}