import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Heart, Award, Clock, Leaf } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Made with Love', desc: 'Every cake is crafted by hand with genuine care and passion for baking.' },
  { icon: Award, title: 'Award-Winning Recipes', desc: 'Our recipes have been perfected over 20 years and recognized by local food critics.' },
  { icon: Clock, title: 'Fresh Daily', desc: 'We bake every morning so your cake is always at peak freshness when it arrives.' },
  { icon: Leaf, title: 'Natural Ingredients', desc: 'No artificial flavors or preservatives — just real butter, eggs, and seasonal fruits.' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 bg-[#fffaf5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="Baker at work in artisan bakery"
                data-strk-img-id="about-baker-img-v4w5x6"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-80 object-cover bg-[#f0dcc8]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-400 text-white rounded-2xl p-6 shadow-lg hidden md:block">
              <p className="font-playfair text-4xl font-bold">20+</p>
              <p className="text-sm font-medium mt-1">Years of Baking</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block text-rose-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Our Story
            </span>
            <h2 id="about-title" className="font-playfair text-4xl md:text-5xl font-bold text-[#3d2b1f] mb-4 leading-tight">
              Baked with Passion,<br />
              <span className="italic text-rose-400">Served with Joy</span>
            </h2>
            <p id="about-subtitle" className="text-[#7a5c4a] text-base leading-relaxed mb-8">
              La Douceur was born in a small family kitchen in 2004. What started as weekend baking for neighbors has grown into a beloved local bakery — but our values have never changed. We believe every celebration deserves a cake that tastes as beautiful as it looks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3d2b1f] mb-1">{title}</h4>
                    <p className="text-[#7a5c4a] text-sm leading-relaxed">{desc}</p>
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

export default About;
