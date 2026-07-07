import { StarRating } from '@/components/shared/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: "I wear my Golden Sphere Huggies every single day. They're the perfect weight — substantial but not heavy. I've gotten so many compliments. Worth every penny.",
    product: 'Golden Sphere Huggies',
  },
  {
    id: 2,
    name: 'Isabelle R.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister and she absolutely loved it. The packaging is beautiful and the quality feels so much more expensive than the price.",
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Camille T.',
    rating: 5,
    text: "The Majestic Flora Nectar necklace is stunning in person. The crystals catch the light beautifully. I've worn it to three events already and always get asked where it's from.",
    product: 'Majestic Flora Nectar',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-widest text-velmora-gold mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-velmora-obsidian">
            Loved & Treasured
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-8 bg-velmora-cream border border-velmora-stone hover:border-velmora-gold transition-colors duration-300"
            >
              <StarRating rating={t.rating} size="md" />
              <blockquote className="font-serif italic text-lg text-velmora-obsidian leading-relaxed mt-5 mb-6 flex-1">
                "{t.text}"
              </blockquote>
              <div className="border-t border-velmora-stone pt-5">
                <p className="text-xs font-sans uppercase tracking-widest text-velmora-charcoal font-medium">
                  {t.name}
                </p>
                <p className="text-[10px] font-sans text-velmora-mink mt-1">
                  Verified Purchase · {t.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
