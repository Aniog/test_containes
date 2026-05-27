import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Camera, BookOpen, Globe } from 'lucide-react';

const team = [
  { id: 't1', name: 'Dr. Elena Vasquez', role: 'Lead Microscopist', bio: 'Specialist in electron microscopy with 15 years studying marine microorganisms.' },
  { id: 't2', name: 'Prof. James Okafor', role: 'Microbial Ecologist', bio: 'Researches microbial communities in extreme environments from deep sea vents to polar ice.' },
  { id: 't3', name: 'Dr. Yuki Tanaka', role: 'Imaging Scientist', bio: 'Develops novel fluorescence techniques to visualize living microorganisms in real time.' },
];

const milestones = [
  { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria using a handcrafted microscope.' },
  { year: '1838', event: 'Schleiden and Schwann establish cell theory — all life is made of cells.' },
  { year: '1931', event: 'Ernst Ruska invents the electron microscope, revealing nanoscale structures.' },
  { year: '1953', event: 'Watson and Crick describe DNA structure using X-ray crystallography.' },
  { year: '1986', event: 'Atomic force microscopy allows imaging of individual atoms and molecules.' },
  { year: '2014', event: 'Super-resolution microscopy wins the Nobel Prize, breaking the diffraction limit.' },
];

export default function About() {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) ImageHelper.loadImages(strkImgConfig, heroRef.current);
    if (teamRef.current) ImageHelper.loadImages(strkImgConfig, teamRef.current);
    if (techRef.current) ImageHelper.loadImages(strkImgConfig, techRef.current);
  }, []);

  return (
    <div className="bg-cosmos-bg min-h-screen pt-24 pb-20 text-cosmos-text">
      {/* Hero */}
      <section ref={heroRef} className="relative py-24 mb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-subtitle] [about-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-cosmos-bg/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p id="about-subtitle" className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Our Mission
          </p>
          <h1 id="about-title" className="font-heading font-bold text-5xl md:text-6xl text-cosmos-text mb-6">
            About MicroCosmos
          </h1>
          <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto mb-8" />
          <p className="font-body text-cosmos-muted text-xl leading-relaxed">
            MicroCosmos is dedicated to making the invisible world visible — bringing the extraordinary beauty and complexity of microscopic life to everyone through stunning imagery and accessible science.
          </p>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Microscope, title: 'Scientific Rigor', desc: 'Every image is captured using professional-grade microscopy equipment and verified by experts.' },
            { icon: Camera, title: 'Visual Beauty', desc: 'We believe science and art are inseparable — our images are as beautiful as they are accurate.' },
            { icon: BookOpen, title: 'Education First', desc: 'Making complex microbiology accessible to students, educators, and curious minds worldwide.' },
            { icon: Globe, title: 'Global Archive', desc: 'Building the world\'s most comprehensive visual archive of microscopic life forms.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-cosmos-card border border-cosmos-border rounded-2xl p-6 hover:border-cosmos-cyan/40 transition-colors duration-300">
              <Icon className="w-8 h-8 text-cosmos-cyan mb-4" />
              <h3 className="font-heading font-bold text-lg text-cosmos-text mb-2">{title}</h3>
              <p className="font-body text-cosmos-muted text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology section */}
      <section ref={techRef} className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Our Technology
            </p>
            <h2 id="tech-title" className="font-heading font-bold text-4xl text-cosmos-text mb-6">
              Cutting-Edge Microscopy
            </h2>
            <div className="w-12 h-0.5 bg-cosmos-cyan mb-6" />
            <p id="tech-desc" className="font-body text-cosmos-muted text-base leading-relaxed mb-6">
              We use a range of advanced imaging technologies — from scanning electron microscopes (SEM) that reveal surface textures at nanometer resolution, to confocal fluorescence microscopes that illuminate living cells in vivid color.
            </p>
            <ul className="space-y-3">
              {[
                'Scanning Electron Microscopy (SEM)',
                'Transmission Electron Microscopy (TEM)',
                'Confocal Laser Scanning Microscopy',
                'Atomic Force Microscopy (AFM)',
                'Super-Resolution STED Microscopy',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-3 font-body text-cosmos-muted text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmos-cyan flex-shrink-0" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              alt="Electron microscope laboratory"
              className="w-full h-full object-cover"
              data-strk-img-id="tech-img-about"
              data-strk-img="[tech-desc] [tech-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 border border-cosmos-cyan/20 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <p className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            The People
          </p>
          <h2 id="team-title" className="font-heading font-bold text-4xl text-cosmos-text mb-4">
            Our Team
          </h2>
          <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-cyan/40 transition-colors duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`team-img-${member.id}`}
                  data-strk-img={`[team-bio-${member.id}] [team-role-${member.id}] [team-name-${member.id}] [team-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <p id={`team-role-${member.id}`} className="font-body text-cosmos-cyan text-xs font-semibold tracking-widest uppercase mb-1">
                  {member.role}
                </p>
                <h3 id={`team-name-${member.id}`} className="font-heading font-bold text-xl text-cosmos-text mb-2">
                  {member.name}
                </h3>
                <p id={`team-bio-${member.id}`} className="font-body text-cosmos-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            History of Discovery
          </p>
          <h2 className="font-heading font-bold text-4xl text-cosmos-text mb-4">
            Milestones in Microscopy
          </h2>
          <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto" />
        </div>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-cosmos-border" />
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-8 items-start">
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="font-heading font-bold text-cosmos-cyan text-sm">{m.year}</span>
                </div>
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-cosmos-cyan border-2 border-cosmos-bg" />
                </div>
                <p className="font-body text-cosmos-muted text-sm leading-relaxed pt-0.5">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
