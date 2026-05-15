import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Flame, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: <Flame className="w-6 h-6 text-[#E63946]" />,
    title: 'Cooked Fresh Daily',
    description: 'Every patty is hand-formed and cooked to order. No frozen shortcuts here.',
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#E63946]" />,
    title: 'Locally Sourced',
    description: 'We partner with local farms to bring you the freshest produce and meats.',
  },
  {
    icon: <Award className="w-6 h-6 text-[#E63946]" />,
    title: 'Award-Winning Recipes',
    description: 'Our secret sauces and signature stacks have won regional burger competitions.',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="Our kitchen"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-3d7b1e"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#E63946] text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>15+</p>
              <p className="text-sm font-medium">Years of Flavor</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#E63946] text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </p>
            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Born from a Passion <br /> for the Perfect Burger
            </h2>
            <p id="about-desc" className="text-[#6B6B6B] text-base leading-relaxed mb-6">
              It all started in 2009 when founder Mike Torres flipped his first burger in a tiny food truck
              parked outside a local market. Word spread fast. People lined up around the block for his
              hand-pressed patties and house-made sauces.
            </p>
            <p className="text-[#6B6B6B] text-base leading-relaxed mb-10">
              Today, Burger Joint is a beloved neighborhood staple — but the philosophy hasn't changed.
              Every burger is still made with the same care, quality ingredients, and obsessive attention
              to flavor that started it all.
            </p>

            {/* Values */}
            <div className="flex flex-col gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="bg-[#FFF8F0] rounded-xl p-3 flex-shrink-0">{v.icon}</div>
                  <div>
                    <h4 className="text-[#1A1A2E] font-semibold mb-1">{v.title}</h4>
                    <p className="text-[#6B6B6B] text-sm">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
