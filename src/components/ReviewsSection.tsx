import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Maria H.',
      location: 'Berlin',
      rating: 5,
      text: 'Bereits zum dritten Mal bestellt und immer top zufrieden! Pünktliche Lieferung, faire Preise und sehr freundlicher Service. Kann Valentin Heizöl nur weiterempfehlen!',
      date: '2026-01-15'
    },
    {
      name: 'Thomas W.',
      location: 'Hamburg',
      rating: 5,
      text: 'Schnelle und unkomplizierte Bestellung. Der Fahrer war sehr höflich und die Qualität des Heizöls ist ausgezeichnet. Heize seit Jahren günstiger als mit Gas!',
      date: '2026-01-10'
    },
    {
      name: 'Familie S.',
      location: 'Köln',
      rating: 5,
      text: 'Hervorragender Kundenservice! Hatten eine Frage zur Lieferung und wurden sofort freundlich beraten. Die Lieferung kam pünktlich und alles lief perfekt.',
      date: '2026-01-08'
    },
    {
      name: 'Johann M.',
      location: 'Frankfurt am Main',
      rating: 5,
      text: 'Seit 5 Jahren treuer Kunde. Zuverlässig, günstig und immer gute Qualität. Besonders schätze ich die kostenlose Lieferung und die schnelle Abwicklung.',
      date: '2025-12-20'
    },
    {
      name: 'Sarah B.',
      location: 'Stuttgart',
      rating: 5,
      text: 'Online-Bestellung war super einfach, der Preisrechner sehr hilfreich. Lieferung kam wie versprochen und das Personal war sehr professionell.',
      date: '2025-12-15'
    },
    {
      name: 'Klaus F.',
      location: 'Leipzig',
      rating: 5,
      text: 'Beste Heizölpreise in der Region! Habe verschiedene Anbieter verglichen und Valentin Heizöl war nicht nur günstiger, sondern auch noch serviceorientierter.',
      date: '2025-12-05'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={`${index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
      />
    ));
  };

  return (
    <section className="py-24 lg:py-32 bg-white relative">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-subtle" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium border border-primary-100 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kundenstimmen</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Das sagen unsere{' '}
            <span className="relative inline-block">
              <span className="text-primary-600">Kunden</span>
              <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C40 2 80 2 100 4C120 6 160 10 198 4" stroke="#e03c20" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 text-lg">
            Über 100.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service.
          </p>
          
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 mt-8 px-5 py-2.5 bg-white rounded-full border border-gray-100 shadow-sm">
            <div className="flex gap-0.5">
              {renderStars(5)}
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-sm font-semibold text-gray-900">4.9/5</span>
            <div className="h-4 w-px bg-gray-200" />
            <span className="text-xs text-gray-500">1.200+ Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-gray-100 bg-white p-7 transition-colors duration-200 hover:border-gray-200"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <Quote className="w-5 h-5 text-primary-100" />
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                "{review.text}"
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{review.location}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verifiziert</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
