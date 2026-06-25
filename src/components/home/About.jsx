import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2003', event: 'ARTITECT MACHINERY founded in Germany' },
  { year: '2008', event: 'Launched first CNC double folding machine series' },
  { year: '2014', event: 'Expanded to 25 international markets' },
  { year: '2019', event: 'Introduced servo-electric drive technology' },
  { year: '2024', event: 'Over 500 machines installed worldwide' },
];

const testimonials = [
  {
    id: 'testimonial-1',
    quote: "The ARTITECT double folding machine transformed our production line. Precision is outstanding and the support team is always responsive.",
    author: "Thomas Müller",
    role: "Production Manager",
    company: "Müller Metallbau GmbH",
  },
  {
    id: 'testimonial-2',
    quote: "We've been using ARTITECT sheet metal folders for 8 years. Reliability and accuracy are second to none in the industry.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "Pacific Fabrications Ltd",
  },
  {
    id: 'testimonial-3',
    quote: "Switching to ARTITECT reduced our setup time by 40%. The CNC control is intuitive and our operators love it.",
    author: "Marco Rossi",
    role: "Technical Director",
    company: "Rossi Lamiere S.r.l.",
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-32 bg-navy-mid">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Our Story
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-off-white mb-5"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Built on Precision. Driven by Innovation.
          </h2>
          <p
            className="text-slate-cool text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Since 2003, ARTITECT MACHINERY has been designing and manufacturing world-class sheet metal folding machines trusted by fabricators across the globe.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy-light hidden md:block" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div
                    className="inline-block bg-navy-deep border border-navy-light rounded-xl px-6 py-4"
                  >
                    <div className="text-gold font-bold text-lg mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{m.year}</div>
                    <div className="text-off-white text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>{m.event}</div>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-gold border-4 border-navy-mid z-10 flex-shrink-0 hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <span
              className="text-xs font-semibold tracking-[0.3em] text-gold uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              What Our Clients Say
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-navy-deep border border-navy-light rounded-2xl p-8 hover:border-gold/30 transition-all duration-300"
              >
                <div className="text-gold text-4xl leading-none mb-4" style={{ fontFamily: 'Georgia, serif' }}>"</div>
                <p
                  className="text-slate-cool text-sm leading-relaxed mb-6 italic"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {t.quote}
                </p>
                <div className="border-t border-navy-light pt-5">
                  <div className="font-semibold text-off-white text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t.author}</div>
                  <div className="text-xs text-slate-cool mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{t.role} · {t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
