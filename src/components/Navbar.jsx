import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <img src="/logo_baptiste.png" alt="Logo" className="logo-image" />
          <span className="logo-text">Baptiste</span>
        </div>

        <div className={`navbar-menu ${menuOpen ? 'menu-open' : ''}`}>
          <a onClick={() => scrollToSection('home')} className="nav-link">Accueil</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">À propos</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Compétences</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projets</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
