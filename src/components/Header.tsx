import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Me</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition">About</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-blue-600 transition">Contact</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
