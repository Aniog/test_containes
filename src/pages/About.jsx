import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';

const milestones = [
  { year: '1999', event: 'ARTITECT MACHINERY founded with a vision for precision engineering' },
  { year: '2004', event: 'Launched first CNC-controlled double folding machine series' },
  { year: '2009', event: 'Expanded operations to serve European and Asian markets' },
  { year: '2014', event: 'Achieved ISO 9001 certification for manufacturing excellence' },
  { year: '2018', event: 'Introduced servo-electric drive technology for energy efficiency' },
  { year: '2023', event: 'Delivered 500th machine — serving 40+ countries worldwide' },
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every machine we build is engineered to tolerances that exceed industry standards, ensuring your production never compromises on quality.',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Our team of engineers and craftsmen bring genuine passion to every machine, treating each build as a work of industrial art.',
  },
  {
    icon: Users,
    title: 'Partnership',
    desc: 'We build long-term relationships with our clients, providing ongoing support, training, and upgrades throughout the machine lifecycle.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'With service partners in 40+ countries, we ensure world-class support wherever your operations are located.',
  },
];

const team = [
  {
    name: 'Robert Artitect',
    role: 'Founder & Chief Engineer',
    bio: '30+ years of precision engineering experience, pioneering CNC folding technology.',
    imgId: 'team-robert-img-a1b2c3',
    titleId: 'team-robert-title',
    descId: 'team-robert-desc',
  },
  {
    name: 'Elena Vasquez',
    role: 'Head of R&D',
    bio: 'Leading innovation in servo-electric drive systems and Industry 4.0 integration.',
    imgId: 'team-elena-img-b2c3d4',
    titleId: 'team-elena-title',
    descId: 'team-elena-desc',
  },
  {
    name: 'Marcus Wei',
    role: 'Global Sales Director',
    bio: 'Building partnerships with manufacturers across Asia, Europe, and the Americas.',
    imgId: 'team-marcus-img-c3d4e5',
    titleId: 'team-marcus-title',
    descId: 'team-marcus-desc',
  },
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
    <div ref={containerRef} className="font-inter">
      {/* Page Header */}
      <section className="relative bg-brand-navy pt-32 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          data-strk-bg-id="about-hero-bg-9a8b7c"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            About Us
          </span>
          <h1
            id="about-hero-title"
            className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6 max-w-3xl"
          >
            25 Years of Precision Engineering Excellence
          </h1>
          <p
            id="about-hero-subtitle"
            className="text-brand-silver text-lg leading-relaxed max-w-2xl"
          >
            From a small workshop to a global leader in sheet metal folding technology — the ARTITECT story is one of relentless pursuit of perfection.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-facility-img-d4e5f6"
                data-strk-img="[about-mission-desc] [about-mission-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
            </div>

            <div>
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h2
                    id="about-mission-title"
                    className="font-playfair text-2xl font-bold text-brand-navy"
                  >
                    Our Mission
                  </h2>
                </div>
                <p id="about-mission-desc" className="text-brand-silver text-base leading-relaxed">
                  To engineer the world's most precise and reliable sheet metal folding machines, empowering manufacturers to achieve perfection in every fold — every time.
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h2 className="font-playfair text-2xl font-bold text-brand-navy">Our Vision</h2>
                </div>
                <p className="text-brand-silver text-base leading-relaxed">
                  To be the global benchmark for precision folding technology, driving the future of smart manufacturing through innovation, quality, and unwavering commitment to our clients.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-silver/20">
                {[
                  { value: '25+', label: 'Years' },
                  { value: '500+', label: 'Machines' },
                  { value: '40+', label: 'Countries' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-playfair text-3xl font-bold text-brand-gold">{stat.value}</p>
                    <p className="text-brand-silver text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              What Drives Us
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-brand-steel/40 border border-brand-silver/10 rounded-2xl p-8 hover:border-brand-gold/30 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-silver text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-silver/30 -translate-x-1/2" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-16 md:pl-0`}>
                    <div className="bg-brand-white rounded-2xl p-6 shadow-md border border-brand-silver/20 hover:shadow-lg transition-shadow">
                      <span className="font-playfair text-2xl font-bold text-brand-gold block mb-2">
                        {m.year}
                      </span>
                      <p className="text-brand-navy text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold border-4 border-brand-light mt-6" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-navy">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-brand-light rounded-2xl overflow-hidden shadow-md border border-brand-silver/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="font-playfair text-xl font-bold text-brand-navy mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-gold text-sm font-semibold mb-3">{member.role}</p>
                  <p id={member.descId} className="text-brand-silver text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gold">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-brand-navy mb-4">
            Partner with ARTITECT
          </h2>
          <p className="text-brand-navy/70 text-lg mb-10">
            Join 500+ manufacturers worldwide who trust ARTITECT MACHINERY for their precision folding needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-10 py-4 rounded-full hover:bg-brand-steel transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
