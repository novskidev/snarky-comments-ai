
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-6 md:px-8">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center animate-pulse-subtle">
              <span className="text-white text-xl font-bold">🤨</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-accent"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold">Tukang Nyinyir AI</h1>
            <p className="text-xs text-muted-foreground">Komentar sarkastik, instantly.</p>
          </div>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors duration-200">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-medium hover:text-accent transition-colors duration-200">
                Tentang
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
