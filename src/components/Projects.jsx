import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      image: '🛍️',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Tableau de bord interactif pour visualiser et analyser des données en temps réel.',
      image: '📊',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'API REST',
      description: 'API RESTful sécurisée avec authentification JWT et documentation Swagger.',
      image: '🔌',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Application de gestion de tâches collaborative avec système de notifications.',
      image: '✅',
      category: 'fullstack',
      technologies: ['Next.js', 'Prisma', 'tRPC', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Portfolio Designer',
      description: 'Site portfolio moderne et responsive avec animations fluides.',
      image: '🎨',
      category: 'frontend',
      technologies: ['React', 'Framer Motion', 'CSS', 'Vite'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Application de messagerie instantanée avec WebSocket et conversations en temps réel.',
      image: '💬',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mes Projets</h2>
        <p className="projects-intro">
          Une sélection de mes réalisations récentes
        </p>

        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'filter-active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.link} className="project-link">
                    <span>Voir le projet</span>
                    <span className="link-arrow">→</span>
                  </a>
                  <a href={project.github} className="project-link project-link-secondary">
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
