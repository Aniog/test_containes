import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Target, Users, Globe, Award } from 'lucide-react';

const milestones = [
  { year: '2005', event: 'ARTITECT MACHINERY founded with a vision for precision metalworking' },
  { year: '2009', event: 'Launched our first CNC-controlled double folding machine' },
  { year: '2013', event: 'Expanded to international markets across Europe and Asia' },
  { year: '2017', event: 'Introduced servo-electric drive technology for energy efficiency' },
  { year: '2021', event: 'Reached 5,000 machines delivered worldwide' },
  { year: '2024', event: 'Launched next-generation smart folding systems with IoT connectivity' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every machine is calibrated to deliver accuracy within ±0.1°, ensuring your products meet the tightest tolerances.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'We design our machines around the operator. Intuitive controls, ergonomic layouts, and comprehensive training support.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With installations in over 40 countries, we provide worldwide service, spare parts, and technical support.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every stage of production.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 id="about-page-title" className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              About ARTITECT
            </h1>
            <p id="about-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              Two decades of engineering excellence in sheet metal folding technology. We build machines that build your business.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 tracking-tight mb-6">
                Engineering Excellence Since 2005
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  ARTITECT MACHINERY was founded with a clear mission: to make precision sheet metal folding accessible to fabricators of all sizes. From our state-of-the-art manufacturing facility, we design and build machines that combine industrial strength with operator-friendly simplicity.
                </p>
                <p>
                  Our team of engineers brings together decades of experience in mechanical design, CNC control systems, and metalworking technology. Every machine that leaves our factory undergoes rigorous testing to ensure it meets our exacting standards.
                </p>
                <p>
                  Today, ARTITECT machines are trusted by fabrication shops, HVAC contractors, roofing specialists, and industrial manufacturers across more than 40 countries worldwide.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
              <img
                alt="ARTITECT manufacturing facility"
                data-strk-img-id="about-facility-b2c3d4"
                data-strk-img="[about-page-subtitle] [about-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white rounded-xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-amber" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Our Journey
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Key milestones in our pursuit of metalworking excellence.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-brand-amber font-bold text-lg">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-brand-amber rounded-full mt-2 relative">
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px h-8 bg-slate-200" />
                  </div>
                  <p className="text-slate-700 leading-relaxed pb-4">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
            Whether you need a single machine or a complete production line, our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-amber hover:bg-brand-amber-light text-navy-900 font-semibold rounded-lg px-6 py-3.5 transition-colors duration-200"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
