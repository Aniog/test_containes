import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Globe, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every machine is built to exacting standards with tolerances measured in hundredths of a millimeter.',
  },
  {
    icon: Users,
    title: 'Customer Partnership',
    description: 'We work closely with our clients to understand their unique requirements and deliver tailored solutions.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving manufacturers in over 50 countries with local support and rapid spare parts delivery.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001:2015 certified manufacturing processes ensure consistent quality in every machine we build.',
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
          <h1 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Over two decades of engineering excellence in sheet metal folding technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 id="about-story-title" className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded in 1998, ARTITECT MACHINERY began with a simple mission: to build the most reliable and precise sheet metal folding machines in the industry.
                </p>
                <p>
                  What started as a small workshop has grown into a globally recognized manufacturer, serving industries from HVAC and construction to automotive and aerospace. Our commitment to innovation has never wavered.
                </p>
                <p>
                  Today, our engineering team combines decades of metalworking expertise with cutting-edge CNC technology to deliver machines that set new standards for accuracy, speed, and operator comfort.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
              <img
                data-strk-img-id="about-factory-b2c3d4"
                data-strk-img="[about-story-title] industrial machinery factory manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight mb-4">
              Our Values
            </h2>
            <p className="text-slate-600 text-lg">
              The principles that guide everything we do at ARTITECT MACHINERY.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 lg:p-8 rounded-xl border border-slate-200"
              >
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Whether you need a standard machine or a custom solution, our team is ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-navy-900 font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
