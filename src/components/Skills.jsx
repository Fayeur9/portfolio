import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Science & IA',
      icon: '🤖',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 80 },
        { name: 'PyTorch', level: 75 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 85 }
      ]
    },
    {
      title: 'Analyse & Visualisation',
      icon: '📊',
      skills: [
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 80 },
        { name: 'Plotly', level: 75 },
        { name: 'Power BI', level: 70 },
        { name: 'SQL', level: 85 },
        { name: 'Excel', level: 80 }
      ]
    },
    {
      title: 'Développement & Outils',
      icon: '💻',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'React', level: 75 },
        { name: 'FastAPI', level: 70 },
        { name: 'Jupyter', level: 90 },
        { name: 'Linux', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Compétences</h2>
        <p className="skills-intro">
          Technologies et outils que je maîtrise en Data Science et IA
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-additional">
          <h3 className="additional-title">Autres compétences</h3>
          <div className="tags-container">
            <span className="skill-tag">Machine Learning</span>
            <span className="skill-tag">Deep Learning</span>
            <span className="skill-tag">NLP</span>
            <span className="skill-tag">Computer Vision</span>
            <span className="skill-tag">Big Data</span>
            <span className="skill-tag">Statistics</span>
            <span className="skill-tag">Data Mining</span>
            <span className="skill-tag">MLOps</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
