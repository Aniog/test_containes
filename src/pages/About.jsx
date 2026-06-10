import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Wrench, Users2, Factory } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader.jsx';
import { stats } from '@/data/siteData.jsx';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-paper">
      <section className="bg-steel-50 border-b border-steel-200">
        <div className="container-artitect pt-20 md:pt-28 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span
                id="about-hero-eyebrow"
                className="label-eyebrow brass-bar"
              >
                Our story
              </span>
              <h1
                id="about-hero-title"
                className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-ink-900 leading-[0.95] tracking-tight"
              >
                Two decades of
                <br />
                <span className="text-accent-600">metal, refined.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p
                id="about-hero-desc"
                className="text-lg md:text-xl text-ink-500 leading-relaxed"
              >
                ARTITECT MACHINERY was founded in 2003 by a small team of
                mechanical engineers and fabricators who believed that sheet
                metal folding machines could be both more precise and easier to
                use. We&apos;ve spent every year since proving it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div
                className="aspect-[4/5] bg-steel-100 relative overflow-hidden"
                data-strk-bg-id="about-img-5c1d3e"
                data-strk-bg="[about-section-eyebrow] [about-section-title] manufacturing engineer inspecting machinery"
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="1000"
              />
            </div>
            <div className="lg:col-span-7">
              <span
                id="about-section-eyebrow"
                className="label-eyebrow brass-bar"
              >
                The workshop
              </span>
              <h2
                id="about-section-title"
                className="mt-4 font-display font-extrabold text-3xl md:text-5xl text-ink-900 tracking-tight leading-tight"
              >
                We still hand-fit every machine that leaves our floor.
              </h2>
              <div className="mt-8 space-y-5 text-ink-500 text-lg leading-relaxed">
                <p>
                  ARTITECT&apos;s 18 000 m² facility in Suzhou is purpose-built
                  for the craft of machine making. Frames are stress-relieved in
                  our own furnaces, bearing surfaces are hand-scraped, and every
                  machine runs a 200-bend acceptance test before it ships.
                </p>
                <p>
                  That craftsmanship is paired with a modern control stack: a
                  9-inch HMI, full CNC backgauge, and an open API for
                  integration with factory MES systems. Operators get the
                  feeling of a precision instrument, not a black box.
                </p>
                <p>
                  The result is a folding machine that&apos;s accurate on day
                  one — and still accurate on year twelve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-900 text-paper py-20 md:py-28">
        <div className="container-artitect">
          <SectionHeader
            id="about-pillars"
            eyebrow="What we believe"
            title="Four ideas guide every machine we build."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-steel-700">
            {[
              {
                icon: Award,
                title: 'Precision over speed',
                body: 'A fold that ships with the panel is forever. We optimize for the angle that holds over the life of the part — not the fastest cycle time on a brochure.',
              },
              {
                icon: Wrench,
                title: 'Service as a feature',
                body: 'Every ARTITECT machine is backed by 24/7 remote diagnostics, 48-hour spare parts, and a global network of certified field engineers.',
              },
              {
                icon: Users2,
                title: 'Operators first',
                body: 'The best technology in the world is useless if operators can\'t run it. Our HMI is designed with the people who use it, every single day.',
              },
              {
                icon: Factory,
                title: 'Built to last',
                body: 'Welded steel plate frames, hardened tool steel, oversized hydraulics. We design for decades of service, not the next model year.',
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-ink-900 p-8 md:p-12 flex flex-col h-full"
                >
                  <Icon className="w-7 h-7 text-accent-500" strokeWidth={1.5} />
                  <h3 className="mt-8 font-display font-bold text-2xl md:text-3xl text-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-steel-300 text-base md:text-lg leading-relaxed flex-1">
                    {pillar.body}
                  </p>
                  <div className="mt-8 font-mono text-[10px] tracking-wider2 uppercase text-steel-300">
                    0{i + 1} / 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-steel-200 border border-steel-200">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-paper px-6 md:px-10 py-10 md:py-14"
              >
                <div className="font-display font-extrabold text-4xl md:text-5xl text-ink-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-3 label-eyebrow">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-steel-900 text-paper py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="label-eyebrow text-accent-500 brass-bar">
                Come visit
              </span>
              <h2 className="mt-6 font-display font-extrabold text-3xl md:text-5xl text-paper leading-tight tracking-tight">
                See the machines in the metal.
              </h2>
              <p className="mt-6 text-lg text-steel-200 max-w-2xl leading-relaxed">
                We host customer demos at our Suzhou facility every month. Bring
                a part you&apos;re struggling with and we&apos;ll fold it
                live, on a real machine, with your material.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link to="/contact" className="btn-accent">
                Book a factory visit
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
