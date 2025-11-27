import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              Développeur passionné par la création d'expériences web modernes et performantes.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">Accueil</a>
              <a href="#about" className="footer-link">À propos</a>
              <a href="#skills" className="footer-link">Compétences</a>
              <a href="#projects" className="footer-link">Projets</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Réseaux sociaux</h4>
            <div className="footer-social">
              <a href="https://github.com/Fayeur9" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-github">GitHub</i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-linkedin">LinkedIn</i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="icon-twitter">Twitter</i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Portfolio Freminet Baptiste. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
