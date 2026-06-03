import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const team = [
  {
    id: 'team-dr-chen',
    titleId: 'team-dr-chen-title',
    descId: 'team-dr-chen-desc',
    imgId: 'about-team-chen-a1b2c3',
    name: 'Dr. Mei Chen',
    role: 'Lead Microbiologist',
    bio: 'Specializing in extremophile bacteria and deep-sea microbial ecosystems. 15 years of field research across 4 continents.',
  },
  {
    id: 'team-dr-okafor',
    titleId: 'team-dr-okafor-title',
    descId: 'team-dr-okafor-desc',
    imgId: 'about-team-okafor-b2c3d4',
    name: 'Dr. Emeka Okafor',
    role: 'Virologist',
    bio: 'Expert in viral evolution and pandemic preparedness. Pioneered new techniques in cryo-electron microscopy imaging.',
  },
  {
    id: 'team-dr-santos',
    titleId: 'team-dr-santos-title',
    descId: 'team-dr-santos-desc',
    imgId: 'about-team-santos-c3d4e5',
    name: 'Dr. Sofia Santos',
    role: 'Mycologist',
    bio: 'Dedicated to understanding fungal networks and their role in forest communication. Author of "The Wood Wide Web."',
  },
];

const milestones = [
  { year: '2019', event: 'MicroCosmos founded with a mission to make microbiology accessible to everyone.' },
  { year: '2020', event: 'Launched our first interactive digital microscopy collection with 500+ specimens.' },
  { year: '2022', event: 'Partnered with 12 universities worldwide to expand our research database.' },
  { year: '2023', event: 'Reached 2 million visitors and launched the MicroCosmos educational program.' },
  { year: '2025', event: 'Opened our virtual reality microscopy lab, enabling immersive exploration.' },
  { year: '2026', event: 'Continuing to push the boundaries of science communication and discovery.' },
];

const values = [
  {
    icon: '🔬',
    title: 'Scientific Rigor',
    description: 'Every piece of content is reviewed by domain experts and grounded in peer-reviewed research.',
  },
  {
    icon: '🌍',
    title: 'Accessibility',
    description: 'We believe science belongs to everyone. Our content is designed to be understood by curious minds of all ages.',
  },
  {
    icon: '✨',
    title: 'Wonder',
    description: 'We approach the microscopic world with the same awe and curiosity that drives great scientific discovery.',
  },
  {
    icon: '🤝',
    title: 'Collaboration',
    description: 'We work with researchers, educators, and institutions worldwide to bring the best science to our audience.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cosmos-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cosmos-violet/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-cosmos-violet/10 border border-cosmos-violet/30 rounded-full px-4 py-1.5 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-cosmos-violet animate-pulse" />
                <span className="text-cosmos-purple text-sm font-medium">Our Story</span>
              </div>
              <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-cosmos-white mb-5 leading-tight">
                Bringing the Invisible World to Light
              </h1>
              <p id="about-hero-desc" className="text-cosmos-light text-lg leading-relaxed mb-6">
                MicroCosmos was born from a simple belief: the microscopic world is one of the most beautiful, complex, and important realms of existence — and almost nobody knows about it.
              </p>
              <p className="text-cosmos-muted text-base leading-relaxed mb-8">
                We are a team of scientists, educators, and storytellers dedicated to revealing the hidden universe that exists all around us. Through stunning imagery, rigorous science, and accessible storytelling, we invite you to see the world differently.
              </p>
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 bg-cosmos-teal text-cosmos-black font-semibold px-7 py-3 rounded-full hover:bg-cosmos-cyan transition-colors"
              >
                Start Exploring
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-cosmos-teal/5 rounded-3xl blur-2xl" />
              <img
                alt="Scientists studying microscopic life in a laboratory"
                className="relative rounded-2xl w-full object-cover aspect-[4/3] border border-cosmos-teal/20"
                data-strk-img-id="about-hero-img-d4e5f6"
                data-strk-img="[about-hero-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-24 bg-cosmos-dark/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              What We Stand For
            </h2>
            <p className="text-cosmos-muted text-base max-w-xl mx-auto">
              Our work is guided by four core principles that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl p-6 hover:border-cosmos-teal/40 hover:shadow-[0_0_25px_rgba(0,201,177,0.1)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="font-grotesk font-semibold text-cosmos-white text-base mb-2">
                  {val.title}
                </h3>
                <p className="text-cosmos-muted text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              Meet the Scientists
            </h2>
            <p className="text-cosmos-muted text-base max-w-xl mx-auto">
              Our team of world-class researchers brings decades of combined expertise in microbiology, virology, and mycology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-cosmos-navy border border-cosmos-teal/20 rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_30px_rgba(0,201,177,0.1)] transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={member.imgId}
                    data-strk-img={`[${member.descId}] [${member.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-navy/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3
                    id={member.titleId}
                    className="font-grotesk font-semibold text-cosmos-white text-lg mb-1"
                  >
                    {member.name}
                  </h3>
                  <div className="text-cosmos-teal text-sm font-medium mb-3">{member.role}</div>
                  <p id={member.descId} className="text-cosmos-muted text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-cosmos-dark/40">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              Our Journey
            </h2>
            <p className="text-cosmos-muted text-base max-w-xl mx-auto">
              From a small research blog to a global platform for microscopic discovery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cosmos-teal/20 md:-translate-x-px" />

            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cosmos-teal rounded-full border-2 border-cosmos-black md:-translate-x-1.5 mt-1.5 z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="bg-cosmos-navy border border-cosmos-teal/20 rounded-xl p-5 hover:border-cosmos-teal/40 transition-colors">
                      <div className="text-cosmos-teal font-grotesk font-bold text-lg mb-1">{m.year}</div>
                      <p className="text-cosmos-light text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="bg-cosmos-navy border border-cosmos-teal/20 rounded-3xl p-10 md:p-14 shadow-[0_0_60px_rgba(0,201,177,0.08)]">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-white mb-4">
              Join the Exploration
            </h2>
            <p className="text-cosmos-muted text-base mb-8 leading-relaxed">
              The microscopic world is waiting to be discovered. Dive into our collection of organisms, stunning imagery, and fascinating science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/explore"
                className="bg-cosmos-teal text-cosmos-black font-semibold px-8 py-3.5 rounded-full hover:bg-cosmos-cyan transition-colors"
              >
                Explore Organisms
              </Link>
              <Link
                to="/gallery"
                className="border border-cosmos-teal/40 text-cosmos-light px-8 py-3.5 rounded-full hover:border-cosmos-teal hover:text-cosmos-teal transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
