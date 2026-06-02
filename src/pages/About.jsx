import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Users, Globe, Trophy, Heart } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion First',
    description: 'Every decision we make starts with a love for cycling. We ride what we build.',
  },
  {
    icon: Trophy,
    title: 'Relentless Quality',
    description: 'We never cut corners. Every weld, every component, every finish is held to the highest standard.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our riders shape our products. We listen, iterate, and build bikes that real people love.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'From Boulder to Berlin, Velox bikes are ridden in over 40 countries around the world.',
  },
];

const team = [
  { id: 'team-1', name: 'Alex Rivera', role: 'Founder & Head of Design' },
  { id: 'team-2', name: 'Priya Nair', role: 'Lead Engineer' },
  { id: 'team-3', name: 'Tom Brandt', role: 'Pro Rider & Product Tester' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#1a1a2e] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          data-strk-bg-id="about-hero-bg-3c8f1a"
          data-strk-bg="[about-hero-title] bicycle workshop craftsmanship"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 to-[#1a1a2e]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">Our Story</span>
          <h1 id="about-hero-title" className="mt-3 text-4xl md:text-6xl font-black text-white">
            Passion Forged in<br />Every Frame
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Founded in 2009 by a group of competitive cyclists, Velox was born from a simple belief: every rider deserves a bike that feels like an extension of themselves.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden h-80 lg:h-[440px] bg-[#0f3460]">
              <img
                alt="Velox workshop"
                className="w-full h-full object-cover"
                data-strk-img-id="about-workshop-4d2b9e"
                data-strk-img="[about-story-title] bicycle workshop craftsmanship Boulder Colorado"
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div>
              <h2 id="about-story-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built in Boulder, Ridden Worldwide
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                We design and test every bike in-house, working closely with professional athletes and weekend warriors alike. Our workshop in Boulder, Colorado is where ideas become reality.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Over 15 years, we've grown from a small garage operation to a globally recognized brand — but our core philosophy hasn't changed. We obsess over every detail so you can focus on the ride.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[['2009', 'Founded'], ['40+', 'Countries'], ['12K+', 'Riders']].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-3xl font-black text-[#e94560]">{val}</div>
                    <div className="text-gray-400 text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[#16213e] rounded-2xl p-6 border border-white/10">
                <div className="w-11 h-11 bg-[#e94560]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#e94560]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#e94560] text-sm font-semibold uppercase tracking-widest">The People</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-[#0f3460] mx-auto mb-4">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`team-img-${member.id}`}
                    data-strk-img={`[team-role-${member.id}] [team-name-${member.id}] portrait professional`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div id={`team-name-${member.id}`} className="text-white font-bold text-lg">{member.name}</div>
                <div id={`team-role-${member.id}`} className="text-gray-400 text-sm mt-1">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f3460] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Ride?</h2>
          <p className="text-gray-300 text-lg mb-8">Explore our full lineup and find the bike that's built for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/bikes"
              className="inline-flex items-center justify-center gap-2 bg-[#e94560] hover:bg-[#c73652] text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Shop Bikes <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1a1a2e] font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
