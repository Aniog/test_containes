import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const pillars = [
  {
    id: 'sust-1',
    title: 'Recycled Metals',
    desc: 'All of our gold is recycled — sourced from existing jewelry, electronics, and industrial materials. Recycled gold is chemically identical to newly mined gold, but requires no new mining. We use 14k and 18k recycled gold across our entire collection.',
    imgId: 'sust-metals-img-a1b2',
    titleId: 'sust-metals-title',
    descId: 'sust-metals-desc',
  },
  {
    id: 'sust-2',
    title: 'Ethical Stones',
    desc: 'Every diamond and gemstone we use is conflict-free and ethically sourced. We work with suppliers who can trace each stone from mine to market. Where possible, we use lab-grown diamonds, which have the same physical and chemical properties as mined diamonds, with a fraction of the environmental impact.',
    imgId: 'sust-stones-img-c3d4',
    titleId: 'sust-stones-title',
    descId: 'sust-stones-desc',
  },
  {
    id: 'sust-3',
    title: 'Considered Packaging',
    desc: 'Our packaging is made from recycled and FSC-certified materials. The boxes are designed to be kept — to store your jewelry, to give as gifts, to hold small things that matter. Nothing is single-use. Nothing is wasted.',
    imgId: 'sust-packaging-img-e5f6',
    titleId: 'sust-packaging-title',
    descId: 'sust-packaging-desc',
  },
];

export default function SustainabilityPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20" ref={containerRef}>
      {/* Header */}
      <div className="py-20 md:py-28 px-6 md:px-10 text-center border-b border-cream-dark">
        <p className="label-caps text-gold mb-4">Our Commitment</p>
        <h1
          className="font-serif text-5xl md:text-7xl text-ink font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
        >
          Sustainability
        </h1>
        <p className="text-muted text-sm font-light mt-6 max-w-md mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
          We believe that beautiful things should not come at the cost of the world they exist in.
        </p>
      </div>

      {/* Pillars */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="space-y-20 md:space-y-28">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
            >
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <h2
                  id={pillar.titleId}
                  className="font-serif text-3xl md:text-4xl text-ink font-light mb-5"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                >
                  {pillar.title}
                </h2>
                <p
                  id={pillar.descId}
                  className="text-muted text-sm font-light leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {pillar.desc}
                </p>
              </div>
              <div className={`overflow-hidden bg-cream-dark aspect-[4/3] ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <img
                  data-strk-img-id={pillar.imgId}
                  data-strk-img={`[${pillar.descId}] [${pillar.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={pillar.title}
                  className="w-full h-full object-cover img-hover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 md:py-20 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { stat: '100%', label: 'Recycled Gold' },
            { stat: '0', label: 'Single-Use Packaging' },
            { stat: '∞', label: 'Pieces Made to Last' },
          ].map(item => (
            <div key={item.stat}>
              <p
                className="font-serif text-5xl md:text-6xl text-gold font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.stat}
              </p>
              <p className="label-caps text-muted mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
