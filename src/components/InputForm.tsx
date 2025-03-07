
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { mockPromptSuggestions } from '@/utils/mockData';

interface InputFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [prompt]);

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div 
          className={`relative rounded-xl transition-all duration-300 ${
            isFocused 
              ? 'shadow-lg ring-2 ring-accent/20' 
              : 'shadow'
          }`}
        >
          <textarea
            ref={textareaRef}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Minta komen nyinyir tentang apa saja..."
            className="w-full p-4 rounded-xl resize-none min-h-[120px] glass-input focus:outline-none"
            rows={3}
          />
          
          <Button 
            type="submit" 
            disabled={!prompt.trim() || isLoading}
            className="absolute bottom-4 right-4 rounded-lg transition-all duration-300"
            size="sm"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Berpikir...</span>
              </div>
            ) : (
              <span>Nyinyirin!</span>
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-6">
        <p className="text-sm text-muted-foreground mb-3">Butuh inspirasi?</p>
        <div className="flex flex-wrap gap-2">
          {mockPromptSuggestions.slice(0, 4).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputForm;
