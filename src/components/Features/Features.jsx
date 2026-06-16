import React, { useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  Droplets, 
  Cog, 
  Wrench, 
  Truck, 
  HeadphonesIcon,
  Zap,
  Shield,
  Award
} from 'lucide-react';

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.observe-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'CNC Precision Control',
      description: 'Advanced computer numerical control for unmatched accuracy down to 0.01mm.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Industrial Grade Build',
      description: 'Heavy-duty steel construction designed for continuous production environments.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Energy Efficient',
      description: 'Optimized hydraulic systems reduce power consumption by up to 30%.',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Low Maintenance',
      description: 'Self-lubricating components and accessible service points for easy upkeep.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Global Shipping',
      description: 'Worldwide delivery with professional installation and commissioning services.',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and remote diagnostics capability.',
    },
  ];

  const guarantees = [
    'Full 2-year manufacturer warranty',
    'Free operator training included',
    'Spare parts availability guarantee',
    'Lifetime software updates',
    'Performance satisfaction guarantee',
    'Export-quality certification',
  ];

  return (
    <section id="features" ref={containerRef} className="py-24 bg-[#1A1A2E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #E94560 1px, transparent 1px),
            linear-gradient(-45deg, #E94560 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="observe-animate opacity-0 inline-block px-4 py-1.5 rounded-full bg-[#E94560]/20 text-[#E94560] text-sm font-semibold tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="observe-animate opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Built for Performance.{' '}
            <span className="text-[#E94560]">Designed for You.</span>
          </h2>
          <p className="observe-animate opacity-0 text-lg text-gray-400 leading-relaxed">
            ARTITECT MACHINERY combines decades of engineering expertise with cutting-edge 
            technology to deliver folding solutions that exceed industry standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="observe-animate opacity-0 group p-6 rounded-2xl bg-[#16213E]/50 border border-[#0F3460]/50 hover:border-[#E94560]/50 hover:bg-[#16213E] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-[#E94560]/10 flex items-center justify-center text-[#E94560] mb-5 group-hover:bg-[#E94560] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E94560] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Guarantee Section */}
        <div className="observe-animate opacity-0 rounded-3xl bg-gradient-to-br from-[#16213E] to-[#0F3460] p-8 lg:p-12 border border-[#0F3460]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E94560] flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  Quality Guarantee
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every ARTITECT machine undergoes rigorous quality testing before delivery. 
                We stand behind our products with comprehensive guarantees that ensure 
                your investment is protected.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#E94560]">25+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#E94560]">50+</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-[#E94560]">0.1%</div>
                  <div className="text-sm text-gray-500">Failure Rate</div>
                </div>
              </div>
            </div>

            {/* Right List */}
            <div className="space-y-4">
              {guarantees.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#1A1A2E]/50 hover:bg-[#1A1A2E] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4ADE80]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="observe-animate opacity-0 text-2xl sm:text-3xl font-bold text-white mb-4">
              Our Process
            </h3>
            <p className="observe-animate opacity-0 text-gray-400">
              From consultation to installation, we ensure a seamless experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your requirements' },
              { step: '02', title: 'Selection', desc: 'Choose the right machine' },
              { step: '03', title: 'Delivery', desc: 'Safe & professional shipping' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance & care' },
            ].map((item, index) => (
              <div
                key={index}
                className="observe-animate opacity-0 text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-[#E94560]/10 border border-[#E94560]/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#E94560]">{item.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-[#E94560]/50 to-transparent -translate-y-1/2" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
