import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: 'I wear the Vivid Aura cuff every single day. It hasn\'t tarnished at all after 3 months — and I get compliments constantly. Worth every penny.',
  },
  {
    id: 2,
    name: 'Isabelle R.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning in person.',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: 'Finally found a jewelry brand that feels truly luxurious without the luxury price tag. The Golden Sphere Huggies are my new everyday staple.',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} fill="#C9A96E" stroke="none" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-parchment py-20 md:py-28 border-t border-divider">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <p className="font-manrope text-[10px] tracking-widest uppercase text-gold mb-3">Reviews</p>
        <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">What They're Saying</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col">
            <Stars count={review.rating} />
            <blockquote className="font-cormorant text-lg md:text-xl font-light text-ink leading-relaxed mt-5 mb-6 italic">
              "{review.text}"
            </blockquote>
            <div className="mt-auto flex items-center gap-3">
              <div className="w-px h-6 bg-gold" />
              <span className="font-manrope text-xs tracking-wider text-muted">{review.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
