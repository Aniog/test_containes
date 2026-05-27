import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Users, BookOpen, Award } from 'lucide-react';

const team = [
  { id: 'team-1', imgId: 'about-team1-q1w2e3', name: 'Dr. Elena Vasquez', role: 'Lead Microbiologist', bio: 'Specializes in electron microscopy and bacterial imaging with 15 years of research experience.' },
  { id: 'team-2', imgId: 'about-team2-r4t5y6', name: 'Prof. James Okafor', role: 'Cell Biology Director', bio: 'Pioneer in fluorescent cell imaging techniques, published in Nature and Science.' },
  { id: 'team-3', imgId: 'about-team3-u7i8o9', name: 'Dr. Mei Lin', role: 'Crystallography Expert', bio: 'Captures the geometric beauty of mineral and organic crystals under polarized light.' },
];

const milestones = [
  { year: '2018', event: 'MicroCosmos founded by a team of research scientists.' },
  { year: '2019', event: 'First 1,000 images published online, reaching 50,000 visitors.' },
  { year: '2021', event: 'Partnership with 12 international research institutions.' },
  { year: '2023', event: 'Launched interactive specimen database with 10,000+ images.' },
  { year: '2024', event: 'Awarded Best Science Communication Platform by SciComm Awards.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 pb-20 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-4">
              Our mission
            </p>
            <h1 id="about-heading" className="font-display font-bold text-4xl md:text-6xl text-microtext mb-6 leading-tight">
              Making the Invisible <span className="text-microteal">Visible</span>
            </h1>
            <p className="text-micromuted text-base md:text-lg leading-relaxed mb-6">
              MicroCosmos was born from a simple belief: the microscopic world is just as
              breathtaking as the cosmos above us. We combine rigorous science with stunning
              visual storytelling to bring this hidden universe to everyone.
            </p>
            <p className="text-micromuted text-base leading-relaxed">
              From the spiral elegance of bacteria to the geometric perfection of crystals,
              every image in our collection tells a story about the fundamental nature of life.
            </p>
          </div>
          <div className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden">
            <img
              alt="About MicroCosmos"
              className="w-full h-full object-cover"
              data-strk-img-id="about-hero-img-p0q1r2"
              data-strk-img="[about-heading] microscope laboratory science"
              data-strk-img-ratio="2x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-microbg/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-microsurface/40 py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-microtext">
              What Drives Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Microscope, title: 'Scientific Rigor', desc: 'Every specimen is verified and documented by expert researchers.' },
              { icon: Users, title: 'Open Access', desc: 'Science belongs to everyone. Our collection is free to explore.' },
              { icon: BookOpen, title: 'Education First', desc: 'We make complex biology accessible to curious minds of all ages.' },
              { icon: Award, title: 'Visual Excellence', desc: 'We never compromise on image quality or scientific accuracy.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-microsurface border border-microborder rounded-2xl p-6 text-center hover:border-microteal/40 transition-colors">
                <div className="w-12 h-12 bg-microteal/10 border border-microteal/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-microteal" />
                </div>
                <h3 className="font-display font-semibold text-microtext text-base mb-2">{title}</h3>
                <p className="text-micromuted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-12">
          <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
            The people behind the lens
          </p>
          <h2 id="team-heading" className="font-display font-bold text-3xl md:text-4xl text-microtext">
            Meet Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-microsurface border border-microborder rounded-2xl overflow-hidden hover:border-microteal/40 transition-colors">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={member.imgId}
                  data-strk-img={`[${member.id}-role] [${member.id}-name] [team-heading] scientist portrait`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-microsurface to-transparent" />
              </div>
              <div className="p-6">
                <h3 id={`${member.id}-name`} className="font-display font-semibold text-microtext text-lg mb-1">
                  {member.name}
                </h3>
                <p id={`${member.id}-role`} className="text-microteal text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-micromuted text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
            Our journey
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-microtext">
            Milestones
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-microborder md:-translate-x-1/2" />
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="shrink-0 w-12 h-12 bg-microteal/10 border-2 border-microteal rounded-full flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <span className="text-microteal text-xs font-bold">{m.year.slice(2)}</span>
                </div>
                <div className={`md:w-[45%] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-microsurface border border-microborder rounded-xl p-5 hover:border-microteal/40 transition-colors">
                    <span className="text-microteal font-bold text-sm">{m.year}</span>
                    <p className="text-micromuted text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
