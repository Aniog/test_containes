import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  'ISO 9001:2015 Certified Manufacturing',
  'In-house R&D and engineering team',
  'Custom machine configurations available',
  'Comprehensive operator training programs',
  'Worldwide spare parts distribution',
  'CE & international safety compliance',
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="bg-[#F8F7F4] py-24 px-6 md:px-12" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-facility-img-5k2m9p"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0B1C2C] rounded-2xl p-6 shadow-xl border border-[#C9A84C]/20">
              <div className="text-4xl font-bold text-[#C9A84C]">25+</div>
              <div className="text-[#8A9BB0] text-sm font-medium mt-1">Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
                About ARTITECT
              </span>
            </div>

            <h2 id="about-title" className="text-3xl md:text-4xl font-bold tracking-tight text-[#0B1C2C] mb-4">
              Crafting the Future of Metal Forming
            </h2>

            <p id="about-desc" className="text-[#8A9BB0] text-base leading-relaxed mb-6">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding technology. Our machines are trusted by fabricators, manufacturers, and
              metalworking professionals across the globe — from small workshops to large-scale
              industrial operations.
            </p>

            <p className="text-[#8A9BB0] text-base leading-relaxed mb-8">
              We combine precision German engineering principles with modern CNC innovation to
              deliver machines that are not only powerful and accurate, but also intuitive and
              easy to operate — reducing training time and maximizing productivity.
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="text-[#C9A84C] flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-[#1A3A5C] text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
