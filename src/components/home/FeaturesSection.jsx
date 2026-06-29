import { Award, Clock, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Engineering Excellence',
    description:
      'Over 25 years of expertise in designing and manufacturing precision metal folding machinery trusted by fabricators worldwide.',
  },
  {
    icon: Clock,
    title: 'Rapid Delivery',
    description:
      'Streamlined production and global logistics ensure your equipment arrives on schedule, ready for immediate deployment.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'Our service network spans continents, providing installation, training, and maintenance wherever your operation is based.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Service',
    description:
      'Our technical support team is available around the clock to keep your production lines running without interruption.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.15em] mb-3 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Built on Trust. Engineered for Performance.
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine decades of engineering knowledge with modern manufacturing to deliver machinery that outlasts and outperforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/20 text-accent mb-5">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
