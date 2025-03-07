
import React from 'react';
import { SarcasticResponse } from '@/utils/mockData';

interface HistoryProps {
  items: SarcasticResponse[];
  onItemClick: (prompt: string) => void;
}

const History: React.FC<HistoryProps> = ({ items, onItemClick }) => {
  if (items.length === 0) {
    return null;
  }

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return `${diffInMinutes} menit yang lalu`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} jam yang lalu`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return `${days} hari yang lalu`;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 mb-20">
      <h3 className="text-lg font-medium mb-6">Komentar Terbaru</h3>
      
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id}
            className="glass-panel rounded-lg p-4 hover:shadow-md transition-all duration-300 cursor-pointer group"
            onClick={() => onItemClick(item.prompt)}
          >
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium truncate max-w-[65%]">{item.prompt}</p>
              <span className="text-xs text-muted-foreground">{formatTime(item.timestamp)}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 group-hover:text-foreground transition-colors duration-200">
              {item.response}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
