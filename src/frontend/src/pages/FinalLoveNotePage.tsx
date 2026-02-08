import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface FinalLoveNotePageProps {
  onRestart: () => void;
}

export default function FinalLoveNotePage({ onRestart }: FinalLoveNotePageProps) {
  return (
    <section className="relative min-h-screen py-32 px-4 bg-gradient-to-b from-white to-romantic-lighter flex items-center justify-center pb-32">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-4 border-romantic-accent/20">
          <CardContent className="p-12 md:p-16">
            <p className="text-3xl md:text-4xl lg:text-5xl text-romantic-dark font-handwritten leading-relaxed mb-8">
              Ayesha, you are my today and all of my tomorrows. Forever yours, Abubakar.
            </p>
            
            <div className="flex justify-center gap-2 mb-8">
              <Heart className="w-8 h-8 text-romantic-accent animate-heartbeat" fill="currentColor" />
              <Heart className="w-8 h-8 text-romantic-accent animate-heartbeat" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-8 h-8 text-romantic-accent animate-heartbeat" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>

            <Button
              onClick={onRestart}
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-romantic-accent/30 text-romantic-medium hover:bg-romantic-light/50 rounded-full shadow-lg transition-all"
            >
              Start Over 💕
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
