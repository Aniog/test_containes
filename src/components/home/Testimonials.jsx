import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I ordered the Royal Heirloom Set as a birthday gift for my best friend and she absolutely loved it. The packaging alone made it feel so luxurious. Will definitely be ordering again.',
  },
  {
    id: 2,
    name: 'Camille R.',
    rating: 5,
    text: 'The Golden Sphere Huggies are my new everyday earrings. They\'re the perfect weight — substantial enough to feel luxurious but light enough to forget you\'re wearing them.',
  },
  {
    id: 3,
    name: 'Isabelle T.',
    rating: 5,
    text: 'Finally found a jewelry brand that doesn\'t irritate my sensitive ears. The hypoallergenic claim is real — I\'ve been wearing the Vivid Aura cuff every day for two months.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-ultra-wide text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-xl font-light italic text-white/90 leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-gold/40 mb-5" />

              {/* Name */}
              <p className="font-inter text-xs uppercase tracking-widest text-gold-light">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
