import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Target, Heart, Globe, ArrowRight, Mail } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  { id: 'sarah', titleId: 'team-sarah-title', descId: 'team-sarah-desc', imgId: 'team-img-sarah-a1', name: 'Dr. Sarah Chen', role: 'Microbiologist & Founder', desc: 'PhD in Microbiology from MIT. 15 years studying extremophiles and antibiotic resistance.' },
  { id: 'james', titleId: 'team-james-title', descId: 'team-james-desc', imgId: 'team-img-james-b2', name: 'Prof. James Okafor', role: 'Gut Microbiome Researcher', desc: 'Leading researcher in the gut-brain axis. Author of over 80 peer-reviewed papers.' },
  { id: 'yuki', titleId: 'team-yuki-title', descId: 'team-yuki-desc', imgId: 'team-img-yuki-c3', name: 'Dr. Yuki Tanaka', role: 'Virologist & Science Writer', desc: 'Specialist in RNA viruses and CRISPR applications. Passionate about science communication.' },
];

const values = [
  { icon: Target, color: 'teal', title: 'Scientific Accuracy', desc: 'Every article and fact on MicroCosmos is reviewed by active researchers and grounded in peer-reviewed science.' },
  { icon: Heart, color: 'cyan', title: 'Accessible Science', desc: 'We believe complex science should be understandable to everyone — not just specialists with PhDs.' },
  { icon: Globe, color: 'emerald', title: 'Global Perspective', desc: 'Microbiology affects every ecosystem and every human on Earth. We cover science from every corner of the globe.' },
];

const colorMap = {
  teal: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
};

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
            <Microscope className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-purple-400 text-sm font-medium uppercase tracking-widest">About</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 mb-6 leading-tight">
              We Make the{' '}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Invisible
              </span>{' '}
              Visible
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              MicroCosmos was founded in 2022 by a team of microbiologists, science writers, and
              educators who believed the microscopic world deserved a platform as beautiful and
              engaging as the organisms themselves.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              From the bacteria that shaped Earth's atmosphere to the viruses that rewrote our DNA,
              we explore the stories of the organisms that run the planet — and explain why they matter
              to every human alive today.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-6 py-3 rounded-full transition-all"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80">
            <img
              data-strk-img-id="about-hero-img-d4e5"
              data-strk-img="[about-hero-desc] [about-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Scientists at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            <span id="about-hero-title" className="sr-only">Scientists studying microorganisms in a laboratory</span>
            <span id="about-hero-desc" className="sr-only">Microscopy research laboratory with scientists examining samples</span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-slate-900 py-20 px-4 md:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-slate-100 mb-3">Our Values</h2>
            <p className="text-slate-400 max-w-xl mx-auto">The principles that guide everything we publish and create.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              const colors = colorMap[v.color];
              return (
                <div key={v.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${colors}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-grotesk font-semibold text-slate-100 text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-slate-100 mb-3">Meet the Team</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Scientists and storytellers dedicated to bringing the microbial world to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 group">
              <div className="relative overflow-hidden h-52">
                <img
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.descId}] [${member.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 id={member.titleId} className="font-grotesk font-semibold text-slate-100 text-lg">{member.name}</h3>
                <p className="text-teal-400 text-sm mb-2">{member.role}</p>
                <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-10 md:p-14 text-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-slate-100 mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-8">
            Have a question, a story idea, or want to collaborate? We'd love to hear from you.
          </p>
          <a
            href="mailto:hello@microcosmos.science"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all"
          >
            <Mail className="w-4 h-4" />
            hello@microcosmos.science
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
