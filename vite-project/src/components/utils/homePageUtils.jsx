/**
 * Fonction pour récupérer les dernières actualités depuis une API.
 * @param {function} setNews - Fonction pour mettre à jour les actualités dans le state.
 */
export const updateNews = (setNews) => {
  // Exemple de données d'actualités à mettre à jour
  const newNews = [
    {
      category: 'INTERVIEW',
      title: 'Nouvelle Interview',
      description: 'Description de la nouvelle interview...',
      image: './assets/Images/img8.jpg'
    },
    {
      category: 'DIVERTISSEMENT',
      title: 'Nouveau Spectacle',
      description: 'Description du nouveau spectacle...',
      image: 'path-to-new-news2.jpg'
    },
    // Ajoutez d'autres actualités ici
  ];

  // Mettre à jour le state avec les nouvelles actualités
  setNews(newNews);
};

/**
 * Fonction pour initialiser les mises à jour périodiques des actualités.
 * @param {function} setNews - Fonction pour mettre à jour les actualités dans le state.
 * @returns {function} - Fonction de nettoyage pour arrêter les mises à jour périodiques.
 */
export const initializeNewsUpdates = (setNews) => {
  const interval = setInterval(() => updateNews(setNews), 60000); // Mise à jour toutes les minutes
  return () => clearInterval(interval);
};
