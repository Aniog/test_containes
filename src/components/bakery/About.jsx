import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '25+', label: 'Years of Baking' },
  { value: '80+', label: 'Recipes Perfected' },
  { value: '500+', label: 'Happy Customers Daily' },
  { value: '100%', label: 'Natural Ingredients' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="Artisan baker at work"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d4e5f6"
                data-strk-img="[about-subtitle] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-golden text-white rounded-2xl p-6 shadow-lg hidden md:block">
              <p className="font-serif text-4xl font-bold">25+</p>
              <p className="text-sm font-medium mt-1">Years of Craft</p>
            </div>
          </div>

          <div>
            <span className="inline-block text-golden font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </span>
            <h2
              id="about-title"
              className="font-serif text-4xl md:text-5xl font-bold text-espresso leading-tight mb-6"
            >
              Baking Traditions Since 1999
            </h2>
            <p
              id="about-subtitle"
              className="text-brown-500 text-lg leading-relaxed mb-6"
            >
              What started as a small family kitchen has grown into a beloved neighborhood bakery.
              We believe that great bread is more than food — it's a connection to heritage,
              community, and the simple joy of something made by hand.
            </p>
            <p className="text-brown-500 text-lg leading-relaxed mb-10">
              Every loaf is slow-fermented, every pastry hand-shaped, and every cake baked
              fresh each morning. We use only stone-milled flours, local dairy, and seasonal
              fruits — because quality ingredients make all the difference.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-brown-100 rounded-xl p-5">
                  <p className="font-serif text-3xl font-bold text-golden">{stat.value}</p>
                  <p className="text-brown-500 text-sm font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
