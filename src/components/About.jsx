import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const values = [
  {
    emoji: '🌱',
    title: 'Grown with Care',
    description: 'We source only the finest fruits from trusted local and sustainable farms.',
  },
  {
    emoji: '🧪',
    title: 'No Nasties',
    description: 'Zero artificial colours, flavours, or preservatives. Ever. Just real ingredients.',
  },
  {
    emoji: '♻️',
    title: 'Eco Packaging',
    description: 'Our cups and packaging are fully compostable. Good for you, good for the planet.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 px-6 md:px-12 bg-petal">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                alt="Fruit tea preparation"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-3d7b2e"
                data-strk-img="[about-subtitle] [about-title] fruit tea preparation natural ingredients"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-lg p-4 max-w-[180px]">
              <p className="font-display font-bold text-charcoal text-3xl">2019</p>
              <p className="font-body text-muted text-sm">Founded with a passion for real fruit flavours</p>
            </div>
          </div>

          {/* Text */}
          <div className="pt-8 md:pt-0">
            <span className="inline-block bg-white text-coral text-xs font-body font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
              Our Story
            </span>
            <h2 id="about-title" className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Brewed from a Love of Real Fruit
            </h2>
            <p id="about-subtitle" className="font-body text-muted text-lg leading-relaxed mb-8">
              Sip & Bloom started in a small kitchen with a simple idea: fruit tea should actually taste like fruit. No syrups, no shortcuts — just whole fruits, quality tea, and a whole lot of love.
            </p>
            <p className="font-body text-muted text-base leading-relaxed mb-10">
              Today we serve hundreds of happy customers every week, but our recipe hasn't changed. Every cup is still made fresh, every day, with the same care we put into that very first batch.
            </p>

            <div className="flex flex-col gap-5">
              {values.map(({ emoji, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{emoji}</span>
                  <div>
                    <p className="font-display font-bold text-charcoal text-base mb-1">{title}</p>
                    <p className="font-body text-muted text-sm">{description}</p>
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
