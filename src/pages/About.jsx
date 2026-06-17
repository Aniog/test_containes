import { useEffect, useRef } from 'react';
import { Award, Target, Eye, Heart, Users, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'Every machine we build must meet exacting tolerance standards. Our quality control process ensures each unit performs to specification before leaving the factory.',
  },
  {
    icon: Heart,
    title: 'Customer Commitment',
    description: 'We stand behind our machines with comprehensive warranties, responsive support, and a commitment to maximizing your production uptime.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our engineers bring decades of combined experience in sheet metal machinery design, constantly innovating to solve real manufacturing challenges.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With distributors and service partners across 40+ countries, we provide local support wherever your operations are located.',
  },
];

const milestones = [
  { year: '1998', event: 'Company founded in Shanghai with a focus on sheet metal folding technology' },
  { year: '2003', event: 'Introduced first CNC-controlled folding machine, revolutionizing local manufacturing' },
  { year: '2008', event: 'Expanded operations with new manufacturing facility (8,000 sqm)' },
  { year: '2012', event: 'Achieved ISO 9001:2008 certification and began international exports' },
  { year: '2016', event: 'Launched double folding machine product line, our most successful series' },
  { year: '2020', event: 'Opened R&D center for Industry 4.0 automation technologies' },
  { year: '2024', event: 'Expanded to 40+ countries with 200+ employees worldwide' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent-400 text-sm font-semibold tracking-wider uppercase">About Us</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
              Engineering Excellence Since 1998
            </h1>
            <p className="text-steel-300 text-lg leading-relaxed">
              From a small workshop to a global manufacturer, our story is driven by a passion 
              for precision engineering and a commitment to our customers&apos; success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-800 mb-6">Our Story</h2>
              <p className="text-steel-500 leading-relaxed mb-4">
                ARTITECT MACHINERY was founded in 1998 by a group of mechanical engineers who 
                recognized a gap in the market for high-precision, yet accessible, metal folding 
                equipment. Starting in a modest 500-square-meter facility in Shanghai, we focused 
                on perfecting the craft of sheet metal folding machine manufacturing.
              </p>
              <p className="text-steel-500 leading-relaxed mb-4">
                Through relentless innovation and a deep understanding of our customers&apos; needs, 
                we grew steadily. By 2008, we had outgrown our original facility and moved to our 
                current state-of-the-art manufacturing plant, where we design, engineer, and 
                assemble every machine that bears the ARTITECT name.
              </p>
              <p className="text-steel-500 leading-relaxed">
                Today, we employ over 200 skilled professionals and serve customers in more than 
                40 countries. Our product range has expanded from basic folders to sophisticated 
                CNC-controlled double folding machines and automated production systems. Yet our 
                founding principles remain unchanged: precision, durability, and exceptional support.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-100">
                <img
                  data-strk-img-id="about-story-m3n4o5"
                  data-strk-img="[about-story-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT factory"
                  className="w-full h-full object-cover"
                />
                <span id="about-story-title" className="hidden">ARTITECT machinery factory industrial manufacturing facility with folding machines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 mb-4">Our Values</h2>
            <p className="text-steel-500 text-lg max-w-2xl mx-auto">
              The principles that guide every decision we make and every machine we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-6 p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-brand-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-700 mb-2">{value.title}</h3>
                  <p className="text-steel-500 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-800 text-center mb-4">Our Journey</h2>
          <p className="text-steel-500 text-lg text-center max-w-2xl mx-auto mb-16">
            Key milestones in our growth from a local workshop to a global machinery manufacturer.
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white -translate-x-1/2 mt-1 z-10 shadow" />

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-2">
                      {milestone.year}
                    </span>
                    <p className="text-steel-600 leading-relaxed">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent-400">25+</p>
              <p className="text-steel-300 mt-2">Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-400">200+</p>
              <p className="text-steel-300 mt-2">Skilled Employees</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-400">40+</p>
              <p className="text-steel-300 mt-2">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent-400">3,000+</p>
              <p className="text-steel-300 mt-2">Machines Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}