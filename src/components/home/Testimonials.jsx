import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marco Bianchi',
    role: 'Production Manager',
    company: 'Bianchi Metalworks, Italy',
    quote:
      'The ARTITECT double folding machine transformed our production line. Accuracy is exceptional and the CNC control is intuitive. Our scrap rate dropped by 40% in the first month.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Operations Director',
    company: 'Thompson Fabrication, UK',
    quote:
      'We have been running ARTITECT sheet metal folders for six years without a single major breakdown. The after-sales support is outstanding — they treat you like a partner, not just a customer.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmed Al-Rashid',
    role: 'Chief Engineer',
    company: 'Gulf Metal Industries, UAE',
    quote:
      'For our HVAC ductwork production, the ARTITECT metal folding machine delivers the speed and precision we need. Highly recommended for any serious fabrication operation.',
    rating: 5,
  },
];

const clients = [
  'Bosch', 'Siemens', 'ThyssenKrupp', 'Airbus', 'Caterpillar', 'Volvo',
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold">
            Customer Stories
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto leading-relaxed">
            Fabricators around the world rely on ARTITECT MACHINERY to deliver
            precision, day in and day out.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-md border border-[#E8EAED] border-t-4 border-t-[#C9A84C] flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2E3A4A] text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold text-[#0D1B2A] text-sm">{t.name}</div>
                <div className="text-[#8A9BB0] text-xs mt-0.5">{t.role}</div>
                <div className="text-[#C9A84C] text-xs font-medium mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Strip */}
        <div className="border-t border-[#E8EAED] pt-12">
          <p className="text-center text-xs tracking-widest uppercase text-[#8A9BB0] mb-8">
            Trusted by global manufacturers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {clients.map((client) => (
              <span
                key={client}
                className="text-[#8A9BB0] font-bold text-lg tracking-widest uppercase opacity-50 hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
