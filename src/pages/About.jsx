import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  {
    year: '1674',
    title: 'Antonie van Leeuwenhoek',
    desc: 'Dutch scientist becomes the first person to observe living microorganisms using a self-made microscope, calling them "animalcules".',
  },
  {
    year: '1857',
    title: 'Louis Pasteur',
    desc: 'Proves that fermentation is caused by microorganisms, overturning the theory of spontaneous generation and founding modern microbiology.',
  },
  {
    year: '1928',
    title: 'Alexander Fleming',
    desc: 'Discovers penicillin after noticing that Penicillium mold kills bacteria in a petri dish — one of the most important medical discoveries in history.',
  },
  {
    year: '1953',
    title: 'Watson & Crick',
    desc: 'Describe the double helix structure of DNA, unlocking the molecular basis of life and revolutionizing our understanding of microorganisms.',
  },
  {
    year: '1977',
    title: 'Carl Woese',
    desc: 'Discovers Archaea as a third domain of life, fundamentally changing our understanding of the tree of life and microbial diversity.',
  },
  {
    year: '2003',
    title: 'Human Microbiome',
    desc: 'The Human Genome Project completion sparks the Human Microbiome Project, revealing that our bodies host trillions of microbial cells.',
  },
];

const teamValues = [
  {
    icon: '🔬',
    title: 'Scientific Accuracy',
    desc: 'Every fact, image, and description is grounded in peer-reviewed science and verified by experts in microbiology.',
  },
  {
    icon: '✨',
    title: 'Visual Wonder',
    desc: 'We believe science is beautiful. Our gallery showcases the extraordinary aesthetic of the microscopic world.',
  },
  {
    icon: '🌍',
    title: 'Accessible Education',
    desc: 'Complex microbiology made approachable for everyone — from curious students to seasoned researchers.',
  },
  {
    icon: '🧬',
    title: 'Ongoing Discovery',
    desc: 'The microbial world is constantly revealing new secrets. We stay at the frontier of microbiological research.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-space-black text-slate-200 min-h-screen">
      {/* Page Header */}
      <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-b from-emerald-900/10 to-space-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                Our Mission
              </span>
              <h1 id="about-hero-title" className="font-display font-bold text-4xl md:text-5xl text-slate-50 mb-6 leading-tight">
                Bringing the Invisible World to Life
              </h1>
              <p id="about-hero-desc" className="text-slate-400 text-lg leading-relaxed mb-6">
                MicroCosmos was born from a simple belief: the microscopic world is one of the most fascinating, beautiful, and important realms of existence — and almost nobody knows about it.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                We are a team of scientists, educators, and visual storytellers dedicated to making microbiology accessible, engaging, and awe-inspiring for everyone.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-violet-900/40 shadow-glow-violet">
                <img
                  data-strk-img-id="about-hero-img-1a2b3c"
                  data-strk-img="[about-hero-desc] [about-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscope and science"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 bg-midnight/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value) => (
              <div
                key={value.title}
                className="bg-midnight border border-violet-900/40 rounded-xl p-6 hover:border-violet-700/50 hover:shadow-glow-violet transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-display font-semibold text-base text-slate-50 mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-emerald-900/40 shadow-glow-emerald">
                <img
                  data-strk-img-id="about-science-img-4d5e6f"
                  data-strk-img="[about-science-desc] [about-science-title]"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopy science"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
                The Science
              </span>
              <h2 id="about-science-title" className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-6 leading-tight">
                Why Microbes Matter
              </h2>
              <div className="space-y-4">
                <p id="about-science-desc" className="text-slate-400 text-base leading-relaxed">
                  Microorganisms are not just curiosities — they are the foundation of all life on Earth. They cycle nutrients, produce oxygen, fix nitrogen, and form the base of every food chain.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  The human body contains approximately 38 trillion microbial cells — roughly equal to the number of human cells. This microbiome influences our immune system, mental health, and metabolism in ways we are only beginning to understand.
                </p>
                <p className="text-slate-400 text-base leading-relaxed">
                  From the deep ocean to the stratosphere, from volcanic vents to Antarctic ice, microbes have colonized every environment on Earth — and possibly beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 bg-midnight/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3 block">
              History of Discovery
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50">
              Milestones in Microbiology
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 pl-14 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-midnight border border-violet-900/40 rounded-xl p-5 hover:border-violet-700/50 transition-all duration-300">
                      <span className="text-violet-400 font-display font-bold text-lg">{item.year}</span>
                      <h3 className="font-display font-semibold text-base text-slate-50 mt-1 mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-5 w-4 h-4 rounded-full bg-violet-500 border-2 border-space-black md:-translate-x-1/2 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-50 mb-4">
            Join the Exploration
          </h2>
          <p className="text-slate-400 text-base mb-8 leading-relaxed">
            The microscopic world is waiting to be discovered. Start your journey through the organisms that make all life possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/explore"
              className="bg-violet-500 hover:bg-violet-400 text-black font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base"
            >
              Explore Organisms
            </Link>
            <Link
              to="/gallery"
              className="border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 text-base"
            >
              Browse Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
