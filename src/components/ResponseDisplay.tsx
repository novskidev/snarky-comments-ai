
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ClipboardCopy, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ResponseDisplayProps {
  response: string | null;
  prompt: string | null;
  isLoading: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, prompt, isLoading }) => {
  const [copied, setCopied] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const copyToClipboard = () => {
    if (response) {
      navigator.clipboard.writeText(response);
      setCopied(true);
      toast({
        title: "Disalin!",
        description: "Komentar nyinyir sudah ada di clipboard kamu."
      });
    }
  };

  const shareResponse = () => {
    if (response) {
      if (navigator.share) {
        navigator.share({
          title: 'Komentar Nyinyir dari AI',
          text: `${response}\n\n- Tukang Nyinyir AI`,
        }).catch(console.error);
      } else {
        copyToClipboard();
        toast({
          title: "Share tidak tersedia",
          description: "Tapi komentar sudah dicopy ke clipboard kamu."
        });
      }
    }
  };

  // Empty state when no response
  if (!response && !isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-8 glass-panel rounded-xl p-8 text-center animate-fade-in min-h-[200px] flex flex-col items-center justify-center">
        <div className="text-5xl mb-4 opacity-50">🤨</div>
        <h3 className="text-lg font-medium text-muted-foreground">Komentar nyinyir akan muncul di sini</h3>
        <p className="text-sm text-muted-foreground mt-2">Tuliskan sesuatu dan saya akan memberikan komentar sarkastik</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div 
        ref={responseRef}
        className={`glass-panel rounded-xl p-8 ${
          isLoading ? 'animate-pulse' : 'animate-fade-in'
        }`}
      >
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4 py-8">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            <p className="text-muted-foreground">Sedang memikirkan komentar sarkastik...</p>
          </div>
        ) : (
          <>
            {prompt && (
              <div className="mb-4">
                <span className="inline-block px-2.5 py-1 rounded-full bg-secondary/50 text-xs text-muted-foreground">
                  {prompt.length > 60 ? prompt.substring(0, 57) + '...' : prompt}
                </span>
              </div>
            )}
            
            <div className="relative">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed">
                "{response}"
              </blockquote>
              <div className="absolute -left-3 -top-3 text-accent opacity-20 text-6xl">"</div>
              <div className="absolute -right-3 -bottom-3 text-accent opacity-20 text-6xl">"</div>
            </div>
            
            <div className="mt-8 flex justify-end space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyToClipboard}
                className="group"
              >
                <ClipboardCopy className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                {copied ? 'Disalin!' : 'Salin'}
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={shareResponse}
                className="group"
              >
                <Share2 className="w-4 h-4 mr-2 group-hover:text-accent transition-colors" />
                Bagikan
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;
