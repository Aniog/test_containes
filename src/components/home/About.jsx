import { useEffect, useRef } from 'react';
import { Award, Globe, Wrench, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '1999', label: 'Founded', desc: 'Established with a vision for precision metal forming' },
  { year: '2008', label: 'Global Expansion', desc: 'Entered international markets across Europe and Asia' },
  { year: '2015', label: 'CNC Innovation', desc: 'Launched our first fully CNC-controlled folding line' },
  { year: '2024', label: 'Industry 4.0', desc: 'Integrated smart manufacturing and remote diagnostics' },
];

const values = [
  { icon: Award, title: 'Uncompromising Quality', desc: 'Every machine undergoes rigorous testing before delivery. ISO-certified manufacturing processes ensure consistent excellence.' },
  { icon: Globe, title: 'Global Reach', desc: 'Serving customers in over 40 countries with dedicated regional support teams and certified service partners.' },
  { icon: Wrench, title: 'Engineering Expertise', desc: 'Our team of experienced engineers designs solutions tailored to your specific production requirements.' },
  { icon: Users, title: 'Customer Partnership', desc: 'We build long-term relationships, providing ongoing support, training, and upgrades throughout the machine lifecycle.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="bg-brand-steel/10 py-24 md:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-medium">
            Who We Are
          </span>
          <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-brand-white mt-3 mb-4">
            A Legacy of Precision
          </h2>
          <div className="h-1 w-16 bg-brand-gold mx-auto mb-6" />
          <p id="about-subtitle" className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology, delivering machines that define industry standards.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]">
            <img
              alt="Artitect Machinery factory"
              data-strk-img-id="about-factory-img-4f2a8b"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-brand-navy/90 backdrop-blur-sm border border-brand-gold/30 rounded-xl p-4">
              <div className="text-brand-gold text-2xl font-bold">ISO 9001</div>
              <div className="text-brand-silver text-xs uppercase tracking-wider">Certified Manufacturer</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-brand-white text-2xl md:text-3xl font-bold mb-6 leading-snug">
              Crafting the Future of Sheet Metal Fabrication
            </h3>
            <p className="text-brand-silver leading-relaxed mb-6">
              ARTITECT MACHINERY was founded on a simple principle: that precision engineering and thoughtful design should go hand in hand. Our machines are not just tools — they are the result of decades of accumulated expertise, continuous innovation, and a deep understanding of our customers' needs.
            </p>
            <p className="text-brand-silver leading-relaxed mb-8">
              From our state-of-the-art manufacturing facility, we produce double folding machines, sheet metal folders, and metal folding solutions that are trusted by leading manufacturers in construction, HVAC, automotive, and aerospace industries worldwide.
            </p>

            {/* Timeline */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m) => (
                <div key={m.year} className="bg-brand-dark-card border border-brand-steel/40 rounded-xl p-4">
                  <div className="text-brand-gold font-bold text-lg">{m.year}</div>
                  <div className="text-brand-white text-sm font-semibold">{m.label}</div>
                  <div className="text-brand-silver text-xs mt-1 leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div id="features">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs uppercase tracking-[0.4em] font-medium">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white mt-3 mb-4">
              The ARTITECT Advantage
            </h2>
            <div className="h-1 w-16 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-brand-dark-card border border-brand-steel/40 rounded-2xl p-7 hover:border-brand-gold/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h4 className="text-brand-white font-semibold text-base mb-3">{val.title}</h4>
                  <p className="text-brand-silver text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
