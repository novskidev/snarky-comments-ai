
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import InputForm from '@/components/InputForm';
import ResponseDisplay from '@/components/ResponseDisplay';
import History from '@/components/History';
import { SarcasticResponse, mockHistory, generateMockResponse } from '@/utils/mockData';

const Index = () => {
  const [history, setHistory] = useState<SarcasticResponse[]>(mockHistory);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Animated background effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      
      document.documentElement.style.setProperty('--mouse-x', x.toString());
      document.documentElement.style.setProperty('--mouse-y', y.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (prompt: string) => {
    setCurrentPrompt(prompt);
    setIsLoading(true);
    setCurrentResponse(null);
    
    try {
      // In a real application, this would call your API
      const response = await generateMockResponse(prompt);
      
      setCurrentResponse(response);
      
      const newHistoryItem: SarcasticResponse = {
        id: Date.now().toString(),
        prompt,
        response,
        timestamp: new Date()
      };
      
      setHistory(prev => [newHistoryItem, ...prev]);
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHistoryItemClick = (prompt: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      handleSubmit(prompt);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl transform -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      </div>

      <Header />
      
      <main className="container px-4 md:px-6 max-w-6xl mx-auto mt-8 md:mt-12">
        <section className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full animate-pulse-subtle">
              AI Sarkastik
            </span>
          </div>
          <h1 className="heading-xl mb-4 max-w-3xl mx-auto">
            Dapatkan Komentar Nyinyir <span className="text-accent">Instan</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Aplikasi AI yang memberikan komentar sarkastik untuk apapun. Cocok untuk seru-seruan dengan teman.
          </p>
        </section>
        
        <section className="animate-slide-up mb-6">
          <InputForm onSubmit={handleSubmit} isLoading={isLoading} />
        </section>
        
        <section>
          <ResponseDisplay 
            response={currentResponse} 
            prompt={currentPrompt} 
            isLoading={isLoading} 
          />
        </section>
        
        <section>
          <History items={history} onItemClick={handleHistoryItemClick} />
        </section>
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Tukang Nyinyir AI. Made with <span className="text-accent">♥</span></p>
      </footer>
    </div>
  );
};

export default Index;
