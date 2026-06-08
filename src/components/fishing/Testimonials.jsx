import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marcus T.',
    role: 'Bass Tournament Angler',
    rating: 5,
    text: "The ProCast X9 rod completely changed my game. I've tried dozens of rods over 20 years and nothing compares to the sensitivity and power this rod delivers. Landed a 9lb largemouth on my first tournament with it!",
    location: 'Lake Okeechobee, FL',
  },
  {
    id: 2,
    name: 'Sarah K.',
    role: 'Fly Fishing Enthusiast',
    rating: 5,
    text: "CastMaster's fly fishing selection is unmatched. The Elite Fly Rod is a dream — perfectly balanced, incredibly responsive. Their customer service team helped me pick the right setup for mountain trout streams.",
    location: 'Colorado Rockies, CO',
  },
  {
    id: 3,
    name: 'James R.',
    role: 'Deep Sea Charter Captain',
    rating: 5,
    text: "I outfit my entire charter fleet with CastMaster gear. The quality is consistent, the prices are fair, and the shipping is always on time. My clients notice the difference immediately. Highly recommend!",
    location: 'Gulf of Mexico, TX',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest">Angler Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mt-3 mb-4">
            Trusted by Anglers Everywhere
          </h2>
          <p className="text-teal-700 max-w-xl mx-auto text-base leading-relaxed">
            Don't just take our word for it — hear from the anglers who fish with our gear every day.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-teal-50 rounded-2xl p-7 border border-teal-100 relative"
            >
              <Quote className="w-8 h-8 text-teal-200 absolute top-6 right-6" />
              <StarRating rating={t.rating} />
              <p className="text-teal-800 text-sm leading-relaxed mt-4 mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-teal-200 pt-4">
                <div className="font-bold text-teal-900">{t.name}</div>
                <div className="text-xs text-teal-600 mt-0.5">{t.role}</div>
                <div className="text-xs text-amber-600 font-medium mt-1">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '50,000+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
            { value: '15+', label: 'Years in Business' },
          ].map((badge) => (
            <div key={badge.label} className="text-center px-6">
              <div className="text-3xl font-extrabold text-teal-800">{badge.value}</div>
              <div className="text-sm text-teal-600 mt-1">{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
