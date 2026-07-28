import { Star } from 'lucide-react';
import { SectionHeader } from '@/components/shared';

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Founder, HomeStyle UK',
    country: '🇬🇧',
    text: 'SSourcing China found us a reliable furniture manufacturer within two weeks. Their factory audit report gave us the confidence to place a large order. The QC inspection caught a minor defect before shipment — exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Procurement Manager, TechBright USA',
    country: '🇺🇸',
    text: 'We had been burned by a bad supplier before. SSourcing China\'s verification process is thorough and professional. They communicate clearly and keep us updated throughout production. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Marco Bianchi',
    role: 'CEO, Sportivo Italia',
    country: '🇮🇹',
    text: 'Developing our private label sportswear line from scratch seemed daunting. The team guided us through every step — from fabric selection to final packaging. The result exceeded our expectations.',
    rating: 5,
  },
];

const HomeTestimonials = () => (
  <section className="py-16 md:py-24 bg-bg-light">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Client Feedback"
        title="What Our Clients Say"
        subtitle="We let results speak for themselves. Here's what buyers from around the world say about working with us."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-accent text-gold-accent" />
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-navy rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-blue-navy text-sm">{t.country} {t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeTestimonials;
