# Portfolio Dark - Site Portfolio Moderne

Un portfolio élégant et moderne avec une interface sombre, construit avec React et Vite.

## Caractéristiques

- Design moderne avec thème sombre
- Interface responsive (mobile, tablette, desktop)
- Animations fluides et transitions élégantes
- Navigation smooth scroll
- Sections complètes : Hero, À propos, Compétences, Projets, Contact
- Formulaire de contact fonctionnel
- Performance optimisée

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Outil de build rapide
- **CSS3** - Styles personnalisés avec variables CSS
- **Google Fonts** - Polices Inter et Poppins

## Installation

1. Cloner le repository ou utiliser le dossier existant

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir le navigateur à l'adresse affichée (généralement http://localhost:5173)

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production

## Structure du projet

```
portfolio-dark/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Fichiers CSS
│   │   └── index.css
│   ├── App.jsx          # Composant principal
│   └── main.jsx         # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## Personnalisation

### Modifier les informations personnelles

1. **Hero Section** (`src/components/Hero.jsx`)
   - Modifier le nom, titre et description
   - Ajuster les statistiques (années d'expérience, projets, etc.)

2. **About Section** (`src/components/About.jsx`)
   - Personnaliser la description et les points forts
   - Remplacer le placeholder d'image par votre photo

3. **Skills Section** (`src/components/Skills.jsx`)
   - Mettre à jour les compétences et niveaux
   - Ajouter ou supprimer des catégories

4. **Projects Section** (`src/components/Projects.jsx`)
   - Ajouter vos projets réels
   - Inclure des images, liens GitHub et démos

5. **Contact Section** (`src/components/Contact.jsx`)
   - Mettre à jour les informations de contact
   - Configurer le formulaire pour envoyer à votre email

6. **Footer** (`src/components/Footer.jsx`)
   - Modifier les liens de réseaux sociaux

### Personnaliser les couleurs

Les couleurs sont définies dans `src/styles/index.css` avec des variables CSS :

```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... */
}
```

## Déploiement

### Vercel (Recommandé)

```bash
npm run build
```

Puis déployer le dossier `dist` sur Vercel.

### Netlify

```bash
npm run build
```

Glisser-déposer le dossier `dist` sur Netlify.

### GitHub Pages

1. Installer gh-pages :
```bash
npm install --save-dev gh-pages
```

2. Ajouter dans `package.json` :
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Déployer :
```bash
npm run deploy
```

## Licence

Libre d'utilisation pour vos projets personnels.

## Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue.
