import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sofia Marchetti',
    role: 'Food Blogger',
    quote: 'The Margherita here is the closest thing to Naples I\'ve found outside of Italy. The crust has that perfect char and chew — absolutely unforgettable.',
    stars: 5,
  },
  {
    id: 2,
    name: 'James Thornton',
    role: 'Regular Customer',
    quote: 'I pick up a sourdough loaf every Saturday morning. The crust shatters, the crumb is open and tangy — it\'s the best bread in the city, full stop.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Amara Osei',
    role: 'Chef & Restaurateur',
    quote: 'As a chef, I\'m picky about ingredients. Forno & Co. supplies our restaurant with focaccia and I\'ve never had a single complaint from a guest.',
    stars: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-ember fill-ember" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-inter text-sm uppercase tracking-widest text-crust mb-3">What People Say</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-ash rounded-2xl p-8 shadow-md">
              <Stars count={t.stars} />
              <blockquote className="font-inter text-base text-smoke leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-playfair font-semibold text-charcoal">{t.name}</p>
                <p className="font-inter text-sm text-crust">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
