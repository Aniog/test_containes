import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Marcus T.',
    location: 'Brooklyn, NY',
    rating: 5,
    text: "I've eaten fried chicken all over the country and nothing — NOTHING — comes close to Cluck & Crisp. The crust is insane.",
    avatar: '👨🏾',
  },
  {
    name: 'Sarah L.',
    location: 'Austin, TX',
    rating: 5,
    text: "The Nashville Hot Tenders are life-changing. I dream about them. My whole family drives 45 minutes just for these.",
    avatar: '👩🏼',
  },
  {
    name: 'James R.',
    location: 'Chicago, IL',
    rating: 5,
    text: "Best chicken sandwich I've ever had. The brioche bun, the pickles, the slaw — every element is perfect. 10/10.",
    avatar: '👨🏻',
  },
  {
    name: 'Priya M.',
    location: 'Atlanta, GA',
    rating: 5,
    text: "Chicken & Waffles on a Sunday morning is a religious experience here. The maple syrup drizzle is the perfect touch.",
    avatar: '👩🏽',
  },
  {
    name: 'Derek W.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: "Crispy on the outside, incredibly juicy inside. You can tell they actually care about quality. Rare these days.",
    avatar: '👨🏿',
  },
  {
    name: 'Olivia K.',
    location: 'Nashville, TN',
    rating: 5,
    text: "As someone from Nashville, I'm picky about hot chicken. Cluck & Crisp nails it. Authentic heat, incredible flavor.",
    avatar: '👩🏻',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#120600] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-orange-500/30">
            What People Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Loved by <span className="text-orange-400">Thousands</span>
          </h2>
          <p className="text-orange-100/60 text-lg max-w-xl mx-auto">
            Don't take our word for it — here's what our customers have to say.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#1e0c00] border border-orange-900/30 rounded-2xl p-6 hover:border-orange-500/30 transition-all"
            >
              <Stars count={review.rating} />
              <p className="text-orange-100/70 text-sm leading-relaxed mt-4 mb-6 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{review.avatar}</span>
                <div>
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="text-orange-100/40 text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#1e0c00] border border-orange-500/30 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-white font-bold">4.9 / 5</span>
            <span className="text-orange-100/50 text-sm">from 2,400+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
