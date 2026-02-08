import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface ReasonCardProps {
  reason: string;
  index: number;
}

export default function ReasonCard({ reason, index }: ReasonCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleInteraction = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 1000);
    }
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 1000);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className="reason-card-container h-64 cursor-pointer perspective relative"
      onClick={handleInteraction}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Floating hearts animation on interaction */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-romantic-accent animate-heart-float"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '50%',
                animationDelay: `${i * 0.1}s`,
                fontSize: `${16 + Math.random() * 8}px`,
              }}
              fill="currentColor"
            />
          ))}
        </div>
      )}

      <div className={`reason-card relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <Card className="absolute w-full h-full backface-hidden bg-gradient-to-br from-romantic-accent to-romantic-accent-dark border-none shadow-xl">
          <CardContent className="flex items-center justify-center h-full p-6">
            <Heart className="w-16 h-16 text-white animate-pulse-subtle" fill="currentColor" />
          </CardContent>
        </Card>
        
        {/* Back */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-romantic-accent/30 shadow-xl hover:shadow-2xl hover:shadow-romantic-accent/20 transition-shadow">
          <CardContent className="flex items-center justify-center h-full p-6">
            <p className="text-lg md:text-xl text-romantic-dark font-medium text-center leading-relaxed">
              {reason}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
