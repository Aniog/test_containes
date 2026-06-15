import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const testimonials = [
  {
    name: 'James Whitfield',
    role: 'CEO, Whitfield Retail Group',
    country: 'United Kingdom',
    rating: 5,
    text: 'SSourcing China helped us find a reliable furniture manufacturer after two failed attempts on our own. Their factory audit report gave us the confidence to place a large order. Delivery was on time and quality matched the sample exactly.',
  },
  {
    name: 'Maria Santos',
    role: 'Founder, Lumina Home',
    country: 'Brazil',
    rating: 5,
    text: 'The pre-shipment inspection service saved us from a costly mistake. The team caught a packaging defect before the goods left the factory. Professional, responsive, and genuinely helpful.',
  },
  {
    name: 'David Kim',
    role: 'Procurement Manager, TechDist Inc.',
    country: 'United States',
    rating: 5,
    text: 'We\'ve been working with SSourcing China for three years across multiple product categories. Their supplier network and local knowledge are genuinely valuable. They communicate clearly and deliver what they promise.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Our Clients Say"
          subtitle="We work with importers, retailers, and brands across 30+ countries. Here's what some of them have shared."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Quote className="w-8 h-8 text-gold mb-4 opacity-60" />
              <p className="text-blue-100 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-blue-300 text-xs">{t.role}</p>
                <p className="text-blue-400 text-xs">{t.country}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-yellow-300 transition-colors">
            Read full case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
