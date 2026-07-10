import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sophie M.',
    rating: 5,
    text: "I wear the Golden Sphere Huggies every single day. They're the perfect weight — substantial enough to feel luxurious, light enough to forget you're wearing them.",
  },
  {
    id: 2,
    name: 'Priya K.',
    rating: 5,
    text: "Ordered the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made her cry. The jewelry is absolutely stunning in person.",
  },
  {
    id: 3,
    name: 'Claire B.',
    rating: 5,
    text: "Finally found a brand that delivers on the demi-fine promise. The Amber Lace Earrings look like they cost ten times what I paid. Obsessed.",
  },
];

const StarRow = ({ count }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={12} className="text-gold fill-gold" strokeWidth={1} />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-velvet-900">
    <div className="max-w-screen-xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-3">What They Say</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory-100">Loved by Thousands</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-velvet-800 px-7 py-8 border border-velvet-700"
          >
            <StarRow count={review.rating} />
            <p className="font-serif text-base md:text-lg italic font-light text-ivory-200 leading-relaxed mb-5">
              "{review.text}"
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-gold">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
