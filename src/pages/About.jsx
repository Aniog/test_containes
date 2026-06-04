import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Heart, Globe2, BookOpen, Users, ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'dr-chen',
    titleId: 'team-chen-title',
    descId: 'team-chen-desc',
    imgId: 'team-img-chen-a1b2',
    name: 'Dr. Mei Chen',
    role: 'Lead Microbiologist',
    bio: 'PhD in Microbiology from MIT. 15 years researching extremophiles and deep-sea microbial communities.',
  },
  {
    id: 'dr-okafor',
    titleId: 'team-okafor-title',
    descId: 'team-okafor-desc',
    imgId: 'team-img-okafor-c3d4',
    name: 'Dr. Emeka Okafor',
    role: 'Science Communicator',
    bio: 'Former Nature editor turned science educator. Passionate about making microbiology accessible to everyone.',
  },
  {
    id: 'sara-lindqvist',
    titleId: 'team-sara-title',
    descId: 'team-sara-desc',
    imgId: 'team-img-sara-e5f6',
    name: 'Sara Lindqvist',
    role: 'Microscopy Photographer',
    bio: 'Award-winning scientific photographer specializing in electron and fluorescence microscopy imagery.',
  },
];

const values = [
  { icon: BookOpen, title: 'Science First', desc: 'Every article and profile is grounded in peer-reviewed research and expert review.', color: 'text-teal-400', bg: 'bg-teal-400/10', border: 'border-teal-400/20' },
  { icon: Heart, title: 'Accessible to All', desc: 'We believe science education should be free, clear, and engaging for everyone.', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
  { icon: Globe2, title: 'Global Perspective', desc: 'Microbes don\'t respect borders — neither does our curiosity about them.', color: 'text-violet-400', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  { icon: Users, title: 'Community Driven', desc: 'Built with input from scientists, educators, and curious learners worldwide.', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} style={{ backgroundColor: '#0a0e1a', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="pt-32 pb-20 px-6" style={{ backgroundColor: '#0f1629' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-500/40 mb-6">
            <Microscope className="w-8 h-8 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              MicroCosmos
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            We are a team of scientists, educators, and photographers on a mission to reveal the extraordinary world of microorganisms — the invisible architects of all life on Earth.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Our Mission</span>
              <h2 className="text-3xl font-bold text-slate-100 mt-3 mb-6">
                Making the Invisible World Visible
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                MicroCosmos was founded in 2022 with a simple belief: the microscopic world is the most fascinating place in the universe, and everyone deserves to explore it.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                From the bacteria in your gut to the archaea in volcanic hot springs, we document, explain, and celebrate the diversity of microbial life with scientific rigor and visual beauty.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our content is reviewed by active researchers and designed to be understood by anyone — whether you're a student, a scientist, or simply curious.
              </p>
              <div className="flex items-center gap-6">
                {[
                  { value: '500+', label: 'Species Documented' },
                  { value: '50K+', label: 'Monthly Readers' },
                  { value: '4.9', label: 'Reader Rating', icon: Star },
                ].map(({ value, label, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-2xl font-bold text-teal-400">{value}</span>
                      {Icon && <Icon className="w-4 h-4 text-amber-400 fill-amber-400" />}
                    </div>
                    <div className="text-slate-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-teal-500/5 rounded-3xl blur-2xl" />
              <div className="relative bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8">
                <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-6">
                  "The microbes that live in and around us are not just passengers — they are co-pilots of our biology, our planet, and our future."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center">
                    <Microscope className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-slate-100 font-semibold text-sm">Dr. Mei Chen</div>
                    <div className="text-slate-500 text-xs">Founder & Lead Microbiologist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0f1629' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="text-3xl font-bold text-slate-100 mt-3">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div key={title} className={`p-6 rounded-2xl border ${border} ${bg}`}>
                <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-slate-100 font-semibold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">The People</span>
            <h2 className="text-3xl font-bold text-slate-100 mt-3">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg text-center"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="text-slate-100 font-semibold text-lg">{member.name}</h3>
                  <p id={member.descId} className="text-teal-400 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: '#0f1629' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Ready to Dive In?
          </h2>
          <p className="text-slate-400 mb-8">
            Start exploring the microbial universe — from bacteria to archaea, from ocean depths to your own body.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/explore"
              className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20"
            >
              Explore Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/science"
              className="flex items-center gap-2 border border-slate-600 hover:border-teal-500/50 text-slate-300 hover:text-teal-400 font-medium px-8 py-4 rounded-xl transition-all duration-200"
            >
              Read Science
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
