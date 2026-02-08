import { useState } from 'react';
import HeroPage from '@/pages/HeroPage';
import ReasonsPage from '@/pages/ReasonsPage';
import ProposalPage from '@/pages/ProposalPage';
import FinalLoveNotePage from '@/pages/FinalLoveNotePage';
import FloatingHearts from '@/components/FloatingHearts';
import BackgroundMusic from '@/components/BackgroundMusic';
import { Heart } from 'lucide-react';

type Screen = 'hero' | 'reasons' | 'proposal' | 'final';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('hero');
  const [musicStarted, setMusicStarted] = useState(false);

  const handleStart = () => {
    setMusicStarted(true);
    setCurrentScreen('reasons');
  };

  const handleToProposal = () => {
    setCurrentScreen('proposal');
  };

  const handleToFinal = () => {
    setCurrentScreen('final');
  };

  const handleBackToHero = () => {
    setCurrentScreen('hero');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-light via-romantic-lighter to-white">
      <BackgroundMusic shouldPlay={musicStarted} />
      
      {currentScreen === 'hero' && (
        <HeroPage onStart={handleStart} />
      )}
      
      {currentScreen === 'reasons' && (
        <ReasonsPage onNext={handleToProposal} onBack={handleBackToHero} />
      )}
      
      {currentScreen === 'proposal' && (
        <ProposalPage onContinue={handleToFinal} />
      )}
      
      {currentScreen === 'final' && (
        <FinalLoveNotePage onRestart={handleBackToHero} />
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-romantic-dark/70 bg-romantic-lighter/80 backdrop-blur-sm">
        <p className="text-sm md:text-base">
          © 2026. Built with <Heart className="inline w-4 h-4 text-romantic-accent" fill="currentColor" /> using{' '}
          <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-romantic-accent transition-colors">
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
