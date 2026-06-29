import { useEffect, useRef } from 'react';
import { Gauge, Timer, Wrench, Award, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'Our machines deliver accuracy within ±0.1mm, ensuring every bend meets exact specifications for demanding applications.',
  },
  {
    icon: Timer,
    title: 'Fast Delivery',
    description: 'With optimized production and logistics, we ensure quick turnaround times without compromising on quality or testing.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed for accessibility with modular components and clear documentation, reducing downtime and service costs.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'All machines meet international quality standards and undergo rigorous testing before leaving our facility.',
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="text-primary mt-4 mb-6">
            Built for Performance, <br className="hidden md:block" /> Designed to Last
          </h2>
          <p className="text-text-secondary text-lg">
            ARTITECT MACHINERY combines decades of engineering expertise with innovative 
            design to deliver folding machines that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="text-center p-6 rounded-2xl bg-bg-light hover:bg-primary group transition-all duration-500 opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 group-hover:bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Benefits Banner */}
        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Machines in Stock', value: '50+' },
              { label: 'Countries Served', value: '30+' },
              { label: 'Support Response', value: '24h' },
              { label: 'Warranty Period', value: '2 Years' },
            ].map((item, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {item.value}
                </div>
                <div className="text-white/70 text-sm font-medium uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
