import { Zap, Shield, Droplets, Award, RefreshCw, Truck } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Performance Engineered',
    desc: 'Every product is designed to reduce drag and maximize your speed in the water.',
  },
  {
    icon: Shield,
    title: 'Durable Materials',
    desc: 'Chlorine-resistant, UV-protected materials built to last season after season.',
  },
  {
    icon: Droplets,
    title: 'Hydrodynamic Design',
    desc: 'Streamlined shapes and textures that work with the water, not against it.',
  },
  {
    icon: Award,
    title: 'Competition Approved',
    desc: 'All racing gear meets FINA standards for competitive swimming events.',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    desc: '30-day hassle-free returns. If it doesn\'t fit your stroke, we\'ll make it right.',
  },
  {
    icon: Truck,
    title: 'Fast Shipping',
    desc: 'Free shipping on orders over $50. Get your gear poolside in 2–3 business days.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Why SwimGear
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
            Built for Swimmers, by Swimmers
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            We obsess over every detail so you can focus on what matters — your performance in the water.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-sky-50 rounded-2xl p-6 border border-sky-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-sky-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-sky-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
