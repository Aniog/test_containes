import { useEffect, useRef } from 'react';
import { Microscope, BookOpen, Users, Award, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Elena Chen',
    role: 'Lead Microbiologist',
    bio: 'PhD in Microbiology from MIT. 15 years studying extremophile bacteria in deep-sea hydrothermal vents.',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'team-chen-img-a1b2',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. James Okafor',
    role: 'Electron Microscopist',
    bio: 'Specialist in scanning and transmission electron microscopy. Has imaged over 2,000 unique microbial species.',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'team-okafor-img-c3d4',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Priya Patel',
    role: 'Virologist',
    bio: 'Expert in viral structure and replication. Contributed to research on novel antiviral therapies at Johns Hopkins.',
    titleId: 'team-patel-title',
    descId: 'team-patel-desc',
    imgId: 'team-patel-img-e5f6',
  },
  {
    id: 'dr-nakamura',
    name: 'Dr. Kenji Nakamura',
    role: 'Cell Biologist',
    bio: 'Focuses on fluorescence microscopy and live-cell imaging. Pioneer in visualizing cellular dynamics in real time.',
    titleId: 'team-nakamura-title',
    descId: 'team-nakamura-desc',
    imgId: 'team-nakamura-img-g7h8',
  },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of research scientists' },
  { year: '2019', event: 'First public gallery launched with 500 microscopy images' },
  { year: '2020', event: 'Partnered with 12 universities for research collaboration' },
  { year: '2021', event: 'Launched interactive organism database with 1,000+ entries' },
  { year: '2022', event: 'Reached 1 million visitors and launched educational programs' },
  { year: '2023', event: 'Introduced AI-powered microscopy image analysis tools' },
  { year: '2024', event: 'Expanded to cover synthetic biology and nanotechnology' },
  { year: '2026', event: 'Celebrating 8 years of exploring the invisible world' },
];

const values = [
  {
    icon: Microscope,
    title: 'Scientific Rigor',
    description: 'Every piece of content is reviewed by domain experts and backed by peer-reviewed research.',
  },
  {
    icon: BookOpen,
    title: 'Open Education',
    description: 'We believe knowledge about the microscopic world should be accessible to everyone, everywhere.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our community of scientists, educators, and enthusiasts shapes the direction of our research.',
  },
  {
    icon: Award,
    title: 'Visual Excellence',
    description: 'We partner with the world\'s leading microscopists to bring you the highest quality imagery.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
            Our Story
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mb-4">
            About <span className="gradient-text">MicroCosmos</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            We are a team of scientists, educators, and visual storytellers dedicated to revealing the extraordinary complexity of life at its smallest scale.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-cyan-900/40">
              <img
                data-strk-img-id="about-mission-img-a1b2"
                data-strk-img="[about-mission-desc] [about-mission-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Scientists at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Research Laboratory · 2026
                </span>
              </div>
            </div>

            <div>
              <h2
                id="about-mission-title"
                className="font-heading font-bold text-3xl md:text-4xl text-slate-50 mb-6"
              >
                Our Mission: Making the Invisible Visible
              </h2>
              <p
                id="about-mission-desc"
                className="text-slate-400 leading-relaxed mb-4"
              >
                MicroCosmos was born from a simple belief: the microscopic world is one of the most fascinating and important frontiers of human knowledge, yet it remains largely invisible to most people.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                We bridge the gap between cutting-edge scientific research and public understanding by creating visually stunning, scientifically accurate content about bacteria, viruses, cells, and all forms of microscopic life.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                From the ancient archaea that shaped Earth's atmosphere to the viruses that continue to challenge modern medicine, every microscopic entity has a story worth telling.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:px-8 bg-cosmos-navy/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
              What Drives Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-cosmos-navy border border-cyan-900/40 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-50 mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
              The People Behind the Lens
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
              Meet Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-cosmos-navy border border-cyan-900/40 rounded-xl overflow-hidden hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
              >
                <div className="aspect-square relative overflow-hidden bg-cosmos-dark">
                  <img
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                </div>
                <div className="p-5">
                  <h3
                    id={member.titleId}
                    className="font-heading font-semibold text-slate-50 mb-0.5"
                  >
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
                    {member.role}
                  </p>
                  <p
                    id={member.descId}
                    className="text-slate-400 text-sm leading-relaxed"
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 bg-cosmos-navy/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4 block">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-50">
              Milestones
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-10 md:pl-0`}>
                    <div className="bg-cosmos-navy border border-cyan-900/40 rounded-xl p-4 hover:border-cyan-400/30 transition-colors">
                      <span className="text-cyan-400 font-mono font-bold text-sm block mb-1">
                        {milestone.year}
                      </span>
                      <p className="text-slate-300 text-sm">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-cosmos-black shadow-lg shadow-cyan-400/50 mt-4" />
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-cosmos-navy border border-cyan-900/40 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-slate-50 mb-3">
              Get in Touch
            </h2>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Are you a researcher, educator, or enthusiast? We'd love to collaborate, share resources, or simply talk about the microscopic world.
            </p>
            <a
              href="mailto:hello@microcosmos.science"
              className="inline-flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              hello@microcosmos.science
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
