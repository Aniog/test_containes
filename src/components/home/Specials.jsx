const specials = [
  {
    day: 'Monday',
    short: 'MON',
    title: 'Margherita Monday',
    description: 'Buy any Margherita, get a second one 50% off. The classic, doubled.',
    emoji: '🍕',
    color: 'from-red-500 to-orange-500',
  },
  {
    day: 'Wednesday',
    short: 'WED',
    title: 'Wine & Pizza Night',
    description: 'Any pizza + a glass of house Chianti for just $24. Midweek treat.',
    emoji: '🍷',
    color: 'from-purple-600 to-red-500',
  },
  {
    day: 'Friday',
    short: 'FRI',
    title: 'Family Friday',
    description: '2 large pizzas + garlic bread + 4 sodas for $49. Feed the whole crew.',
    emoji: '👨‍👩‍👧‍👦',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    day: 'Sunday',
    short: 'SUN',
    title: 'Sunday Brunch Pizza',
    description: 'Eggs, prosciutto, and truffle on a crispy base. Brunch, elevated.',
    emoji: '🥚',
    color: 'from-yellow-500 to-orange-400',
  },
];

const reviews = [
  {
    name: 'Sofia M.',
    stars: 5,
    text: 'The best pizza I\'ve had outside of Naples. The crust is absolutely perfect — crispy, chewy, and slightly charred. I dream about the Truffle Funghi.',
    location: 'New York, NY',
  },
  {
    name: 'James T.',
    stars: 5,
    text: 'Came here for a date night and we ended up ordering three pizzas. No regrets. The Diavola with honey is a revelation.',
    location: 'Brooklyn, NY',
  },
  {
    name: 'Priya K.',
    stars: 5,
    text: 'As a vegetarian, I\'m always worried about options. The Quattro Formaggi and Marinara are both incredible. This is my new regular spot.',
    location: 'Manhattan, NY',
  },
];

const Specials = () => {
  return (
    <section id="specials" className="py-24 bg-[#fffbf5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Weekly Specials */}
        <div className="text-center mb-14">
          <p
            className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Weekly Specials
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-stone-800 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Something Special Every Day
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {specials.map((special) => (
            <div
              key={special.day}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className={`bg-gradient-to-br ${special.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-bold tracking-widest opacity-80"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {special.short}
                  </span>
                  <span className="text-3xl">{special.emoji}</span>
                </div>
                <h3
                  className="text-xl font-bold leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {special.title}
                </h3>
              </div>
              <div className="bg-white p-5">
                <p
                  className="text-stone-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {special.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-14">
          <p
            className="text-red-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-stone-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-orange-50 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} className="text-orange-400 text-lg">★</span>
                ))}
              </div>
              <p
                className="text-stone-600 leading-relaxed mb-5 italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "{review.text}"
              </p>
              <div>
                <div
                  className="font-bold text-stone-800"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {review.name}
                </div>
                <div
                  className="text-stone-400 text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
