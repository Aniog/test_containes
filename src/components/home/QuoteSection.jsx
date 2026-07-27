import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const quotes = [
  {
    text: '射箭不仅是一项运动，更是一种修行。每一次拉弓，都是与自己内心的对话。',
    author: '中国射箭协会',
  },
  {
    text: '当箭离弦的那一刻，所有的杂念都消失了，只剩下靶心和你的意志。',
    author: '奥运冠军语录',
  },
];

const QuoteSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-4 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="quote-bg-arch-4e9c2d"
        data-strk-bg="[quote-section-title] archery focus meditation"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-forest-dark/85" />

      <div className="relative z-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="quote-section-title" className="font-serif text-3xl md:text-4xl font-bold text-text-light">
            箭道哲学
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 hover:border-gold/50 transition-colors"
            >
              <div className="text-gold text-5xl font-serif leading-none mb-4">"</div>
              <p className="text-text-light/90 text-base leading-relaxed mb-6 italic">
                {quote.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium">{quote.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
