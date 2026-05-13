const reviews = [
  {
    name: 'Sarah M.',
    location: 'New York',
    avatar: '🧑‍🦰',
    rating: 5,
    text: 'My Monstera arrived in perfect condition and is already growing new leaves! The care guide was super helpful. Will definitely order again.',
  },
  {
    name: 'James T.',
    location: 'Los Angeles',
    avatar: '👨‍🦱',
    rating: 5,
    text: 'I was nervous about ordering plants online but GreenNest exceeded my expectations. Beautiful packaging and the plants look amazing.',
  },
  {
    name: 'Priya K.',
    location: 'Chicago',
    avatar: '👩',
    rating: 5,
    text: 'Ordered 4 plants and they all arrived healthy. The 30-day guarantee gave me peace of mind. My home feels like a jungle now!',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-sm">★</span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
            Customer Reviews
          </span>
          <h2 className="text-4xl font-extrabold text-green-900 mb-4">
            Loved by Plant Parents
          </h2>
          <p className="text-green-700 max-w-xl mx-auto">
            Don't just take our word for it — here's what our customers say.
          </p>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-green-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <Stars count={review.rating} />
              <p className="mt-3 text-sm text-green-800 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="text-3xl">{review.avatar}</span>
                <div>
                  <p className="text-sm font-bold text-green-900">{review.name}</p>
                  <p className="text-xs text-green-600">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <p className="text-5xl font-extrabold text-green-800">4.9</p>
          <Stars count={5} />
          <p className="text-sm text-green-600 mt-1">Based on 500+ reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
