import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'I bought the Golden Sphere Huggies and I haven\'t taken them off in three weeks. The quality is incredible for the price — they look so much more expensive than they are.',
    name: 'Sophie M.',
    location: 'London, UK',
    rating: 5,
  },
  {
    id: 2,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — delicate but substantial.',
    name: 'Camille R.',
    location: 'Paris, France',
    rating: 5,
  },
  {
    id: 3,
    text: 'Finally found a brand that makes jewelry I can wear every day without worrying about it tarnishing. The Majestic Flora Nectar is my new signature piece.',
    name: 'Priya K.',
    location: 'New York, USA',
    rating: 5,
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={13} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-velmora-obsidian py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-medium text-velmora-gold mb-3 font-sans">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-white tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-charcoal border border-velmora-stone/30 p-8 flex flex-col"
            >
              <StarRow />
              <p className="font-serif text-base italic font-light text-velmora-white leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-velmora-stone/30 pt-4">
                <p className="text-sm font-medium text-velmora-sand font-sans">{t.name}</p>
                <p className="text-xs text-velmora-mist font-sans mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={16} style={{ color: '#C9A96E', fill: '#C9A96E' }} />
            ))}
          </div>
          <p className="text-sm text-velmora-sand font-sans">
            <span className="font-semibold text-velmora-white">4.8 out of 5</span> — based on 524 reviews
          </p>
        </div>
      </div>
    </section>
  );
}
