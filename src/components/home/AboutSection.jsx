import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="py-24 bg-fanta-light">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-fanta-orange/20 rounded-3xl" />
            <img
              data-strk-img-id="about-main-img-v4w5x6"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Fanta history and story"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
            {/* Year badge */}
            <div className="absolute -bottom-6 -right-6 bg-fanta-orange text-white font-poppins font-black text-2xl rounded-2xl px-6 py-4 shadow-xl">
              Since 1940
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block bg-fanta-orange/10 text-fanta-orange font-poppins font-semibold text-sm rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
              Our Story
            </span>
            <h2
              id="about-title"
              className="font-poppins font-black text-4xl md:text-5xl text-fanta-dark mb-6 leading-tight"
            >
              Born from Creativity,<br />
              <span className="text-fanta-orange">Built for Fun</span>
            </h2>
            <p
              id="about-desc"
              className="font-poppins text-gray-600 text-lg leading-relaxed mb-6"
            >
              Fanta was born in 1940 out of necessity and ingenuity. What started as a creative
              solution became the world's most beloved fruit-flavored soda — a symbol of joy,
              color, and the spirit of making the most of every moment.
            </p>
            <p className="font-poppins text-gray-600 text-lg leading-relaxed mb-8">
              Today, Fanta is enjoyed in over 190 countries with more than 100 unique flavors,
              each crafted to capture the vibrant essence of fresh fruit and the energy of youth.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: '1940', event: 'Fanta is created in Germany' },
                { year: '1955', event: 'Acquired by The Coca-Cola Company' },
                { year: '1970s', event: 'Global expansion begins' },
                { year: 'Today', event: '190+ countries, 100+ flavors' },
              ].map((item) => (
                <div key={item.year} className="flex items-center gap-4">
                  <span className="bg-fanta-orange text-white font-poppins font-bold text-xs rounded-full px-3 py-1 whitespace-nowrap">
                    {item.year}
                  </span>
                  <span className="font-poppins text-gray-700 font-medium">{item.event}</span>
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
