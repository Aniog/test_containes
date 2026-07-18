import StarRating from '@/components/product/StarRating';

const testimonials = [
  {
    id: 1,
    name: 'Claire M.',
    rating: 5,
    text: 'The quality is stunning for the price. I wear my huggies every day and they still look brand new after months.',
  },
  {
    id: 2,
    name: 'Priya S.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and my sister teared up. The packaging felt so premium.',
  },
  {
    id: 3,
    name: 'Emma T.',
    rating: 5,
    text: 'Finally, demi-fine jewelry that actually looks expensive. Already planning my next order.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="caption-label mb-3">Reviews</p>
          <h2 className="section-title">Loved by Our Customers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="bg-velmora-white p-8 md:p-10 shadow-soft hover:shadow-lift transition-shadow duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="mt-5 text-velmora-charcoal leading-relaxed">
                “{review.text}”
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.15em] text-velmora-taupe font-semibold">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
