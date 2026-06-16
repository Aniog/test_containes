import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, Users, Globe, Zap } from 'lucide-react';

const values = [
  {
    icon: Zap,
    title: 'Innovation',
    desc: 'We continuously invest in R&D to bring cutting-edge folding technology to the market.',
  },
  {
    icon: CheckCircle,
    title: 'Quality',
    desc: 'Every machine undergoes rigorous testing before leaving our facility. No exceptions.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We build lasting relationships with our clients through responsive support and training.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'With distributors in 45+ countries, we deliver and support machines worldwide.',
  },
];

const timeline = [
  {
    year: '1998',
    title: 'Company Founded',
    desc: 'ARTITECT MACHINERY established in the industrial heartland with a vision for precision metalworking equipment.',
  },
  {
    year: '2005',
    title: 'First CNC System',
    desc: 'Launched our first CNC-controlled folding machine, setting new standards for accuracy in the industry.',
  },
  {
    year: '2012',
    title: 'Global Expansion',
    desc: 'Opened distribution centers in Europe, Asia, and South America to serve growing international demand.',
  },
  {
    year: '2019',
    title: 'Smart Factory Integration',
    desc: 'Introduced Industry 4.0-ready machines with IoT connectivity and predictive maintenance capabilities.',
  },
  {
    year: '2024',
    title: '25 Years of Excellence',
    desc: 'Celebrated a quarter-century of delivering precision folding solutions to manufacturers worldwide.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built on Precision
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. Our commitment to engineering excellence drives everything we do.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-title] [about-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-end pb-12">
          <div>
            <h2
              id="about-hero-title"
              className="text-3xl md:text-4xl font-bold text-white mb-2"
            >
              State-of-the-Art Manufacturing
            </h2>
            <p
              id="about-hero-subtitle"
              className="text-slate-300 max-w-xl"
            >
              Our 120,000 sq ft facility combines advanced CNC machining centers with skilled craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                Empowering Manufacturers With Precision Tools
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                At ARTITECT MACHINERY, we believe that the quality of finished products begins with the quality of the tools used to create them. That is why we engineer every folding machine to deliver micron-level accuracy, exceptional durability, and intuitive operation.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                From small fabrication shops to multinational automotive suppliers, our machines help businesses produce better parts faster and with less waste. We do not just sell equipment; we deliver competitive advantage.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '120K', label: 'Sq Ft Facility' },
                  { value: '180+', label: 'Team Members' },
                  { value: '35', label: 'Engineers' },
                  { value: '24/7', label: 'Support' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-brand-dark">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id="about-mission-img"
                  data-strk-img="[about-mission-title] [about-mission-desc]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-7 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {v.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              A History of Innovation
            </h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 md:text-right">
                  <div
                    className={`bg-slate-50 rounded-xl p-6 border border-slate-100 ${
                      i % 2 !== 0 ? 'md:text-left' : ''
                    }`}
                  >
                    <span className="text-brand-gold font-extrabold text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-brand-dark mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full border-4 border-white shadow -translate-x-1.5 mt-7 hidden md:block" />
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
