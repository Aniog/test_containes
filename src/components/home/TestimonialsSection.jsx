import { Star, Quote } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'Founder, HomeGoods Direct',
    country: 'United Kingdom',
    text: 'SSourcing China found us a reliable furniture manufacturer within two weeks. Their factory audit report gave us the confidence to place a large order. The quality inspection before shipment caught a minor issue that was fixed before goods left China.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Procurement Manager, TechRetail SA',
    country: 'Brazil',
    text: 'We had been burned by unreliable suppliers before. SSourcing China\'s verification process is thorough and professional. They communicate clearly and keep us updated throughout production. Highly recommended for any serious buyer.',
    rating: 5,
  },
  {
    name: 'Lars Eriksson',
    role: 'CEO, Nordic Imports AB',
    country: 'Sweden',
    text: 'The team handled everything from supplier shortlisting to shipping coordination. Their knowledge of Chinese manufacturing and export procedures saved us significant time and money. We now use them for all our China sourcing.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="We work with buyers from over 30 countries. Here's what some of them have shared about working with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-blue/20 mb-4" />
              <p className="text-slate-700 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.role} · {t.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
