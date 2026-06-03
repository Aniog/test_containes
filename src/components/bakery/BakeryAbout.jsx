import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Leaf, Heart, Award } from 'lucide-react';

const values = [
  {
    icon: <Leaf className="w-6 h-6 text-sage" />,
    title: 'Local & Organic',
    desc: 'We source our flour, eggs, and dairy from farms within 50 miles of our bakery.',
  },
  {
    icon: <Heart className="w-6 h-6 text-amber" />,
    title: 'Made with Care',
    desc: 'Every item is shaped by hand. No shortcuts, no preservatives — just honest baking.',
  },
  {
    icon: <Award className="w-6 h-6 text-brown-light" />,
    title: 'Award-Winning',
    desc: 'Recognized by the City Artisan Guild as Best Bakery three years running.',
  },
];

const BakeryAbout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-amber font-playfair italic text-lg mb-2">Our Story</p>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-playfair font-bold text-brown-dark mb-6 leading-tight"
          >
            A Family Bakery Since 1987
          </h2>
          <p
            id="about-desc"
            className="text-brown leading-relaxed mb-5"
          >
            La Maison Bakery was born in a small kitchen in Lyon, France, where our
            founder Marie Dupont learned to bake alongside her grandmother. When she
            moved to the city in 1987, she brought those recipes — and that spirit —
            with her.
          </p>
          <p className="text-brown leading-relaxed mb-8">
            Today, our team of passionate bakers arrives before dawn every morning to
            prepare fresh bread, pastries, and seasonal treats. We believe that great
            baking is an act of love — and we pour that love into everything we make.
          </p>

          {/* Values */}
          <div className="flex flex-col gap-5">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4">
                <div className="bg-warm-white rounded-xl p-3 shadow-sm shrink-0">
                  {v.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-brown-dark mb-1">{v.title}</h4>
                  <p className="text-brown-light text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
            <img
              alt="Baker at work in La Maison Bakery"
              data-strk-img-id="about-img-baker-e7f8g9"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-amber text-warm-white rounded-2xl p-5 shadow-lg">
            <p className="text-3xl font-playfair font-bold">37+</p>
            <p className="text-sm font-medium opacity-90">Years of Baking</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryAbout;
