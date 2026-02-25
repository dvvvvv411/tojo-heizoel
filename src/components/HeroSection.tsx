import { Check, Sparkles } from 'lucide-react';
import HorizontalPriceCalculator from './HorizontalPriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 lg:pt-28 pb-8 lg:pb-12">
        
        {/* Upper Section - Centered */}
        <div className="container mx-auto px-4 pb-10 lg:pb-14">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium border border-primary-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Heizöl-Experte seit über 20 Jahren</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Heizöl günstig
              <br />
              <span className="relative inline-block">
                <span className="text-primary-600">bestellen</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C40 2 80 2 100 4C120 6 160 10 198 4" stroke="hsl(var(--primary-500, 8 80% 52%))" strokeWidth="3" strokeLinecap="round" className="text-primary-500" style={{ stroke: '#e03c20' }} />
                </svg>
              </span>
              <br />
              <span className="text-gray-500 font-semibold">Deutschlandweit</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-500 font-medium">
              Vertrauen Sie auf über 20 Jahre Erfahrung
            </p>

            {/* USP Checklist */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>Heizöl <span className="text-primary-600 font-semibold">ab nur 60 Cent pro Liter</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>Kostenlose Lieferung ab 1.500 Liter</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>Lieferung in 4-7 Werktagen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Calculator */}
        <div id="price-calculator" className="container mx-auto px-4">
          <div className="hidden lg:block">
            <HorizontalPriceCalculator />
          </div>
          <div className="lg:hidden">
            <MobilePriceCalculator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
