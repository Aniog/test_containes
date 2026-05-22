import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const HomeCallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#050d1a] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        data-strk-bg-id="cta-bg-mc009"
        data-strk-bg="[cta-title] microscopic cells bacteria colorful"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1400"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050d1a] via-[#050d1a]/80 to-[#050d1a]" />

      <div className="relative z-20 max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-xs font-medium text-[#00d4c8] uppercase tracking-widest">准备好了吗？</span>
        <h2 id="cta-title" className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
          踏上微观世界的<br />
          <span className="text-[#00d4c8]">视觉探索之旅</span>
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-10">
          我们的图库收录了数百张高清显微镜照片，带你近距离感受那些肉眼无法看见的生命奇迹。
        </p>
        <Link
          to="/explore"
          className="inline-flex items-center gap-2 bg-[#00d4c8] text-[#050d1a] font-semibold px-10 py-4 rounded-full hover:bg-[#00b8ad] transition-colors text-base"
        >
          进入探索图库 <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default HomeCallToAction;
