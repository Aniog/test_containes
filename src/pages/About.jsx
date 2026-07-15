import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2004', event: 'Artitect Machinery founded with a focus on precision sheet metal equipment.' },
  { year: '2008', event: 'Launched our first CNC-controlled double folding machine series.' },
  { year: '2013', event: 'Expanded to international markets, reaching 20+ countries.' },
  { year: '2018', event: 'Introduced the next-generation metal folding machine with full automation.' },
  { year: '2022', event: 'Surpassed 500 machines delivered worldwide across 40+ countries.' },
  { year: '2024', event: 'Launched our most advanced product line with Industry 4.0 integration.' },
];

const team = [
  {
    id: 'team-ceo',
    name: 'James Artitect',
    role: 'Founder & CEO',
    bio: '25 years in industrial machinery design and manufacturing.',
    imgId: 'team-ceo-img-n4o5p6',
    titleId: 'team-ceo-title',
    descId: 'team-ceo-desc',
  },
  {
    id: 'team-cto',
    name: 'Elena Kovacs',
    role: 'Chief Engineer',
    bio: 'Expert in CNC systems and precision mechanical engineering.',
    imgId: 'team-cto-img-q7r8s9',
    titleId: 'team-cto-title',
    descId: 'team-cto-desc',
  },
  {
    id: 'team-sales',
    name: 'David Park',
    role: 'Global Sales Director',
    bio: 'Connecting clients worldwide with the right machinery solutions.',
    imgId: 'team-sales-img-t1u2v3',
    titleId: 'team-sales-title',
    descId: 'team-sales-desc',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <main ref={containerRef} className="pt-20">
      {/* Page Header */}
      <section className="bg-brand-navy py-20 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Our Story</span>
          </div>
          <h1 className="text-5xl font-bold text-brand-white mb-4">About Artitect Machinery</h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Two decades of engineering excellence in sheet metal folding technology.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-brand-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              text: 'To deliver precision-engineered sheet metal folding machines that empower manufacturers to achieve superior quality and efficiency.',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              text: 'To be the world\'s most trusted name in sheet metal folding technology, setting the standard for innovation and reliability.',
            },
            {
              icon: Users,
              title: 'Our Values',
              text: 'Precision, integrity, and partnership. We build lasting relationships with our clients by delivering machines that exceed expectations.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="p-8 rounded-2xl border border-brand-light hover:border-brand-gold/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-offwhite py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Our Journey</span>
              <div className="w-6 h-px bg-brand-gold" />
            </div>
            <h2 className="text-4xl font-bold text-brand-navy">20 Years of Innovation</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-light md:-translate-x-px" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-brand-gold rounded-full -translate-x-1 md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-brand-white rounded-xl p-5 border border-brand-light shadow-sm">
                      <span className="text-brand-gold font-bold text-sm">{m.year}</span>
                      <p className="text-brand-navy text-sm mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-px bg-brand-gold" />
              <span className="text-brand-gold text-xs font-semibold uppercase tracking-widest">Leadership</span>
              <div className="w-6 h-px bg-brand-gold" />
            </div>
            <h2 className="text-4xl font-bold text-brand-navy">Meet Our Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden border-4 border-brand-light group-hover:border-brand-gold transition-colors">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 id={member.titleId} className="text-lg font-bold text-brand-navy">{member.name}</h3>
                <p className="text-brand-gold text-sm font-semibold mb-2">{member.role}</p>
                <p id={member.descId} className="text-brand-gray text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-brand-white mb-4">Ready to Work With Us?</h2>
          <p className="text-brand-gray mb-8">
            Contact our team to discuss your sheet metal folding requirements and find the perfect machine.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-8 py-4 rounded-full hover:bg-brand-gold-light transition-all"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
