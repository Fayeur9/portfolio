import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <span className="">
                  <img src="/logo_baptiste.png" alt="" />
                </span>
              </div>
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">Étudiant passionné par la Data & l'IA</h3>
            <p className="about-paragraph">
              Actuellement en Master 1 Data & Intelligence Artificielle, j'ai 22 ans et je me passionne pour
              l'exploration des données et le développement de modèles d'IA. Mon parcours me permet d'allier
              rigueur mathématique, compétences en programmation et créativité pour résoudre des problèmes complexes.
            </p>
            <p className="about-paragraph">
              Je m'intéresse particulièrement au Machine Learning, au Deep Learning et à la visualisation de données.
              Mon objectif est de contribuer à des projets innovants où l'IA apporte une réelle valeur ajoutée.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <div className="highlight-content">
                  <h4 className="highlight-title">Machine Learning</h4>
                  <p className="highlight-text">Développement et optimisation de modèles prédictifs</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">📊</div>
                <div className="highlight-content">
                  <h4 className="highlight-title">Data Science</h4>
                  <p className="highlight-text">Analyse et visualisation de données complexes</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🧠</div>
                <div className="highlight-content">
                  <h4 className="highlight-title">Deep Learning</h4>
                  <p className="highlight-text">Réseaux de neurones et intelligence artificielle avancée</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn-primary">Travaillons ensemble</a>
              <a href="#projects" className="btn-secondary">Voir mes réalisations</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
