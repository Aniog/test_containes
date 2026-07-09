import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ctaCards = [
  {
    id: 'cta1',
    title: 'Microscopy Techniques',
    desc: 'Dive deep into the methods scientists use to visualize the invisible world.',
    titleId: 'cta-cta1-title',
    descId: 'cta-cta1-desc',
    imgId: 'cta-img-cta1-mc033',
  },
  {
    id: 'cta2',
    title: 'Microbial Ecology',
    desc: 'Explore how microorganisms shape ecosystems and drive planetary processes.',
    titleId: 'cta-cta2-title',
    descId: 'cta-cta2-desc',
    imgId: 'cta-img-cta2-mc034',
  },
  {
    id: 'cta3',
    title: 'Human Microbiome',
    desc: 'Discover the trillions of microbes that call your body home.',
    titleId: 'cta-cta3-title',
    descId: 'cta-cta3-desc',
    imgId: 'cta-img-cta3-mc035',
  },
];

const CtaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-surface py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="cta-section-label" className="text-cosmos-cyan text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            Continue Exploring
          </p>
          <h2 id="cta-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Go Deeper
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {ctaCards.map((card) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/30 cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={card.title}
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.descId}] [${card.titleId}] [cta-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 bg-cosmos-card">
                <h3 id={card.titleId} className="font-grotesk text-cosmos-text text-xl font-semibold mb-2">
                  {card.title}
                </h3>
                <p id={card.descId} className="font-inter text-cosmos-muted text-sm leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-cosmos-cyan text-sm font-inter font-medium group-hover:gap-3 transition-all duration-200">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-cosmos-card border border-cosmos-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-grotesk text-cosmos-text text-3xl font-bold mb-3">
            Stay Curious
          </h3>
          <p className="font-inter text-cosmos-muted mb-8 max-w-md mx-auto">
            Get weekly discoveries from the microscopic world delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-cosmos-surface border border-cosmos-border rounded-full px-5 py-3 font-inter text-cosmos-text placeholder-cosmos-faint text-sm focus:outline-none focus:border-cosmos-cyan/50 transition-colors"
            />
            <button className="px-6 py-3 bg-cosmos-cyan text-cosmos-bg font-grotesk font-semibold rounded-full hover:bg-cosmos-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] whitespace-nowrap text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
