import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Étudiant en Intelligence Artificielle';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-900/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Bonjour, je suis
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Belamri Arab
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-8 flex items-center justify-center">
            <span className="font-mono">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionné par l'intelligence artificielle et les technologies émergentes, 
            je prépare un Master IA à l'Université du Mans pour façonner l'avenir numérique.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Me Contacter
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Voir mes Projets
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/Arabbelamri"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/arab-belamri-908a19218/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a
            href="mailto:arabbelamri46@exemple.com"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce hover:animate-none transition-all duration-300"
        >
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;