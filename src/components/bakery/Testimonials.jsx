const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Regular Customer',
    quote: "The sourdough here is absolutely life-changing. I've tried bakeries all over the city and nothing comes close. The crust, the crumb, the flavor — perfection every single time.",
    rating: 5,
    initials: 'SM',
  },
  {
    id: 2,
    name: 'James Thornton',
    role: 'Food Blogger',
    quote: "As someone who writes about food for a living, I can say with confidence that Bread & Bakery is the real deal. Their croissants rival anything I've had in Paris.",
    rating: 5,
    initials: 'JT',
  },
  {
    id: 3,
    name: 'Elena Vasquez',
    role: 'Local Chef',
    quote: "I source my restaurant's bread exclusively from here. The quality is consistent, the flavors are complex, and the team genuinely cares about their craft. Highly recommend.",
    rating: 5,
    initials: 'EV',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Neighborhood Regular',
    quote: "Saturday mornings aren't complete without a trip here. The cinnamon rolls are warm, gooey, and absolutely enormous. My kids would riot if we ever stopped coming.",
    rating: 5,
    initials: 'DP',
  },
  {
    id: 5,
    name: 'Amara Osei',
    role: 'Wedding Client',
    quote: "They made our wedding cake and it was the most beautiful, delicious thing I've ever tasted. Every guest asked for the bakery's name. Truly exceptional work.",
    rating: 5,
    initials: 'AO',
  },
  {
    id: 6,
    name: 'Tom Hargreaves',
    role: 'Coffee Shop Owner',
    quote: "We partner with Bread & Bakery for all our pastries. Our customers love them, and the reliability and freshness are unmatched. A true gem of a business.",
    rating: 5,
    initials: 'TH',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-golden fill-golden" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-golden font-semibold text-sm uppercase tracking-widest mb-3">
            What People Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-4">
            Loved by Our Community
          </h2>
          <p className="text-brown-500 text-lg max-w-xl mx-auto">
            Don't just take our word for it — here's what our customers have to say.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <StarRating count={t.rating} />
              <p className="text-brown-500 text-base leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-golden flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-espresso">{t.name}</p>
                  <p className="text-brown-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
