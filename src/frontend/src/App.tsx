import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEvasiveButton } from './hooks/useEvasiveButton';
import { Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const {
    containerRef,
    buttonRef,
    position,
    handleMouseEnter,
    handlePointerDown,
    handleTouchStart,
  } = useEvasiveButton();

  const handleYesClick = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-lighter to-white p-4 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-romantic-accent animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
              fill="currentColor"
            />
          ))}
        </div>

        <Card className="max-w-2xl w-full bg-white/95 backdrop-blur-sm shadow-2xl border-romantic-accent/20 relative z-10">
          <CardContent className="p-8 md:p-12 text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Sparkles className="w-16 h-16 text-romantic-accent animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-romantic-dark mb-6 font-serif">
              Perfect Choice! 💕
            </h1>
            
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-romantic-accent/30 max-w-md mx-auto">
              <img
                src="/assets/generated/good-choice-meme.dim_800x800.png"
                alt="Good choice meme"
                className="w-full h-auto"
              />
            </div>
            
            <p className="text-xl md:text-2xl text-romantic-medium font-medium mt-6">
              I knew you'd say yes! ❤️
            </p>
            
            <div className="flex justify-center gap-2 mt-4">
              <Heart className="w-6 h-6 text-romantic-accent animate-pulse" fill="currentColor" />
              <Heart className="w-6 h-6 text-romantic-accent animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-6 h-6 text-romantic-accent animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-light via-romantic-lighter to-white p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-romantic-accent/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              fontSize: `${30 + Math.random() * 40}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <Card className="max-w-2xl w-full bg-white/95 backdrop-blur-sm shadow-2xl border-romantic-accent/20 relative z-10">
        <CardContent className="p-8 md:p-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-romantic-accent animate-heartbeat" fill="currentColor" />
              <Sparkles className="w-8 h-8 text-romantic-accent absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-romantic-dark mb-4 font-serif leading-tight">
            Will you be my Valentine?
          </h1>
          
          <p className="text-lg md:text-xl text-romantic-medium mb-12 font-light">
            Choose wisely... 💖
          </p>

          <div
            ref={containerRef}
            className="relative min-h-[200px] md:min-h-[240px] flex items-center justify-center"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full px-4">
              <Button
                onClick={handleYesClick}
                size="lg"
                className="text-xl md:text-2xl px-12 py-8 md:px-16 md:py-10 bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 min-w-[160px] md:min-w-[200px] border-4 border-romantic-accent-dark/20"
              >
                Yes! 💕
              </Button>

              <Button
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                onPointerDown={handlePointerDown}
                onTouchStart={handleTouchStart}
                size="lg"
                variant="outline"
                className="text-xl md:text-2xl px-12 py-8 md:px-16 md:py-10 border-4 border-romantic-medium/30 text-romantic-medium hover:bg-romantic-light/50 font-bold rounded-full shadow-lg transition-all duration-200 min-w-[160px] md:min-w-[200px] absolute"
                style={{
                  left: position.x,
                  top: position.y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                No 😢
              </Button>
            </div>
          </div>

          <p className="text-sm text-romantic-medium/60 mt-8 italic">
            Hint: There's only one right answer... 😉
          </p>
        </CardContent>
      </Card>

      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-romantic-medium/50">
        © 2026. Built with <Heart className="inline w-4 h-4 text-romantic-accent" fill="currentColor" /> using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-romantic-accent transition-colors">
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
