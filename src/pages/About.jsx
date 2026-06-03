import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Heart, Globe, BookOpen, ArrowRight, Users, Lightbulb, Target } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    titleId: 'team-chen-name',
    descId: 'team-chen-role',
    imgId: 'team-img-chen-y3z4',
    name: 'Dr. Mei Chen',
    role: 'Microbiologist & Founder',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophiles in hydrothermal vents.',
  },
  {
    id: 'dr-okafor',
    titleId: 'team-okafor-name',
    descId: 'team-okafor-role',
    imgId: 'team-img-okafor-a5b6',
    name: 'Dr. Emeka Okafor',
    role: 'Virologist',
    bio: 'Specialist in RNA viruses and emerging infectious diseases. Former WHO consultant.',
  },
  {
    id: 'sara-lindqvist',
    titleId: 'team-sara-name',
    descId: 'team-sara-role',
    imgId: 'team-img-sara-c7d8',
    name: 'Sara Lindqvist',
    role: 'Science Communicator',
    bio: 'Award-winning science writer making complex microbiology accessible to everyone.',
  },
  {
    id: 'prof-tanaka',
    titleId: 'team-tanaka-name',
    descId: 'team-tanaka-role',
    imgId: 'team-img-tanaka-e9f0',
    name: 'Prof. Hiroshi Tanaka',
    role: 'Mycologist',
    bio: 'World-leading expert on fungal networks and mycorrhizal ecology. Author of 3 books.',
  },
];

const values = [
  {
    icon: Microscope,
    title: 'Scientific Rigor',
    desc: 'Every article is reviewed by domain experts. We cite primary research and never sensationalize.',
  },
  {
    icon: Heart,
    title: 'Accessible Wonder',
    desc: 'Science should inspire everyone. We translate complex biology into stories anyone can love.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    desc: 'Microbiology is universal. We cover research from every continent and every ecosystem.',
  },
  {
    icon: BookOpen,
    title: 'Open Knowledge',
    desc: 'We believe scientific knowledge belongs to everyone. Our core content is always free.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-cosmos-bg pt-24 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-black text-cosmos-text mt-4 mb-6 leading-tight">
            We Believe the Smallest Things{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cosmos-teal to-cosmos-cyan">
              Matter Most
            </span>
          </h1>
          <p className="text-cosmos-muted text-lg leading-relaxed">
            MicroCosmos was born from a simple conviction: the invisible world beneath our feet is the most fascinating, most important, and most overlooked universe in existence. We're here to change that.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cosmos-surface border-y border-cosmos-border py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Target, value: 'Our Mission', desc: 'To make microbiology accessible, beautiful, and relevant to every person on Earth.' },
              { icon: Users, value: '500K+ Readers', desc: 'A global community of curious minds exploring the invisible world together.' },
              { icon: Lightbulb, value: '200+ Articles', desc: 'Peer-reviewed science translated into stories that inspire wonder and understanding.' },
            ].map(({ icon: Icon, value, desc }) => (
              <div key={value} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cosmos-teal" />
                </div>
                <h3 className="text-cosmos-text text-2xl font-bold mb-2">{value}</h3>
                <p className="text-cosmos-muted text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">What We Stand For</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-cosmos-surface border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-teal/40 hover:shadow-[0_0_25px_rgba(0,212,200,0.08)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-cosmos-teal" />
              </div>
              <h3 className="text-cosmos-text font-semibold text-lg mb-2">{title}</h3>
              <p className="text-cosmos-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">The People</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3">Meet the Team</h2>
          <p className="text-cosmos-muted mt-3 max-w-xl mx-auto">
            Scientists, writers, and communicators united by a passion for the microscopic world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_25px_rgba(0,212,200,0.1)] transition-all duration-300 group text-center"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  alt={member.name}
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="text-cosmos-text font-semibold text-base mb-1">
                  {member.name}
                </h3>
                <p id={member.descId} className="text-cosmos-teal text-xs font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-cosmos-muted text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="bg-cosmos-surface border border-cosmos-border rounded-3xl p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-cosmos-teal/5 blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
              Ready to Explore?
            </h2>
            <p className="text-cosmos-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Join hundreds of thousands of curious minds discovering the invisible universe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/explore"
                className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-cosmos-cyan transition-all duration-200"
              >
                Explore the Gallery <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/science"
                className="border border-cosmos-border text-cosmos-text font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/50 transition-all duration-200"
              >
                Read the Science
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
