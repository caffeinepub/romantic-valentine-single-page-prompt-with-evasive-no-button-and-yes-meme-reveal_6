import { Button } from '@/components/ui/button';
import FloatingHearts from '@/components/FloatingHearts';

interface HeroPageProps {
  onStart: () => void;
}

export default function HeroPage({ onStart }: HeroPageProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pb-20">
      <FloatingHearts />
      
      <div className="relative z-10 text-center space-y-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-romantic-dark mb-6 animate-glow font-cursive leading-tight">
          Ayesha, Will You Be My Valentine?
        </h1>
        
        <p className="text-2xl md:text-3xl text-romantic-medium font-medium mb-12">
          From Abubakar, with all his heart.
        </p>
        
        <Button
          onClick={onStart}
          size="lg"
          className="text-2xl px-16 py-8 bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-2xl hover:shadow-romantic-accent/50 transition-all duration-300 hover:scale-110 animate-pulse-glow"
        >
          Start ✨
        </Button>
      </div>
    </section>
  );
}
