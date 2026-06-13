import { Award, Globe, Users, CheckCircle } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Experience', icon: Award },
  { value: '40+', label: 'Countries Served', icon: Globe },
  { value: '2,500+', label: 'Machines Installed', icon: CheckCircle },
  { value: '98%', label: 'Client Satisfaction', icon: Users },
];

const values = [
  {
    title: 'Precision Engineering',
    description:
      'Every machine is engineered to micron-level tolerances, ensuring consistent, repeatable results across thousands of production cycles.',
  },
  {
    title: 'Built to Last',
    description:
      'Constructed from industrial-grade steel with reinforced frames. Our machines are designed for decades of heavy-duty operation.',
  },
  {
    title: 'Global Support',
    description:
      'With service centers across 40 countries, we provide rapid technical support, spare parts, and maintenance for every machine we build.',
  },
  {
    title: 'Custom Solutions',
    description:
      'No two workshops are the same. We work with clients to tailor machine specifications, tooling options, and automation levels.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent text-xs uppercase tracking-extra-wide font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-text-primary mb-5">
            Engineering Trust, Delivering Precision
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ARTITECT MACHINERY has been at the forefront of industrial folding
            technology for over two decades. We build machines that industries rely on.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-bg border border-border rounded-lg p-6 text-center hover:border-border-hover transition-colors duration-200"
              >
                <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-bg border border-border rounded-lg p-6 md:p-8 hover:border-border-hover hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
