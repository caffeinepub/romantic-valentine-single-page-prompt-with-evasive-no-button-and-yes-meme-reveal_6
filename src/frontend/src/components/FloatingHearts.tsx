import { Heart } from 'lucide-react';

export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-romantic-accent animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${20 + Math.random() * 40}px`,
            opacity: 0.15,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
}
