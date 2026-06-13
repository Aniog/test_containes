import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2001', label: 'Founded in Detroit, MI' },
  { year: '2008', label: 'First CNC folder launched' },
  { year: '2015', label: 'Expanded to 20+ countries' },
  { year: '2026', label: '500+ machines delivered globally' },
];

const values = [
  'Precision-first engineering philosophy',
  'ISO 9001:2015 certified manufacturing',
  'In-house R&D and tooling design',
  'Dedicated after-sales service teams',
  'Custom machine configurations available',
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3] bg-[#1B3A5C]">
              <img
                alt="Artitect Machinery manufacturing facility"
                data-strk-img-id="about-facility-img-3k8m2p"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C8922A]/30 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#C8922A]/10 -z-10" />

            {/* Milestone strip */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 mt-8">
              {milestones.map((m) => (
                <div key={m.year} className="bg-white p-5">
                  <div
                    className="text-2xl font-bold text-[#C8922A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {m.year}
                  </div>
                  <div className="text-slate-500 text-xs font-inter mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C8922A]" />
              <span className="text-[#C8922A] text-xs tracking-[0.4em] uppercase font-inter font-medium">
                Our Story
              </span>
            </div>

            <h2
              id="about-title"
              className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              25 Years of Folding Perfection
            </h2>

            <p
              id="about-subtitle"
              className="text-slate-500 font-inter text-base leading-relaxed mb-6"
            >
              Artitect Machinery was founded with a single mission: to build the world's most precise and reliable sheet metal folding machines. From our roots in Detroit's manufacturing heartland, we've grown into a global leader trusted by fabricators, OEMs, and industrial manufacturers across six continents.
            </p>

            <p className="text-slate-500 font-inter text-base leading-relaxed mb-8">
              Every machine that leaves our facility undergoes rigorous quality testing and is backed by our industry-leading warranty and support program. We don't just sell machines — we build long-term partnerships with our customers.
            </p>

            {/* Values list */}
            <ul className="space-y-3 mb-10">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 font-inter text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-[#C8922A] shrink-0 mt-0.5" />
                  {value}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C8922A] hover:bg-[#E8B04A] text-white font-semibold px-8 py-4 tracking-wider uppercase text-sm transition-all duration-200 font-inter"
            >
              Talk to Our Engineers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
