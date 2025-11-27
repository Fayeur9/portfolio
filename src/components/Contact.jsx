import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'baptiste.freminet@gmail.com',
      link: 'mailto:baptiste.freminet@gmail.com'
    },
    {
      icon: '📱',
      title: 'Téléphone',
      value: '+33 7 87 77 77 79',
      link: 'tel:+33787777779'
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'France',
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Fayeur9', icon: '💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'Twitter', url: 'https://x.com', icon: '🐦' },
    { name: 'Discord', url: '#', icon: '💬' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        <p className="contact-intro">
          Une idée de projet ? N'hésitez pas à me contacter !
        </p>

        <div className="contact-content">
          <div className="contact-info-section">
            <h3 className="contact-subtitle">Restons en contact</h3>
            <p className="contact-text">
              Je suis toujours ouvert à discuter de nouveaux projets, d'opportunités créatives
              ou simplement pour échanger autour du développement web.
            </p>

            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-info-item">
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-content">
                    <div className="info-title">{item.title}</div>
                    <div className="info-value">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4 className="social-title">Retrouvez-moi sur</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Jean Dupont"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="jean.dupont@exemple.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                required
                placeholder="Collaboration / Projet / Question"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                required
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={`btn-primary form-submit ${status === 'sending' ? 'btn-loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi en cours...' : status === 'success' ? 'Message envoyé !' : 'Envoyer le message'}
              {status !== 'sending' && status !== 'success' && <span className="btn-arrow">→</span>}
            </button>

            {status === 'success' && (
              <div className="form-success">
                Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
