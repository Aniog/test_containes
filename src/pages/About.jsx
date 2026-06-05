import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, BookOpen, Globe, Heart, ArrowRight, Mail } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from '../components/layout/Layout';

const team = [
  {
    id: 'dr-chen',
    name: 'Dr. Mei Chen',
    role: 'Founder & Chief Scientist',
    bio: 'Microbiologist with 20 years of research at MIT. Passionate about making microbiology accessible to everyone.',
    titleId: 'about-team-chen-title',
    descId: 'about-team-chen-desc',
    imgId: 'about-team-chen-img-a1b2c3',
  },
  {
    id: 'dr-okafor',
    name: 'Dr. Emeka Okafor',
    role: 'Head of Research',
    bio: 'Specialist in extremophile biology and astrobiology. Believes microbial life may exist throughout the cosmos.',
    titleId: 'about-team-okafor-title',
    descId: 'about-team-okafor-desc',
    imgId: 'about-team-okafor-img-d4e5f6',
  },
  {
    id: 'sara-lindqvist',
    name: 'Sara Lindqvist',
    role: 'Science Communicator',
    bio: 'Award-winning science writer who transforms complex microbiology into stories that captivate and inspire.',
    titleId: 'about-team-sara-title',
    descId: 'about-team-sara-desc',
    imgId: 'about-team-sara-img-g7h8i9',
  },
  {
    id: 'james-park',
    name: 'James Park',
    role: 'Microscopy Photographer',
    bio: 'Pioneering microscopy artist whose images have appeared in Nature, Science, and National Geographic.',
    titleId: 'about-team-james-title',
    descId: 'about-team-james-desc',
    imgId: 'about-team-james-img-j1k2l3',
  },
];

const values = [
  { icon: Microscope, title: 'Scientific Rigor', description: 'Every article and image is reviewed by expert microbiologists to ensure accuracy and depth.' },
  { icon: BookOpen, title: 'Open Education', description: 'We believe science belongs to everyone. All our content is freely accessible, always.' },
  { icon: Globe, title: 'Global Perspective', description: 'Microbial life connects all ecosystems on Earth. We explore it from every corner of the planet.' },
  { icon: Heart, title: 'Wonder First', description: 'Before the data, there is awe. We lead with curiosity and let the science deepen the wonder.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              Our Story
            </div>
            <h1 id="about-hero-title" className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 leading-tight">
              We Make the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Invisible Visible
              </span>
            </h1>
            <p id="about-hero-desc" className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
              MicroCosmos was founded by a team of scientists, educators, and artists united by one belief: the microscopic world is the most extraordinary place in the universe — and everyone deserves to see it.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 md:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                  Our Mission
                </div>
                <h2 id="about-mission-title" className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
                  Bridging Science and Wonder
                </h2>
                <p id="about-mission-desc" className="text-slate-400 leading-relaxed mb-4">
                  The microbial world is responsible for all oxygen we breathe, the food we eat, the medicines that save lives, and the cycling of every nutrient on Earth. Yet most people have never truly seen it.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We combine cutting-edge microscopy, rigorous science, and compelling storytelling to bring this hidden universe to life — for students, scientists, and the simply curious.
                </p>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm"
                >
                  Start Exploring
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  alt="Microscopy laboratory"
                  data-strk-img-id="about-mission-img-m4n5o6"
                  data-strk-img="[about-mission-desc] [about-mission-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 md:px-8 bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                What We Stand For
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-slate-100 font-semibold text-base mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 md:px-8 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                The People
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100">Meet Our Team</h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                Scientists, writers, and artists united by a love for the invisible world.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="group bg-slate-950 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[1/1]">
                    <img
                      alt={member.name}
                      data-strk-img-id={member.imgId}
                      data-strk-img={`[${member.descId}] [${member.titleId}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 id={member.titleId} className="text-slate-100 font-semibold text-base">
                      {member.name}
                    </h3>
                    <p className="text-teal-400 text-xs font-mono mb-2">{member.role}</p>
                    <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 px-4 md:px-8 bg-slate-950">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-slate-900 border border-slate-700/50 rounded-3xl p-10 md:p-14">
              <div className="w-14 h-14 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">
                Get in Touch
              </h2>
              <p className="text-slate-400 mb-7 leading-relaxed">
                Have a question, a story idea, or want to collaborate? We'd love to hear from you.
              </p>
              <a
                href="mailto:hello@microcosmos.science"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                hello@microcosmos.science
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
