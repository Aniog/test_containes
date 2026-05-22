import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sofia Marchetti',
    role: 'Food Blogger',
    rating: 5,
    text: 'The sourdough here is absolutely life-changing. I\'ve tried bakeries across Italy and this rivals the best of them. The crust sings when you cut it!',
    initials: 'SM',
  },
  {
    name: 'James Thornton',
    role: 'Regular Customer',
    rating: 5,
    text: 'We order the Margherita every Friday night. The wood-fired crust has that perfect char and chew — it\'s become a family ritual we look forward to all week.',
    initials: 'JT',
  },
  {
    name: 'Priya Nair',
    role: 'Local Resident',
    rating: 5,
    text: 'The morning pastry box is a dream. Croissants so buttery and flaky, the almond danish is divine. Forno has completely ruined supermarket pastries for me.',
    initials: 'PN',
  },
  {
    name: 'Marco Deluca',
    role: 'Chef & Restaurateur',
    rating: 5,
    text: 'As a chef myself, I\'m picky about ingredients and technique. Forno\'s commitment to quality is evident in every bite. The truffle pizza is extraordinary.',
    initials: 'MD',
  },
  {
    name: 'Emma Schultz',
    role: 'Event Planner',
    rating: 5,
    text: 'We used Forno for our company event catering. The focaccia and pizza were a massive hit. Professional, punctual, and absolutely delicious.',
    initials: 'ES',
  },
  {
    name: 'Luca Ferretti',
    role: 'Neighborhood Regular',
    rating: 5,
    text: 'I stop in every morning for a croissant and espresso. The staff knows my order, the bread is always perfect. This place is the heart of our neighborhood.',
    initials: 'LF',
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="py-24 bg-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What People Say</p>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-dark mb-4">
          Loved by Our Community
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Don't just take our word for it — here's what our regulars have to say.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="bg-white rounded-2xl p-6 border border-warm shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
          >
            <Quote className="w-8 h-8 text-accent-light mb-4 flex-shrink-0" />
            <p className="text-dark text-sm leading-relaxed mb-6 flex-1">"{review.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{review.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-dark text-sm">{review.name}</p>
                <p className="text-muted text-xs">{review.role}</p>
              </div>
              <StarRating count={review.rating} />
            </div>
          </div>
        ))}
      </div>

      {/* Overall rating */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-sm border border-warm">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>
          <span className="font-bold text-dark text-lg">4.9</span>
          <span className="text-muted text-sm">from 500+ reviews</span>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
