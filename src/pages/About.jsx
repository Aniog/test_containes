import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  {
    id: 'dr-chen',
    name: 'Dr. Elena Chen',
    role: 'Lead Microbiologist',
    bio: 'Specializes in extremophile bacteria and their survival mechanisms in hostile environments.',
    titleId: 'about-team-chen-title',
    descId: 'about-team-chen-desc',
    imgId: 'about-team-chen-img-a1b2c3',
  },
  {
    id: 'dr-patel',
    name: 'Dr. Arjun Patel',
    role: 'Electron Microscopist',
    bio: 'Expert in scanning and transmission electron microscopy, capturing images at atomic resolution.',
    titleId: 'about-team-patel-title',
    descId: 'about-team-patel-desc',
    imgId: 'about-team-patel-img-d4e5f6',
  },
  {
    id: 'dr-silva',
    name: 'Dr. Maria Silva',
    role: 'Marine Biologist',
    bio: 'Studies microscopic ocean life including diatoms, radiolarians, and marine bacteria.',
    titleId: 'about-team-silva-title',
    descId: 'about-team-silva-desc',
    imgId: 'about-team-silva-img-g7h8i9',
  },
];

const milestones = [
  { year: '1665', event: 'Robert Hooke publishes Micrographia, first detailed microscopy illustrations' },
  { year: '1676', event: 'Antonie van Leeuwenhoek discovers bacteria — the first microorganisms ever seen' },
  { year: '1931', event: 'Ernst Ruska invents the electron microscope, revealing nanoscale structures' },
  { year: '1953', event: 'Watson and Crick describe DNA double helix structure using X-ray crystallography' },
  { year: '1981', event: 'Gerd Binnig and Heinrich Rohrer invent the scanning tunneling microscope' },
  { year: '2014', event: 'Super-resolution fluorescence microscopy wins the Nobel Prize in Chemistry' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050d1a] text-white min-h-screen">
      {/* Header */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          data-strk-bg-id="about-header-bg-j1k2l3"
          data-strk-bg="[about-header-title] microscopy science laboratory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a]/70 to-[#050d1a]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4">About</p>
          <h1
            id="about-header-title"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Mission
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            MicroCosmos is dedicated to making the invisible world visible — bringing the wonders of microscopic science to everyone through stunning imagery and accessible education.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-4">Why It Matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The Invisible World Shapes Everything
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Microorganisms have been shaping life on Earth for over 3.5 billion years. They cycle nutrients, drive evolution, influence climate, and make complex life possible.
              </p>
              <p>
                Yet most people have never seen a bacterium, a diatom, or a tardigrade. We believe that understanding the microscopic world is essential for understanding life itself.
              </p>
              <p>
                Through cutting-edge microscopy and scientific storytelling, MicroCosmos bridges the gap between research laboratories and curious minds everywhere.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                to="/explore"
                className="inline-block bg-[#00d4ff] text-[#050d1a] font-bold px-6 py-3 rounded-full hover:bg-[#00ffcc] transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                Start Exploring
              </Link>
              <Link
                to="/gallery"
                className="inline-block border border-[#00d4ff] text-[#00d4ff] font-semibold px-6 py-3 rounded-full hover:bg-[#00d4ff]/10 transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 md:h-[450px] border border-[rgba(0,212,255,0.15)]">
            <img
              alt="Microscopy laboratory"
              data-strk-img-id="about-mission-img-m4n5o6"
              data-strk-img="[about-header-title] microscopy laboratory science"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Scientists Behind the Lens
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl overflow-hidden border border-[rgba(0,212,255,0.1)] bg-[#0a1628] hover:border-[rgba(0,212,255,0.25)] transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    alt={member.name}
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}] scientist portrait`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={member.titleId} className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {member.name}
                  </h3>
                  <p className="text-[#00d4ff] text-sm font-medium mb-3">{member.role}</p>
                  <p id={member.descId} className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 md:px-8 border-t border-[rgba(0,212,255,0.08)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#00d4ff] text-sm font-semibold uppercase tracking-widest mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Milestones in Microscopy
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff]/50 via-[#7c3aed]/30 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="w-16 flex-shrink-0 text-right">
                    <span className="text-[#00d4ff] font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {m.year}
                    </span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
                  </div>
                  <div className="flex-1 pb-2">
                    <p className="text-slate-300 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-25"
          data-strk-bg-id="about-cta-bg-p7q8r9"
          data-strk-bg="[about-cta-title] microscopic world exploration"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/80 to-[#050d1a]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2
            id="about-cta-title"
            className="text-3xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ready to Explore the Invisible?
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Dive into our curated collection of microscopic wonders and discover the universe that exists beyond the limits of the naked eye.
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-[#00d4ff] text-[#050d1a] font-bold px-10 py-4 rounded-full hover:bg-[#00ffcc] transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,204,0.5)] text-lg"
          >
            Enter the Gallery
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
