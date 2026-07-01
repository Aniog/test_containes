import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Flame, Wheat, Heart } from 'lucide-react';

const pillars = [
  { icon: Flame, title: 'Wood-Fired Oven', desc: 'Our 900°F oak-wood oven gives every pizza its signature char and smoky depth.' },
  { icon: Wheat, title: 'Stone-Ground Flour', desc: 'We mill our own heritage wheat flour weekly for breads and pizza doughs.' },
  { icon: Heart, title: 'Family Recipes', desc: 'Three generations of bakers, one unwavering commitment to honest ingredients.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-wheat py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="font-inter text-sm uppercase tracking-widest text-crust mb-3">
              Our Story
            </p>
            <h2
              id="about-title"
              className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6 leading-snug"
            >
              Baked with Tradition,<br />Served with Passion
            </h2>
            <p
              id="about-desc"
              className="font-inter text-base text-smoke leading-relaxed mb-6"
            >
              Forno & Co. was born in a small Naples-inspired kitchen in 1987. What started
              as a neighbourhood bakery has grown into a beloved destination for anyone who
              believes that great food begins with great ingredients and patient hands.
            </p>
            <p className="font-inter text-base text-smoke leading-relaxed mb-8">
              Every morning our bakers arrive before dawn to shape sourdough loaves, laminate
              croissant dough, and prepare the slow-fermented pizza bases that have made us
              famous. Nothing is rushed. Nothing is frozen.
            </p>
            <a
              href="#menu"
              className="inline-block border-2 border-ember text-ember rounded-full px-8 py-3 font-semibold font-inter hover:bg-ember hover:text-white transition-colors"
            >
              See Our Menu
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              alt="Artisan baker at work"
              data-strk-img-id="about-img-baker-d4e5f6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-ember text-white rounded-2xl px-6 py-4 shadow-lg">
              <p className="font-playfair text-3xl font-bold leading-none">37+</p>
              <p className="font-inter text-xs uppercase tracking-widest mt-1">Years of craft</p>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-3 gap-6 mt-20">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-cream rounded-2xl p-6 shadow-md">
              <div className="w-10 h-10 bg-ember/10 rounded-xl flex items-center justify-center mb-4">
                <Icon size={20} className="text-ember" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-charcoal mb-2">{title}</h3>
              <p className="font-inter text-sm text-smoke leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
