import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'James Whitfield',
    role: 'CEO, Whitfield Retail Group',
    country: 'United Kingdom',
    rating: 5,
    text: 'SSourcing China found us a reliable furniture manufacturer within two weeks. Their factory audit report gave us the confidence to place a large order. Delivery was on time and quality was exactly as specified.',
  },
  {
    id: 'testimonial-2',
    name: 'Maria Santos',
    role: 'Procurement Manager, TechBridge Inc.',
    country: 'Brazil',
    rating: 5,
    text: 'We had been burned by a bad supplier before. SSourcing China\'s verification process is thorough and professional. Their QC team caught a batch issue before shipment — saved us thousands of dollars.',
  },
  {
    id: 'testimonial-3',
    name: 'Lars Eriksson',
    role: 'Founder, Nordic Imports AB',
    country: 'Sweden',
    rating: 5,
    text: 'The team handles everything from supplier negotiation to shipping documentation. Communication is clear and responsive. I can focus on my business while they manage the sourcing side.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-orange uppercase tracking-widest">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            We've helped buyers from over 30 countries source products from China with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 relative">
              <Quote className="w-8 h-8 text-brand-blue-light absolute top-5 right-5" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role} · {t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6">Trusted by buyers from</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['United States', 'United Kingdom', 'Germany', 'Australia', 'Canada', 'France', 'Netherlands', 'Sweden'].map((country) => (
              <span key={country} className="text-sm font-medium text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
