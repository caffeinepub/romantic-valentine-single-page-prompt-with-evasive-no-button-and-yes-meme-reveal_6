import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackgroundMusicProps {
  shouldPlay: boolean;
}

export default function BackgroundMusic({ shouldPlay }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio('/assets/audio/valentine-instrumental.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !isPlaying) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked, user needs to interact
          setIsPlaying(false);
        });
    }
  }, [shouldPlay, isPlaying]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (!isPlaying) {
      // If not playing, start playing
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          audioRef.current!.muted = false;
          setIsMuted(false);
        })
        .catch(() => {
          // Handle play error
        });
    } else {
      // Toggle mute
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex gap-2">
      <Button
        onClick={toggleMute}
        size="icon"
        variant="outline"
        className="rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl border-romantic-accent/30 hover:bg-romantic-light/50 transition-all"
      >
        {isMuted || !isPlaying ? (
          <VolumeX className="w-5 h-5 text-romantic-accent" />
        ) : (
          <Volume2 className="w-5 h-5 text-romantic-accent" />
        )}
      </Button>
    </div>
  );
}
