import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "I've been wearing the Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: 'Sophie M.',
    location: 'New York',
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is stunning — delicate but substantial. She hasn't taken it off.",
    name: 'Isabelle R.',
    location: 'London',
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is exactly what I was looking for — something that feels special but I can wear to the office. The quality is genuinely impressive for the price.",
    name: 'Priya K.',
    location: 'Toronto',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-manrope text-xs uppercase tracking-[0.16em] text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            What They're Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {reviews.map(review => (
            <div key={review.id} className="bg-ivory p-8 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-cormorant text-lg font-light text-obsidian leading-relaxed italic flex-1 mb-6">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-divider">
                <div className="w-8 h-8 rounded-full bg-linen flex items-center justify-center">
                  <span className="font-cormorant text-sm font-medium text-ash">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-manrope text-xs font-medium text-obsidian">{review.name}</p>
                  <p className="font-manrope text-[10px] text-dust">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
