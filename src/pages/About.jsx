import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Lightbulb } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every machine we build is held to the highest tolerances. Precision is not a feature — it is our foundation.',
  },
  {
    icon: Eye,
    title: 'Transparent Partnership',
    description: 'We work alongside our clients from specification to installation, ensuring complete clarity at every stage.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Our engineering team listens first. Solutions are tailored to your production needs, not the other way around.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    description: 'We invest heavily in R&D to bring the latest advances in folding technology to our customers first.',
  },
];

const milestones = [
  { year: '1999', event: 'ARTITECT MACHINERY founded with a focus on precision sheet metal equipment.' },
  { year: '2005', event: 'Launched the first DF-Series double folding machine, setting a new industry benchmark.' },
  { year: '2010', event: 'Expanded to international markets, delivering machines across 20+ countries.' },
  { year: '2016', event: 'Introduced CNC-controlled folding systems with IoT connectivity.' },
  { year: '2020', event: 'Reached 400+ machines installed globally with 99% uptime record.' },
  { year: '2024', event: 'Launched next-generation servo-electric folding platform with predictive maintenance.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-brand-navy min-h-screen">
      {/* Page Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-navy" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Our Story</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-4">
            About ARTITECT MACHINERY
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Over two decades of engineering excellence in sheet metal folding technology.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Who We Are</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-white mb-6">
              Engineering Excellence Since 1999
            </h2>
            <p className="text-brand-muted leading-relaxed mb-5">
              ARTITECT MACHINERY was founded with a singular purpose: to build the world's most precise and reliable sheet metal folding machines. From our first double folding machine to today's IoT-connected systems, that commitment has never wavered.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              We serve fabricators, manufacturers, and contractors across 40+ countries, providing machines that form the backbone of modern metal fabrication — from HVAC systems and architectural cladding to industrial enclosures and precision components.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-3.5 rounded-full hover:bg-brand-gold-light transition-all text-sm tracking-wide"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="ARTITECT MACHINERY factory"
              data-strk-img-id="about-factory-img-v5w6x7"
              data-strk-img="[about-img-caption] precision sheet metal machinery manufacturing factory"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            <span id="about-img-caption" className="sr-only">ARTITECT MACHINERY precision engineering factory</span>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-brand-navy/90 backdrop-blur-sm rounded-xl px-5 py-4 border border-brand-gold/20">
              <div className="text-brand-gold font-serif font-bold text-2xl">25+</div>
              <div className="text-brand-white/70 text-xs uppercase tracking-widest">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-light py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Our Values</span>
              <div className="w-8 h-px bg-brand-gold" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-white rounded-2xl p-7 border border-brand-light shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold group-hover:text-brand-navy transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-brand-navy mb-2">{val.title}</h3>
                  <p className="text-brand-steel/70 text-sm leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">Our Journey</span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-white">
            Milestones
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-gold/20 -translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-gold border-2 border-brand-navy mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-brand-steel rounded-xl p-5 border border-brand-gold/15 hover:border-brand-gold/30 transition-all">
                    <div className="text-brand-gold font-serif font-bold text-xl mb-1">{m.year}</div>
                    <p className="text-brand-muted text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
