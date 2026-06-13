import { Target, TrendingUp, Globe } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '500+', label: 'Machines Installed' },
  { value: '45+', label: 'Countries Served' },
  { value: '99.2%', label: 'Uptime Guarantee' },
];

const About = () => {
  return (
    <section id="about" className="bg-brand-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative bg-brand-gray-light rounded-2xl overflow-hidden">
              <img
                data-strk-img-id="about-factory-img-b4e7d1"
                data-strk-img="[about-desc] precision sheet metal manufacturing factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Manufacturing Facility"
                className="w-full rounded-2xl"
              />
            </div>
            {/* Accent line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-brand-gold rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-brand-gold/10 rounded-xl -z-10" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-brand-gold text-xs font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 leading-tight">
                Two Decades of Metal Folding Innovation
              </h2>
              <p id="about-desc" className="text-brand-gray-dark text-lg mt-4 leading-relaxed">
                Since 2005, ARTITECT MACHINERY has been at the forefront of sheet metal
                folding technology. We combine German engineering precision with cutting-edge
                automation to deliver machines that transform how workshops and factories
                operate.
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-5">
              {[
                { icon: Target, text: 'Precision-first design philosophy in every machine we build' },
                { icon: TrendingUp, text: 'Continuous R&D investment driving next-generation capabilities' },
                { icon: Globe, text: 'Trusted by manufacturers across 45+ countries worldwide' },
              ].map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <p className="text-brand-steel text-base leading-relaxed">{point.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-brand-gray-light rounded-2xl py-8 px-4 border border-brand-gray-medium/50"
            >
              <p className="text-3xl sm:text-4xl font-bold text-brand-gold">{stat.value}</p>
              <p className="text-brand-gray-dark text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
