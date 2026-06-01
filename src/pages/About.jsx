import { useEffect, useRef } from 'react';
import { Microscope, Eye, Globe, BookOpen, Users, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '../components/layout/Layout';

const team = [
  {
    id: 'dr-chen',
    titleId: 'about-team-chen-title',
    descId: 'about-team-chen-desc',
    imgId: 'about-team-chen-img-a1b2c3',
    name: 'Dr. Elena Chen',
    role: 'Lead Microscopist',
    bio: 'Specialist in electron microscopy with 15 years studying marine microorganisms.',
  },
  {
    id: 'dr-okafor',
    titleId: 'about-team-okafor-title',
    descId: 'about-team-okafor-desc',
    imgId: 'about-team-okafor-img-d4e5f6',
    name: 'Dr. James Okafor',
    role: 'Microbiologist',
    bio: 'Expert in bacterial ecology and the role of microbes in climate regulation.',
  },
  {
    id: 'dr-silva',
    titleId: 'about-team-silva-title',
    descId: 'about-team-silva-desc',
    imgId: 'about-team-silva-img-g7h8i9',
    name: 'Dr. Sofia Silva',
    role: 'Science Communicator',
    bio: 'Bridges the gap between cutting-edge research and public understanding.',
  },
];

const values = [
  { icon: Eye, title: 'Curiosity', desc: 'We believe the most profound discoveries begin with a simple question: what is that?' },
  { icon: Globe, title: 'Accessibility', desc: 'Science belongs to everyone. We make microscopic wonders understandable and beautiful.' },
  { icon: BookOpen, title: 'Accuracy', desc: 'Every image and fact is verified by our team of scientists and researchers.' },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of scientists and photographers' },
  { year: '2020', event: 'Launched our first interactive microscopy gallery with 500 images' },
  { year: '2022', event: 'Partnered with 12 universities across 6 countries' },
  { year: '2024', event: 'Reached 2 million visitors and launched educational programs' },
  { year: '2026', event: 'Expanded to cover extremophiles and astrobiology' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <div className="relative py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            data-strk-bg-id="about-hero-bg-x1y2z3"
            data-strk-bg="[about-hero-subtitle] [about-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 z-10 bg-gray-950/80" />
          <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
            <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Our Story</span>
            <h1 id="about-hero-title" className="text-5xl md:text-7xl font-black text-white mt-3 mb-6">
              About MicroCosmos
            </h1>
            <p id="about-hero-subtitle" className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We are scientists, photographers, and storytellers united by a single mission: to reveal the breathtaking beauty of the world too small to see.
            </p>
          </div>
        </div>

        {/* Mission */}
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">Mission</span>
              <h2 id="about-mission-title" className="text-4xl font-bold text-white mt-2 mb-6">
                Making the Invisible Visible
              </h2>
              <p id="about-mission-desc" className="text-gray-400 leading-relaxed text-lg mb-6">
                MicroCosmos was born from a simple observation: the most extraordinary life on Earth is invisible to the naked eye. Bacteria that shaped our atmosphere, fungi that connect forests, crystals that form in seconds — these wonders go unseen by most people.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                We use state-of-the-art microscopy to capture these hidden worlds and share them with everyone — from curious children to professional researchers.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                alt="Microscopy laboratory"
                data-strk-img-id="about-mission-img-b4c5d6"
                data-strk-img="[about-mission-desc] [about-mission-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-900/40 border-y border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">What We Stand For</span>
              <h2 className="text-4xl font-bold text-white mt-2">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-widest">The People</span>
            <h2 id="about-team-title" className="text-4xl font-bold text-white mt-2">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <article key={member.id} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all group">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] [about-team-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-teal-400 text-sm font-medium mb-3">{member.role}</p>
                  <p id={member.descId} className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-900/40 border-y border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">History</span>
              <h2 className="text-4xl font-bold text-white mt-2">Our Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-teal-500/50 flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-teal-400 text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex-1">
                      <span className="text-teal-400 text-xs font-bold">{m.year}</span>
                      <p className="text-gray-300 text-sm mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
