import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Waves, Heart, Award, Globe, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  { name: 'Dr. Marina Kelp', role: 'Marine Biologist & Founder', bio: 'PhD in Marine Biology from Scripps Institution. 15 years studying nudibranch ecology in the Indo-Pacific.', titleId: 'team-marina-title', descId: 'team-marina-desc', imgId: 'team-marina-img-a1b2c3' },
  { name: 'Coral Reeves', role: 'Head of Aquaculture', bio: 'Expert in marine invertebrate husbandry with a decade of experience in sustainable sea slug breeding programs.', titleId: 'team-coral-title', descId: 'team-coral-desc', imgId: 'team-coral-img-d4e5f6' },
  { name: 'Finn Tidewater', role: 'Shipping & Logistics', bio: 'Specialist in live animal transport, ensuring every specimen arrives healthy and stress-free at your door.', titleId: 'team-finn-title', descId: 'team-finn-desc', imgId: 'team-finn-img-g7h8i9' },
];

const values = [
  { icon: Heart, title: 'Animal Welfare First', desc: 'Every decision we make prioritizes the health and wellbeing of our animals. We never compromise on care.' },
  { icon: Globe, title: 'Ocean Conservation', desc: '5% of every sale goes directly to coral reef restoration and marine conservation projects worldwide.' },
  { icon: Award, title: 'Scientific Excellence', desc: 'Our team of marine biologists ensures every specimen is correctly identified and cared for to the highest standard.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-seafoam min-h-screen" ref={containerRef}>
      {/* Hero */}
      <section className="bg-white border-b border-border-ocean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-ocean rounded-xl flex items-center justify-center">
                <Waves className="w-4 h-4 text-white" />
              </div>
              <span className="text-teal-ocean font-semibold text-sm uppercase tracking-wide">Our Story</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6 leading-tight">
              Bringing the Ocean's Most Extraordinary Creatures to Your Home
            </h1>
            <p className="text-slate-text text-lg leading-relaxed">
              SlugSea was founded in 2018 by marine biologist Dr. Marina Kelp after years of watching these incredible animals be misunderstood and poorly cared for in the hobby. We exist to change that — providing ethically sourced, expertly cared-for sea slugs alongside the knowledge to keep them thriving.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">What We Stand For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 border border-border-ocean text-center">
              <div className="w-14 h-14 bg-surface-alt rounded-2xl flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-teal-ocean" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
              <p className="text-slate-text leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-surface-alt"
                />
                <h3 id={member.titleId} className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-teal-ocean font-semibold text-sm mb-2">{member.role}</p>
                <p id={member.descId} className="text-slate-text text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Species Available' },
            { value: '10,000+', label: 'Happy Customers' },
            { value: '99.2%', label: 'Live Arrival Rate' },
            { value: '8 Years', label: 'In Business' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-border-ocean">
              <p className="text-3xl font-extrabold text-teal-ocean mb-1">{stat.value}</p>
              <p className="text-sm text-slate-text font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-ocean to-teal-ocean-light rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Meet Your New Favourite Animal?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Browse our collection of rare and beautiful sea slugs, all backed by our live arrival guarantee.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-white text-teal-ocean px-8 py-4 rounded-xl font-bold text-lg hover:bg-seafoam transition-colors"
          >
            Shop Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
