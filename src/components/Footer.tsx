import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Étudiant passionné en Intelligence Artificielle, prêt à relever les défis technologiques de demain.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Portfolio. Tous droits réservés.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>et</span>
                <Code className="w-4 h-4 text-blue-400" />
                <span>alimenté par</span>
                <Coffee className="w-4 h-4 text-yellow-600" />
              </div>
              
              <div className="text-gray-400 text-sm">
                <span>Université du Mans • Master IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;