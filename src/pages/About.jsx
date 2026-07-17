import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Globe, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    desc: 'Every machine we build is calibrated to the tightest tolerances, ensuring your production meets the highest quality standards.',
  },
  {
    icon: Eye,
    title: 'Innovation Driven',
    desc: 'We continuously invest in R&D to bring the latest advances in folding technology to our customers.',
  },
  {
    icon: Users,
    title: 'Customer Focused',
    desc: 'From initial consultation to after-sales support, we are committed to your long-term success.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'With customers in over 40 countries, we understand the diverse needs of manufacturers worldwide.',
  },
];

const milestones = [
  { year: '1999', event: 'ARTITECT MACHINERY founded with a focus on precision sheet metal equipment.' },
  { year: '2005', event: 'Launched our first CNC-controlled folding machine series, setting a new industry benchmark.' },
  { year: '2010', event: 'Expanded to international markets, establishing distribution in Europe and Asia.' },
  { year: '2015', event: 'Introduced the double folding machine line, revolutionizing high-volume production.' },
  { year: '2020', event: 'Reached 500+ machines delivered milestone across 40+ countries.' },
  { year: '2024', event: 'Launched next-generation smart folding machines with remote diagnostics and IoT integration.' },
];

const team = [
  { name: 'Robert Artmann', role: 'Founder & CEO', titleId: 'team-robert-title', descId: 'team-robert-desc', imgId: 'team-img-robert-a1b2c3', desc: 'Founder and CEO of ARTITECT MACHINERY' },
  { name: 'Elena Vasquez', role: 'Head of Engineering', titleId: 'team-elena-title', descId: 'team-elena-desc', imgId: 'team-img-elena-d4e5f6', desc: 'Head of Engineering at ARTITECT MACHINERY' },
  { name: 'Marcus Chen', role: 'Global Sales Director', titleId: 'team-marcus-title', descId: 'team-marcus-desc', imgId: 'team-img-marcus-g7h8i9', desc: 'Global Sales Director at ARTITECT MACHINERY' },
];

export default function About() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section ref={heroRef} className="bg-hero-gradient pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          data-strk-bg-id="about-hero-bg-j1k2l3"
          data-strk-bg="[about-hero-title] industrial machinery manufacturing factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-navy/90 to-steel-navy/60" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Our Story</span>
          <h1 id="about-hero-title" className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            About ARTITECT
          </h1>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Over 25 years of engineering excellence in sheet metal folding technology — trusted by manufacturers on every continent.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section ref={containerRef} className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-steel-navy mt-3 mb-6">
                Crafting Precision Since 1999
              </h2>
              <p className="text-slate-gray text-base leading-relaxed mb-5">
                ARTITECT MACHINERY was founded with a single conviction: that sheet metal fabricators deserve machines that combine industrial-grade durability with elegant precision. From our first manual folder to today's fully automated CNC systems, that conviction has never wavered.
              </p>
              <p className="text-slate-gray text-base leading-relaxed mb-8">
                Today, our range spans double folding machines, sheet metal folders, metal folder machines, and heavy-duty metal folding machines — each designed to deliver consistent, repeatable results in the most demanding production environments.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-copper-gold hover:bg-light-gold text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Explore Our Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="ARTITECT Machinery manufacturing facility"
                  data-strk-img-id="about-facility-img-m1n2o3"
                  data-strk-img="sheet metal folding machine manufacturing facility industrial"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-copper-gold rounded-2xl p-6 shadow-xl">
                <div className="text-white font-serif text-3xl font-bold">25+</div>
                <div className="text-white/80 text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cloud-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">What Drives Us</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-steel-navy mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 bg-copper-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-copper-gold/20 transition-colors">
                  <v.icon className="w-7 h-7 text-copper-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-steel-navy mb-3">{v.title}</h3>
                <p className="text-slate-gray text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-steel-navy py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Our Journey</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mt-3">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-copper-gold rounded-full -translate-x-1.5 md:-translate-x-1.5 mt-1.5 flex-shrink-0" />
                  <div className={`flex-1 ml-14 md:ml-0 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:text-right'}`}>
                    <div className="text-copper-gold font-serif font-bold text-xl mb-1">{m.year}</div>
                    <p className="text-mid-gray text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">The People Behind the Machines</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-steel-navy mt-3">
              Leadership Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-cloud-white group-hover:border-copper-gold transition-colors duration-300">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 id={member.titleId} className="font-serif text-xl font-bold text-steel-navy mb-1">{member.name}</h3>
                <p id={member.descId} className="text-copper-gold text-sm font-semibold tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-copper-gold py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Ready to Work With Us?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8">
            Let's discuss how ARTITECT MACHINERY can elevate your production capabilities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-cloud-white text-copper-gold font-semibold px-10 py-4 rounded-full transition-all duration-200 tracking-wide"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
