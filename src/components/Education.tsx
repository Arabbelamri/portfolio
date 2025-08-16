import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      period: '2025 - 2027',
      degree: 'Master Informatique – Parcours Intelligence Artificielle',
      institution: 'Le Mans Université',
      location: 'Le Mans, France',
      status: 'En cours',
      description: 'Spécialisation en IA : Machine Learning, Data Science, NLP, Vision par Ordinateur.',
      highlights: [
        'Machine Learning & Deep Learning',
        'Traitement du langage naturel (NLP)',
        'MLOps & déploiement IA'
      ]
    },
    {
      period: '2023 - 2025',
      degree: 'Licence Informatique',
      institution: 'Université d’Avignon et des Pays de Vaucluse',
      location: 'Avignon, France',
      status: 'Diplômé',
      description: 'Formation avancée en IA, Data Science, et NLP avec applications sur langues à faibles ressources.',
      highlights: [
  'Programmation en Python, Java, C, PHP, JavaScript',
  'IA symbolique avec Prolog',
  'Analyse de données et Data Science',
  'Gestion de bases de données : MySQL, PostgreSQL, MongoDB',
  'Développement Web full-stack avec React et Node.js',
  'Traitement du langage naturel (NLP)',
  'Programmation scientifique avec Julia et R'
]

    },
    {
      period: '2020 - 2023',
      degree: 'Licence Informatique',
      institution: 'Université des Sciences et de la Technologie Houari Boumedienne',
      location: 'Alger, Algérie',
      status: 'Diplômé',
      description: 'Bases solides en programmation, algorithmes, structures de données et développement logiciel.',
      highlights: [
        'Programmation Python, Java, C',
        'Bases de données MySQL, PostgreSQL',
        'Développement Web & API Rest'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Spécialisation en Machine Learning',
      issuer: 'Stanford University / DeepLearning.AI',
      year: 'En cours',
      icon: '🧠'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Formation & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mon parcours académique et mes certifications en lien avec l’Intelligence Artificielle et la Data Science
          </p>
        </div>

        {/* Parcours académique */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Parcours Académique
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 ml-16">
                <div className="absolute -left-12 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>

                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                        {item.period}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === 'En cours'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h4>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-2">{item.institution}</span>
                    <span>• {item.location}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <span
                        key={highlightIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
