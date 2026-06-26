import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus Lehmann',
    company: 'Lehmann Metallbau GmbH, Germany',
    quote: 'The DF-2500 has transformed our production line. We have cut setup time by 40% and the fold quality is consistently excellent. The machine runs all day without missing a beat.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    company: 'Mitchell Fabrications, Australia',
    quote: 'We evaluated six different manufacturers before choosing ARTITECT. The build quality, precision, and after-sales support made it an easy decision. Best investment we have made.',
    rating: 5,
  },
  {
    name: 'Tomohiro Kaneda',
    company: 'Kaneda Industries, Japan',
    quote: 'The SF-3200 handles our large architectural panels with incredible accuracy. Our clients notice the difference in quality, and that has helped us win bigger contracts.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mt-4 mb-6">
            Trusted Worldwide
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-sm border border-brand-100 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-steel-700 leading-relaxed mb-8 flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-steel-100 pt-6">
                <div className="font-semibold text-brand-950">{t.name}</div>
                <div className="text-steel-500 text-sm mt-1">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
