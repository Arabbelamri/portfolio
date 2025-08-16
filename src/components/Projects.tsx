import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const projects = [
    {
      title: "Enrichissement corpus YALLI (Stage LIA)",
      description: "Participation au projet NAHU2 pour l'enrichissement du corpus linguistique nahuatl. Extraction, nettoyage et structuration automatique de textes en nahuatl issus de Wikipédia et Wiktionnaire. Mise en œuvre d'algorithmes pour le traitement de données textuelles non structurées. Application de techniques NLP sur une langue à faibles ressources.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLP", "NLTK", "BeautifulSoup", "Pandas"],
      category: ["IA"," Stage"],
      date: "Mai 2025",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Analyse des commentaires Amazon",
      description: "Clustering des commentaires avec K-Means pour déterminer leur polarité et identification des avis négatifs afin d'améliorer la satisfaction client. Prétraitement des données textuelles, extraction de features, et visualisation des résultats pour une analyse approfondie du sentiment client.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "K-Means", "Pandas", "Scikit-learn", "Matplotlib"],
      category: "Data Science",
      date: "2024",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Détection des fake news",
      description: "Traitement de données textuelles avec NLTK : prétraitement, vectorisation, extraction de statistiques, modélisation et classification pour la détection automatique de fausses nouvelles. Implémentation de plusieurs algorithmes de machine learning pour comparer les performances et optimiser la précision de détection.",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Classification"],
      category: "IA",
      date: "2024",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Système de gestion de file d'attente (Stage NAFTAL)",
      description: "Développement d'un système de gestion de file d'attente pour un dépôt de carburants à l'aide de Django. Interface web intuitive pour la gestion des véhicules, système de tickets automatisé, et tableau de bord administrateur pour le suivi en temps réel des opérations.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      category: ["Web"," Stage"],
      date: "2023",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Détection d'entités nommées",
      description: "Projet de reconnaissance d'entités nommées (NER) utilisant des techniques de traitement du langage naturel. Identification et classification automatique d'entités comme les personnes, lieux, organisations dans des textes. Implémentation avec spaCy et évaluation des performances sur différents corpus.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "spaCy", "NLTK", "NER", "Machine Learning"],
      category: "IA",
      date: "2024",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Analyse du dataset Titanic",
      description: "Projet classique de data science sur le dataset Titanic de Kaggle. Analyse exploratoire des données, feature engineering, et prédiction de survie des passagers. Comparaison de plusieurs algorithmes de classification et optimisation des hyperparamètres pour maximiser la précision.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
      category: "Data Science",
      date: "2023",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    },
    {
      title: "Watch and Learn",
      description: "Application web collaborative inspirée de Watch2gether permettant de regarder des vidéos éducatives en groupe. Synchronisation en temps réel, chat intégré, système de salles privées/publiques, et fonctionnalités d'apprentissage collaboratif. Interface moderne et responsive pour une expérience utilisateur optimale.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Web",
      date: "2024",
      github: "https://github.com/Arabbelamri",
      demo: "#"
    }
  ];

  const categories = ['Tous', 'IA', 'Data Science', 'Web',' Stage'];

useEffect(() => {
  if (selectedCategory === 'Tous') {
    setFilteredProjects(projects);
  } else {
    setFilteredProjects(
      projects.filter(project =>
        Array.isArray(project.category)
          ? project.category.includes(selectedCategory)
          : project.category === selectedCategory
      )
    );
  }
}, [selectedCategory]);


  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une sélection de projets académiques et personnels démontrant mes compétences en IA, Data Science et développement web
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <a
                        href={project.demo}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.category === 'IA' 
                      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                      : project.category === 'Web'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {project.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le projet
                  </a>
                  <a
                    href={project.github}
                    className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span className="mr-2">🚀</span>
            Plus de projets disponibles sur mon GitHub !
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;