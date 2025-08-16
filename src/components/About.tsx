import React from 'react';
import { Brain, Code, Rocket, Users } from 'lucide-react';
import profilePhoto from '../assets/photo.jpg'; // Chemin vers ta photo

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Intelligence Artificielle',
      description: 'Passionné par le machine learning, deep learning et les algorithmes intelligents'
    },
    {
      icon: Code,
      title: 'Développement',
      description: 'Maîtrise de plusieurs langages et frameworks pour créer des solutions innovantes'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Toujours à la recherche des dernières technologies et tendances tech'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Excellent travail en équipe et communication avec les parties prenantes'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À Propos de Moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Photo de profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Futur Ingénieur en Intelligence Artificielle
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Étudiant passionné en informatique, je me spécialise dans l'intelligence artificielle 
              et les technologies émergentes. Actuellement en préparation d'un Master IA à 
              l'Université du Mans, je développe mes compétences en machine learning, 
              deep learning et data science.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Mon objectif est de contribuer à l'innovation technologique en créant des solutions 
              IA qui résolvent des problèmes réels et améliorent la vie des utilisateurs. 
              Je suis toujours prêt à relever de nouveaux défis et à apprendre de nouvelles technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
