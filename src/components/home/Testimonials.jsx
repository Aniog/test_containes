import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "I've been wearing my Golden Sphere Huggies every single day for three months. They haven't tarnished at all and I get compliments constantly. Worth every penny.",
    name: "Sophie M.",
    location: "London, UK",
    product: "Golden Sphere Huggies",
    rating: 5,
  },
  {
    id: 2,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning — looks so much more expensive than it is.",
    name: "Camille R.",
    location: "Paris, France",
    product: "Royal Heirloom Set",
    rating: 5,
  },
  {
    id: 3,
    text: "The Majestic Flora Nectar necklace is everything. I wear it to work, to dinner, everywhere. It's become my signature piece. Already ordered two more as gifts.",
    name: "Priya K.",
    location: "New York, USA",
    product: "Majestic Flora Nectar",
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
            Customer Love
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-espresso">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col">
              <StarRating count={t.rating} />
              <blockquote className="font-cormorant text-xl font-light text-espresso leading-relaxed mt-5 mb-6 italic flex-1">
                "{t.text}"
              </blockquote>
              <div className="border-t border-stone-light pt-5">
                <p className="font-inter text-sm font-medium text-espresso">{t.name}</p>
                <p className="font-inter text-xs text-stone mt-0.5">{t.location}</p>
                <p className="font-inter text-xs text-gold mt-1 uppercase tracking-wider">{t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-14 pt-10 border-t border-stone-light flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="font-cormorant text-5xl font-light text-espresso">4.9</span>
            <div>
              <StarRating count={5} />
              <p className="font-inter text-xs text-stone mt-1">Based on 567 reviews</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-10 bg-stone-light" />
          <p className="font-inter text-xs uppercase tracking-widest text-stone text-center md:text-left">
            Trusted by 5,000+ customers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
