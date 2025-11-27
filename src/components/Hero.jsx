import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fadeInUp">
            <span className="badge-text">👋 Bienvenue sur mon portfolio</span>
          </div>

          <h1 className="hero-title animate-fadeInUp" style={{animationDelay: '0.1s'}}>
            Salut, je suis <span className="gradient-text">Baptiste</span>
          </h1>

          <h2 className="hero-subtitle animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Étudiant en Master 1 Data & IA
          </h2>

          <p className="hero-description animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            Passionné par la Data Science et l'Intelligence Artificielle, je développe des solutions innovantes
            en combinant analyse de données, machine learning et développement web.
          </p>

          <div className="hero-buttons animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <a href="#projects" className="btn-primary">
              Voir mes projets
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>

          <div className="hero-stats animate-fadeInUp" style={{animationDelay: '0.5s'}}>
            <div className="stat-item">
              <div className="stat-number">22</div>
              <div className="stat-label">Ans</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">M1</div>
              <div className="stat-label">Data & IA</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Motivation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
