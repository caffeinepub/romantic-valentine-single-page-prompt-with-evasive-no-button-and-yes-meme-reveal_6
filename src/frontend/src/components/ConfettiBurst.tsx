import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  isHeart: boolean;
}

export default function ConfettiBurst() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ['#ff6b9d', '#ff8fab', '#ffa5ba', '#ffc0cb', '#ff1493'];
    const newParticles: Particle[] = [];

    for (let i = 0; i < 100; i++) {
      const angle = (Math.PI * 2 * i) / 100;
      const velocity = 5 + Math.random() * 10;
      
      newParticles.push({
        id: i,
        x: 50,
        y: 50,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart: Math.random() > 0.5,
      });
    }

    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.vx * 0.1,
          y: p.y + p.vy * 0.1,
          vy: p.vy + 0.5,
          rotation: p.rotation + p.rotationSpeed,
        }))
      );
    }, 16);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setParticles([]);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transform: `rotate(${particle.rotation}deg)`,
            transition: 'all 0.016s linear',
          }}
        >
          {particle.isHeart ? (
            <Heart
              className="w-6 h-6"
              fill={particle.color}
              style={{ color: particle.color }}
            />
          ) : (
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: particle.color }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
