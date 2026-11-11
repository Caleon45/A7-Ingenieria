import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-section, .animate-left, .animate-right, .animate-card');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};