import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Cpu, Shield, Zap, Settings, Globe, HeadphonesIcon } from 'lucide-react';

const FEATURES = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems deliver micron-level accuracy on every bend, ensuring consistent results across thousands of production cycles.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Durability',
    description: 'Built from high-tensile steel with precision-ground components, our machines are engineered to perform reliably for decades.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Servo-electric drives and optimized kinematics maximize throughput without compromising on bend quality or accuracy.',
  },
  {
    icon: Settings,
    title: 'Easy Setup & Tooling',
    description: 'Quick-change tooling systems and intuitive HMI interfaces minimize setup time, keeping your production line moving.',
  },
  {
    icon: Globe,
    title: 'Industry 4.0 Ready',
    description: 'Full connectivity for remote monitoring, predictive maintenance, and seamless integration with your factory management systems.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Global Support Network',
    description: 'Dedicated technical support teams across 80+ countries ensure rapid response times and minimal downtime for your operations.',
  },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', desc: 'We analyze your production requirements and recommend the optimal machine configuration.' },
  { step: '02', title: 'Engineering', desc: 'Our engineers design and build your machine to exact specifications with rigorous quality control.' },
  { step: '03', title: 'Installation', desc: 'Expert technicians handle delivery, installation, and commissioning at your facility.' },
  { step: '04', title: 'Training & Support', desc: 'Comprehensive operator training and ongoing technical support ensure peak performance.' },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="features" ref={containerRef} className="bg-brand-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-accent" />
            <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">
              Why ARTITECT
            </span>
            <div className="w-8 h-px bg-brand-accent" />
          </div>
          <h2
            id="features-title"
            className="font-serif font-bold text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Engineering Excellence,<br className="hidden md:block" /> Every Detail
          </h2>
          <p
            id="features-subtitle"
            className="font-sans text-brand-mid text-lg max-w-2xl mx-auto"
          >
            Every ARTITECT machine embodies decades of engineering expertise, delivering the performance and reliability that world-class manufacturers demand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-brand-light group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors">
                  <Icon size={22} className="text-brand-accent" />
                </div>
                <h3 className="font-sans font-semibold text-brand-dark text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-brand-mid text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-brand-navy rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative min-h-64 lg:min-h-auto">
              <img
                alt="ARTITECT manufacturing process"
                data-strk-img-id="features-process-img-8s9t0u"
                data-strk-img="[features-process-title] [features-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-navy/60" />
            </div>

            {/* Process Steps */}
            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-6 h-px bg-brand-accent" />
                <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">
                  Our Process
                </span>
              </div>
              <h3
                id="features-process-title"
                className="font-serif font-bold text-white text-2xl md:text-3xl mb-8"
              >
                From Consultation to Production
              </h3>
              <div className="space-y-7">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.step} className="flex gap-5">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full border-2 border-brand-accent/40 flex items-center justify-center">
                        <span className="font-sans font-bold text-brand-accent text-xs">
                          {step.step}
                        </span>
                      </div>
                      {idx < PROCESS_STEPS.length - 1 && (
                        <div className="w-px h-6 bg-brand-accent/20 mx-auto mt-2" />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <h4 className="font-sans font-semibold text-white text-base mb-1">
                        {step.title}
                      </h4>
                      <p className="font-sans text-brand-mid text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
