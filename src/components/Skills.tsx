import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Langages de Programmation',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 80 },
        { name: 'C', level: 75 },
        { name: 'R', level: 70 },
        { name: 'Julia', level: 65 },
        { name: 'Prolog', level: 70 },
        { name: 'PHP', level: 75 }
      ]
    },
    {
      title: 'Intelligence Artificielle & Data Science',
      skills: [
        { name: 'Scikit-learn', level: 90 },
        { name: 'PyTorch', level: 70 },
        { name: 'XGBoost', level: 75 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'NLTK', level: 85 },
        { name: 'Spacy', level: 80 },
        { name: 'BeautifulSoup', level: 85 }
      ]
    },
    {
      title: 'Bases de Données & Outils',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'GitLab', level: 85 }
      ]
    },
    {
      title: 'Environnements & Plateformes',
      skills: [
        { name: 'Jupyter', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Anaconda', level: 85 },
        { name: 'Conda', level: 85 },
        { name: 'Google Cloud Platform', level: 75 },
        { name: 'API REST', level: 80 },
        { name: 'Django', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Un ensemble diversifié de compétences techniques acquises à travers des projets académiques et l'autoformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span className="mr-2">🚀</span>
            Toujours en apprentissage de nouvelles technologies !
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;