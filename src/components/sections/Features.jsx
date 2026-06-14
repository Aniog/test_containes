import { Award, Wrench, Headphones, Truck, RefreshCw, Lock } from 'lucide-react';

const features = [
  {
    id: 'precision-engineering',
    icon: Award,
    title: 'Precision Engineering',
    description: 'Every machine is built with micron-level accuracy using advanced CNC manufacturing and rigorous quality control.',
  },
  {
    id: 'expert-support',
    icon: Wrench,
    title: 'Expert Technical Support',
    description: 'Our team of engineers provides comprehensive installation, training, and ongoing maintenance support.',
  },
  {
    id: 'dedicated-service',
    icon: Headphones,
    title: 'Dedicated Service',
    description: '24/7 customer service with rapid response times to keep your production running smoothly.',
  },
  {
    id: 'global-delivery',
    icon: Truck,
    title: 'Global Delivery',
    description: 'Worldwide shipping with secure packaging and logistics coordination for seamless delivery.',
  },
  {
    id: 'warranty-coverage',
    icon: RefreshCw,
    title: 'Comprehensive Warranty',
    description: 'Industry-leading warranty coverage with optional extended plans for complete peace of mind.',
  },
  {
    id: 'secure-transactions',
    icon: Lock,
    title: 'Secure Transactions',
    description: 'Safe and transparent purchasing process with flexible financing options available.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Why Choose ARTITECT MACHINERY</h2>
          <p className="section-subtitle">
            We combine decades of engineering expertise with cutting-edge technology
            to deliver folding machines that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={`feature-${feature.id}`}
                className="card group"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 transition-colors group-hover:bg-slate-800">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">ISO 9001</div>
              <div className="mt-1 text-sm text-slate-500">Certified Quality</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">CE Marked</div>
              <div className="mt-1 text-sm text-slate-500">European Standards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">50+</div>
              <div className="mt-1 text-sm text-slate-500">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">24/7</div>
              <div className="mt-1 text-sm text-slate-500">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
