import { Building, Users, Award, Clock, Sparkles } from 'lucide-react';
import shopHeaderImage from '@/assets/shop-header.jpg';

const CompanySection = () => {
  const stats = [
    { icon: Building, number: '2007', label: 'Gegründet', description: 'Über 18 Jahre Erfahrung' },
    { icon: Users, number: '100.000+', label: 'Kunden', description: 'Zufriedene Heizöl-Kunden' },
    { icon: Award, number: '4.9/5', label: 'Bewertung', description: 'Ausgezeichneter Service' },
    { icon: Clock, number: '24/7', label: 'Service', description: 'Immer für Sie da' }
  ];

  const values = [
    { number: '01', title: 'Qualität', description: 'Wir liefern ausschließlich geprüftes Premium-Heizöl nach DIN-Norm für optimale Heizleistung und Effizienz.' },
    { number: '02', title: 'Vertrauen', description: 'Zuverlässigkeit und Transparenz sind die Grundpfeiler unseres Geschäfts. Darauf können Sie sich verlassen.' },
    { number: '03', title: 'Service', description: 'Persönlicher Kundenservice und individuelle Beratung stehen bei uns an erster Stelle.' }
  ];

  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-white relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium border border-primary-100 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Über uns</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Über{' '}
            <span className="relative inline-block">
              <span className="text-primary-600">Valentin Heizöl</span>
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C40 2 80 2 100 4C120 6 160 10 198 4" stroke="#e03c20" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Ihr zuverlässiger Partner für Heizöl in Deutschland mit über 20 Jahren Erfahrung. 
            Wir stehen für Qualität, Service und faire Preise.
          </p>
        </div>

        {/* Company Story + Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
              Unsere <span className="text-primary-600">Geschichte</span>
            </h3>
            <p className="text-gray-500 text-base leading-relaxed">
              Seit der Gründung im Jahr <span className="font-semibold text-gray-900">2007</span> haben wir uns zu einem der führenden Heizöl-Anbieter in Deutschland entwickelt. Was als Unternehmen in Mainz begann, ist heute ein zuverlässiger Partner für über <span className="font-semibold text-gray-900">100.000 Kunden</span> deutschlandweit. Unser Erfolgsrezept: <span className="font-semibold text-gray-900">Erstklassige Qualität</span> zu fairen Preisen, <span className="font-semibold text-gray-900">persönlicher Service</span> und ein erfahrenes Team mit über <span className="font-semibold text-gray-900">20 Jahren Erfahrung</span>. Als bundesweit agierendes Unternehmen kennen wir die Bedürfnisse unserer Kunden genau und leisten einen wichtigen Beitrag zur Energieversorgung in ganz Deutschland.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src={shopHeaderImage} 
              alt="Valentin Heizöl Unternehmen"
              className="max-w-[92%] h-auto rounded-2xl border border-gray-100"
            />
          </div>
        </div>

        {/* Stats - Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center transition-colors duration-200 hover:border-gray-200"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-primary-50 flex items-center justify-center">
                  <IconComponent className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-primary-600 mb-0.5">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-14 tracking-tight">
            Unsere <span className="text-primary-600">Werte</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-2xl border border-gray-100 bg-white p-7 transition-colors duration-200 hover:border-gray-200">
                <span className="text-5xl font-bold text-gray-100 block mb-3">
                  {value.number}
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
