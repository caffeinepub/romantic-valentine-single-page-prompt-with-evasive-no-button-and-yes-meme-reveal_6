import { Button } from '@/components/ui/button';
import ReasonCard from '@/components/Reasons/ReasonCard';
import { reasons } from '@/content/reasons';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ReasonsPageProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ReasonsPage({ onNext, onBack }: ReasonsPageProps) {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-white to-romantic-lighter pb-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-romantic-dark mb-16 font-cursive">
          Reasons I Love You
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-16">
          <Button
            onClick={onBack}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-romantic-accent/30 text-romantic-medium hover:bg-romantic-light/50 rounded-full shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Button>
          
          <Button
            onClick={onNext}
            size="lg"
            className="text-lg px-12 py-6 bg-romantic-accent hover:bg-romantic-accent-dark text-white font-bold rounded-full shadow-xl hover:shadow-romantic-accent/50 transition-all hover:scale-105"
          >
            Continue
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
