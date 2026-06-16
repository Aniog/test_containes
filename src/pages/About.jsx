import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1998', event: 'ARTITECT MACHINERY founded in Shanghai' },
  { year: '2003', event: 'First CNC folding machine launched' },
  { year: '2008', event: 'ISO 9001 certification achieved' },
  { year: '2012', event: 'Expanded to 20+ international markets' },
  { year: '2017', event: 'Industry 4.0 smart folding technology introduced' },
  { year: '2022', event: '5,000th machine delivered worldwide' },
  { year: '2025', event: 'Next-gen AI-assisted folding system launched' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'We pursue micron-level accuracy in every machine we build, because your work demands nothing less.',
  },
  {
    icon: Eye,
    title: 'Innovation',
    desc: 'Continuous R&D investment drives our technology forward, keeping our customers ahead of the competition.',
  },
  {
    icon: Heart,
    title: 'Partnership',
    desc: 'We build lasting relationships with our clients, providing support and expertise throughout the machine lifecycle.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Engineering Excellence<br />Since 1998
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            From a small workshop to a global leader in metal folding technology, 
            our journey has been defined by a relentless pursuit of precision and quality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  alt="ARTITECT MACHINERY factory"
                  data-strk-img-id="about-story-img-k2l3m4"
                  data-strk-img="[about-story-desc] [about-story-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
                Our Story
              </p>
              <h2
                id="about-story-title"
                className="text-3xl sm:text-4xl font-bold text-navy mb-6"
              >
                A Legacy of Craftsmanship
              </h2>
              <p
                id="about-story-desc"
                className="text-warm-text leading-relaxed mb-6"
              >
                ARTITECT MACHINERY was founded in 1998 with a simple mission: to build 
                the most precise and reliable metal folding machines in the world. What 
                began as a small engineering workshop in Shanghai has grown into a 
                globally recognized brand serving manufacturers in over 40 countries.
              </p>
              <p className="text-warm-text leading-relaxed mb-6">
                Our name reflects our philosophy — the art of architecture applied to 
                industrial machinery. Every machine we produce is a testament to the 
                marriage of engineering precision and thoughtful design.
              </p>
              <p className="text-warm-text leading-relaxed">
                Today, our state-of-the-art manufacturing facility spans over 50,000 
                square meters and employs more than 300 skilled engineers and technicians. 
                Yet we remain true to our founding principles: quality without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-lg border border-warm-border text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-warm-text text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-warm-border md:-translate-x-px" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                    {index % 2 === 0 && (
                      <div>
                        <p className="text-gold font-bold text-lg">{milestone.year}</p>
                        <p className="text-warm-text text-sm mt-1">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-1.5 z-10" />
                  <div className="pl-10 md:hidden">
                    <p className="text-gold font-bold text-lg">{milestone.year}</p>
                    <p className="text-warm-text text-sm mt-1">{milestone.event}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2 md:pl-12">
                    {index % 2 === 1 && (
                      <div>
                        <p className="text-gold font-bold text-lg">{milestone.year}</p>
                        <p className="text-warm-text text-sm mt-1">{milestone.event}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            Join thousands of manufacturers worldwide who trust ARTITECT MACHINERY 
            for their metal folding needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
