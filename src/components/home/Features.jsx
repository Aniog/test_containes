import { Truck, ShieldCheck, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-7 h-7 text-green-700" />,
    title: 'Same-Day Delivery',
    description: 'Order before noon and receive your fresh fruits the same day, right at your doorstep.',
    bg: 'bg-green-50',
  },
  {
    icon: <Leaf className="w-7 h-7 text-green-700" />,
    title: '100% Organic',
    description: 'All our fruits are certified organic, grown without pesticides or artificial fertilizers.',
    bg: 'bg-green-50',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-green-700" />,
    title: 'Quality Guaranteed',
    description: 'Not happy with your order? We offer a full refund or replacement — no questions asked.',
    bg: 'bg-green-50',
  },
  {
    icon: <Clock className="w-7 h-7 text-green-700" />,
    title: 'Freshness Promise',
    description: 'Fruits are handpicked daily and packed within hours to ensure maximum freshness.',
    bg: 'bg-green-50',
  },
];

const testimonials = [
  {
    name: 'Sarah M.',
    avatar: '👩',
    text: 'The strawberries were absolutely incredible — so sweet and fresh! Will definitely order again.',
    rating: 5,
  },
  {
    name: 'James T.',
    avatar: '👨',
    text: 'Fast delivery and the fruits were perfectly ripe. Best fruit delivery service I\'ve tried.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    avatar: '👩‍🦱',
    text: 'Love the seasonal boxes! Every week is a surprise and everything is always top quality.',
    rating: 5,
  },
];

const Features = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Why us */}
      <div className="text-center mb-12">
        <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-2">Why FreshFruit</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The FreshFruit Difference</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center`}>
              {f.icon}
            </div>
            <h3 className="text-base font-semibold text-gray-900">{f.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="text-center mb-10">
        <p className="text-green-700 font-semibold text-sm uppercase tracking-widest mb-2">Reviews</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-green-50 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-auto">
              <span className="text-3xl">{t.avatar}</span>
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
