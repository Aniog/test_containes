import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but feels so substantial.",
    name: 'Claire W.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that looks expensive but doesn't break the bank. The Majestic Flora necklace is my go-to for date nights. Absolutely obsessed.",
    name: 'Isabelle R.',
    location: 'Paris',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-cream">
            What They're Saying
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-obsidian-800 border border-obsidian-700 p-8 relative"
            >
              {/* Quote mark */}
              <div className="font-serif text-5xl text-gold/20 leading-none mb-4 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-obsidian-200 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-gold font-medium">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-xs font-semibold text-cream tracking-wide">{t.name}</p>
                  <p className="font-sans text-[10px] text-obsidian-400">{t.location}</p>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gold/20" />
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 border-t border-obsidian-700 pt-12">
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-light text-gold mb-2">{stat.value}</p>
              <p className="font-sans text-xs text-obsidian-400 tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
