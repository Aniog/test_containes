import { Star } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Founder, HomeStyle UK',
    country: '🇬🇧',
    text: 'SSourcing China found us a furniture manufacturer that met our quality standards and delivered on time. Their factory audit report gave us the confidence to place a large order. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Sarah Müller',
    role: 'Procurement Manager, TechDist GmbH',
    country: '🇩🇪',
    text: 'We had been burned by a bad supplier before. SSourcing China\'s verification process is thorough and professional. They caught issues we would never have found remotely.',
    rating: 5,
  },
  {
    name: 'Carlos Reyes',
    role: 'CEO, Nexo Imports',
    country: '🇲🇽',
    text: 'Their team speaks Mandarin and understands Chinese business culture. Communication with our factory improved dramatically once SSourcing China got involved.',
    rating: 5,
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="Feedback from buyers who have worked with us across multiple sourcing projects."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-brand-light rounded-xl p-6 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-slate text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-navy font-semibold text-sm">
                    {t.country} {t.name}
                  </div>
                  <div className="text-brand-slate text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
