import { 
  Settings, 
  Shield, 
  Wrench, 
  Zap, 
  Gauge, 
  Award 
} from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Our machines are manufactured with tight tolerances to ensure every fold meets exact specifications, reducing waste and improving productivity.',
  },
  {
    icon: Shield,
    title: 'Durable Construction',
    description: 'Built with high-grade steel and quality components, our equipment is designed to withstand years of heavy-duty industrial use.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Thoughtful design allows for quick access to all service points, minimizing downtime and maintenance costs.',
  },
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Optimized motor systems and power management reduce energy consumption without compromising performance.',
  },
  {
    icon: Gauge,
    title: 'High Precision',
    description: 'Advanced control systems and quality manufacturing deliver consistent, accurate results across every operation.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'All our products meet international quality standards and come with comprehensive warranty coverage.',
  },
];

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Machines Delivered' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '15+', label: 'Countries Served' },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-[#f8f6f3]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="accent-line" />
          <h2 className="section-title">Why Choose ARTITECT</h2>
          <p className="section-subtitle">
            We combine traditional craftsmanship with modern innovation to deliver machines that exceed expectations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl md:text-5xl font-display font-bold text-[#1a2744] mb-2">
                {stat.value}
              </div>
              <div className="text-[#4a5568] text-sm font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 bg-[#1a2744] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-[#d4a574]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#1a2744] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#4a5568] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
