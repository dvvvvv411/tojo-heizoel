
import { Sparkles, Check, Users, Award, Headphones } from 'lucide-react';
import HorizontalPriceCalculator from './HorizontalPriceCalculator';
import MobilePriceCalculator from './MobilePriceCalculator';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-primary-50/40 via-white to-white">
      {/* Attendflow Grid Pattern */}
      <div className="attendflow-grid" />

      {/* Red Gradient Orbs - subtle but visible */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-primary-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-72 h-72 bg-gradient-to-tr from-primary-100/35 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 lg:pt-40 pb-12 lg:pb-16">
        <div className="container mx-auto px-4">
          
          {/* Centered Hero Content */}
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50/80 text-primary-600 rounded-full text-sm font-semibold border border-primary-200/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Heizöl-Experte seit über 20 Jahren</span>
              </div>
            </div>

            {/* Large Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05]">
              <span className="text-foreground">Heizöl günstig</span>
              <br />
              <span className="relative inline-block my-2">
                {/* Dashed highlight border around "bestellen" */}
                <span className="dashed-highlight">
                  {/* Sparkle decorations */}
                  <Sparkles className="absolute -top-3 -left-3 w-5 h-5 text-primary-400 animate-pulse-subtle" />
                  <Sparkles className="absolute -bottom-2 -right-3 w-4 h-4 text-primary-300 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
                  <span className="gradient-text-premium">bestellen</span>
                </span>
              </span>
              <br />
              <span className="text-muted-foreground">Deutschlandweit</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Vertrauen Sie auf über 20 Jahre Erfahrung – Qualitäts-Heizöl zum besten Preis, direkt zu Ihnen geliefert.
            </p>

            {/* Checklist - centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base lg:text-lg">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-foreground/80"><span className="text-primary-500 font-bold">Ab 60 Cent</span> pro Liter</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-foreground/80">Kostenlose Lieferung</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="text-foreground/80">4-7 Werktage</span>
              </div>
            </div>

            {/* Trust Stats - compact inline badges */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft">
                <Users className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-foreground">100.000+ Kunden</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft">
                <Award className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-foreground">20+ Jahre</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-soft">
                <Headphones className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-semibold text-foreground">24h Service</span>
              </div>
            </div>
          </div>

          {/* Price Calculator */}
          <div id="price-calculator" className="mt-12 lg:mt-16 max-w-5xl mx-auto">
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <HorizontalPriceCalculator />
            </div>
            <div className="lg:hidden">
              <MobilePriceCalculator />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
