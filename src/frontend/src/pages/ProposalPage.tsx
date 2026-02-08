import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import ConfettiBurst from '@/components/ConfettiBurst';
import { useEvasiveButton } from '@/hooks/useEvasiveButton';

interface ProposalPageProps {
  onContinue: () => void;
}

export default function ProposalPage({ onContinue }: ProposalPageProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [answered, setAnswered] = useState(false);

  const {
    position,
    message,
    scale,
    handlePointerMove,
    handlePointerEnter,
    handleTouchStart,
    handleClick: handleNoClick,
  } = useEvasiveButton();

  const handleYesClick = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-romantic-lighter via-romantic-light to-white overflow-hidden pb-32">
      <FloatingHearts />
      {showConfetti && <ConfettiBurst />}
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold text-romantic-dark mb-8 animate-pulse-slow font-cursive leading-tight">
          Ayesha, Will You Be My Valentine?
        </h2>
        
        {!answered ? (
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center relative min-h-[200px]">
            <Button
              onClick={handleYesClick}
              size="lg"
              className="text-3xl px-20 py-10 bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-2xl hover:shadow-romantic-accent/50 transition-all duration-300 hover:scale-110 min-w-[200px] z-20"
            >
              Yes ❤️
            </Button>

            <div 
              className="relative"
              onPointerMove={handlePointerMove}
              onPointerEnter={handlePointerEnter}
              onTouchStart={handleTouchStart}
              style={{ width: '200px', height: '100px' }}
            >
              <Button
                onClick={handleNoClick}
                size="lg"
                variant="outline"
                className="absolute text-3xl px-20 py-10 border-4 border-romantic-medium/30 text-romantic-medium hover:bg-romantic-light/50 font-bold rounded-full shadow-lg transition-all duration-200 min-w-[200px] whitespace-nowrap"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  transform: `scale(${scale})`,
                  transition: 'left 0.3s ease-out, top 0.3s ease-out, transform 0.3s ease-out',
                }}
              >
                {message || 'No 🙈'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in">
            <div className="flex justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-12 h-12 text-romantic-accent animate-bounce"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <p className="text-3xl md:text-4xl text-romantic-dark font-bold mb-8">
              You just made Abubakar the happiest person alive ❤️
            </p>

            <Button
              onClick={onContinue}
              size="lg"
              className="text-xl px-12 py-6 bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-xl hover:shadow-romantic-accent/50 transition-all hover:scale-105"
            >
              Continue ✨
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
