import { Star, Quote, CheckCircle2 } from 'lucide-react';

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
        size={16}
        className={`${index < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
      />
    ));
  };

  return (
    <section className="py-24 bg-white relative">
      {/* Curved Divider Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none -translate-y-[1px]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full text-amber-600 text-xs font-semibold mb-5 border border-amber-100">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Kundenstimmen
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Das sagen unsere <span className="text-primary-600">Kunden</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Über 100.000 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service.
          </p>
          
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex gap-0.5">
              {renderStars(5)}
            </div>
            <div className="h-5 w-px bg-gray-200" />
            <span className="text-lg font-bold text-gray-900">4.9<span className="text-gray-400 font-normal">/5</span></span>
            <div className="h-5 w-px bg-gray-200" />
            <span className="text-sm text-gray-500">1.200+ Bewertungen</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-gray-100 bg-white p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-6 h-6 text-primary-100" />
                <div className="flex gap-0.5">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed text-sm mb-5">
                "{review.text}"
              </p>
              
              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.location}</div>
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
