
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Check for user preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (prefersDark) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="w-full py-6 px-6 md:px-8">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
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
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/' 
                      ? 'text-accent'
                      : 'hover:text-accent'
                  }`}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === '/about' 
                      ? 'text-accent'
                      : 'hover:text-accent'
                  }`}
                >
                  Tentang
                </Link>
              </li>
            </ul>
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
