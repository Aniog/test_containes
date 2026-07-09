import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mountain } from 'lucide-react';

export default function CallToAction() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="cta-bg-ski-adventure-9x8y7z"
        data-strk-bg="[cta-subtitle] [cta-title] skiing mountain adventure"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-deep-navy/50" />

      <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Mountain className="w-12 h-12 text-sky-blue mx-auto mb-6" />
        <h2 id="cta-title" className="text-4xl md:text-6xl font-black text-snow-white mb-4 leading-tight">
          准备好迎接<br />
          <span className="text-sky-blue">你的雪山之旅</span>
        </h2>
        <p id="cta-subtitle" className="text-glacier text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          加入超过10,000名滑雪爱好者的社区，获取最新雪况、专业教程和独家目的地推荐
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#destinations"
            className="bg-sky-blue text-snow-white font-bold px-10 py-4 rounded-full hover:bg-blue-500 transition text-lg shadow-lg shadow-sky-blue/30"
          >
            探索目的地
          </a>
          <a
            href="#skills"
            className="border-2 border-snow-white/60 text-snow-white font-bold px-10 py-4 rounded-full hover:bg-white/10 transition text-lg"
          >
            免费学习技巧
          </a>
        </div>
      </div>
    </section>
  );
}
