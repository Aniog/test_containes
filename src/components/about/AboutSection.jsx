import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Factory, Shield, Truck } from 'lucide-react';

const values = [
  {
    icon: Factory,
    title: 'Built for Industry',
    description:
      'Every machine is designed with factory floors in mind — durable frames, reliable hydraulics, and precision tooling that stands up to 24/7 production.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description:
      'Rigorous QC at every stage. From raw steel to final calibration, our machines meet ISO standards and exceed customer expectations.',
  },
  {
    icon: Truck,
    title: 'Global Support',
    description:
      'With distributors and service partners worldwide, we deliver machinery and maintenance support wherever your business operates.',
  },
];

const highlights = [
  'Over 20 years of engineering expertise',
  'ISO 9001 certified manufacturing',
  'Custom tooling and automation options',
  'Comprehensive operator training programs',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                alt="ARTITECT MACHINERY factory"
                data-strk-img-id="about-factory-3e4f5g"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-right-8 bg-brand text-white rounded-xl px-6 py-4 shadow-lg">
              <p className="text-3xl font-extrabold">20+</p>
              <p className="text-xs font-medium uppercase tracking-wider opacity-90">
                Years of Excellence
              </p>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">
              About Us
            </span>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight mb-5"
            >
              Engineering the Future of Sheet Metal Fabrication
            </h2>
            <p
              id="about-subtitle"
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-6"
            >
              ARTITECT MACHINERY is a trusted name in industrial sheet metal
              equipment. We design and manufacture double folding machines,
              metal folders, and automated folding systems that power
              fabrication shops and manufacturing plants around the world.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              Our commitment to precision engineering, operator safety, and
              long-term reliability has made us the partner of choice for
              businesses that demand the best from their machinery.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-text-primary font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-bg-light rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-brand/20 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand mb-5">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
