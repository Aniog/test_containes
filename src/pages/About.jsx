import { Link } from 'react-router-dom';
import { Microscope, Globe, BookOpen, Users, ArrowRight, Star } from 'lucide-react';

const team = [
  {
    name: 'Dr. Elena Vasquez',
    role: 'Marine Microbiologist',
    specialty: 'Plankton & Ocean Ecosystems',
    emoji: '🌊',
    color: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
  },
  {
    name: 'Prof. James Okafor',
    role: 'Evolutionary Biologist',
    specialty: 'Microbial Evolution & Archaea',
    emoji: '🧬',
    color: 'text-cosmos-violet',
    bg: 'bg-cosmos-violet/10',
  },
  {
    name: 'Dr. Yuki Tanaka',
    role: 'Medical Microbiologist',
    specialty: 'Gut Microbiome & Human Health',
    emoji: '🔬',
    color: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
  },
  {
    name: 'Dr. Amara Singh',
    role: 'Environmental Scientist',
    specialty: 'Soil Microbiomes & Climate',
    emoji: '🌱',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
  },
];

const milestones = [
  { year: '2020', event: 'MicroCosmos project founded by a team of microbiologists and science communicators.' },
  { year: '2021', event: 'Launched our first interactive organism database with 200+ species.' },
  { year: '2022', event: 'Partnered with three universities to bring peer-reviewed content to the public.' },
  { year: '2023', event: 'Reached 1 million readers worldwide. Expanded to cover climate microbiology.' },
  { year: '2024', event: 'Launched the MicroCosmos Gallery — a visual showcase of microscopic life.' },
  { year: '2026', event: 'Redesigned platform with expanded science articles and interactive exploration tools.' },
];

const values = [
  {
    icon: BookOpen,
    title: 'Science First',
    desc: 'Every article and fact is grounded in peer-reviewed research and reviewed by domain experts.',
    color: 'text-cosmos-teal',
    bg: 'bg-cosmos-teal/10',
  },
  {
    icon: Globe,
    title: 'Accessible to All',
    desc: 'We translate complex microbiology into language that anyone can understand and appreciate.',
    color: 'text-cosmos-cyan',
    bg: 'bg-cosmos-cyan/10',
  },
  {
    icon: Star,
    title: 'Inspire Curiosity',
    desc: 'Our mission is to spark wonder about the invisible world that sustains all life on Earth.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Users,
    title: 'Community Driven',
    desc: 'Built by scientists, educators, and enthusiasts who believe science belongs to everyone.',
    color: 'text-cosmos-violet',
    bg: 'bg-cosmos-violet/10',
  },
];

const About = () => {
  return (
    <div className="bg-cosmos-bg text-[#f0f9ff] min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-cosmos-teal/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-cosmos-teal/15 border border-cosmos-teal/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-10 h-10 text-cosmos-teal" />
            </div>
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Our Story</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-5 text-[#f0f9ff]">
              About MicroCosmos
            </h1>
            <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto leading-relaxed">
              MicroCosmos was born from a simple belief: the most extraordinary life on Earth is the life we cannot see. We are a team of scientists, writers, and designers dedicated to making microbiology accessible, beautiful, and inspiring.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-cosmos-card to-cosmos-elevated border border-cosmos-border rounded-3xl p-10 md:p-14 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cosmos-teal/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Our Mission</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 mb-5 text-[#f0f9ff] leading-tight">
              Making the Invisible World Visible
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed mb-6">
              Beneath every surface, inside every living thing, and throughout every ocean and soil — there exists a universe of microscopic life that most people never think about. Yet these organisms are responsible for the air we breathe, the food we eat, and the health of our bodies.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              MicroCosmos exists to bridge the gap between cutting-edge microbiology research and public understanding. We believe that when people understand the microbial world, they develop a deeper appreciation for life itself.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-[#f0f9ff]">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-teal/30 transition">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="font-heading font-semibold text-[#f0f9ff] mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">The People</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-[#f0f9ff]">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, specialty, emoji, color, bg }) => (
              <div key={name} className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 text-center hover:border-cosmos-teal/30 transition group">
                <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform`}>
                  {emoji}
                </div>
                <h3 className="font-heading font-semibold text-[#f0f9ff] mb-1">{name}</h3>
                <p className={`text-sm font-medium mb-1 ${color}`}>{role}</p>
                <p className="text-[#475569] text-xs">{specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mt-3 text-[#f0f9ff]">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cosmos-border" />
            <div className="space-y-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 pl-14 md:pl-0 md:pr-10 md:text-right">
                    {i % 2 === 0 && (
                      <div className="bg-cosmos-card border border-cosmos-border rounded-xl p-4">
                        <span className="text-cosmos-teal font-heading font-bold text-lg">{year}</span>
                        <p className="text-[#94a3b8] text-sm mt-1 leading-relaxed">{event}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cosmos-teal border-4 border-cosmos-bg flex-shrink-0 mt-4" />
                  <div className="md:w-1/2 pl-14 md:pl-10">
                    {i % 2 !== 0 && (
                      <div className="bg-cosmos-card border border-cosmos-border rounded-xl p-4">
                        <span className="text-cosmos-teal font-heading font-bold text-lg">{year}</span>
                        <p className="text-[#94a3b8] text-sm mt-1 leading-relaxed">{event}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-cosmos-card border border-cosmos-border rounded-3xl p-12">
          <h2 className="font-heading font-bold text-3xl text-[#f0f9ff] mb-4">
            Ready to Explore the Microcosmos?
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            Start your journey into the invisible world — browse organisms, read the science, and discover the beauty of microscopic life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-cosmos-teal text-cosmos-bg font-semibold px-8 py-4 rounded-full hover:bg-[#00bfa0] transition shadow-[0_0_30px_rgba(0,212,170,0.25)]"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="border border-cosmos-border text-[#94a3b8] font-medium px-8 py-4 rounded-full hover:border-cosmos-teal/40 hover:text-[#f0f9ff] transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
