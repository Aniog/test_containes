import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Overview() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="overview" ref={containerRef} className="bg-navyBlack py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">概览</p>
            <h2 id="overview-title" className="font-serif text-3xl md:text-4xl font-bold text-warmWhite mb-6 leading-snug">
              沙漠中崛起的<br />钢铁巨人
            </h2>
            <p id="overview-desc" className="text-mutedBlue leading-relaxed mb-5">
              胡佛大坝（Hoover Dam）坐落于美国内华达州与亚利桑那州交界处的黑峡谷，横跨科罗拉多河。这座混凝土拱形重力坝建于1931年至1936年间，是20世纪最伟大的土木工程成就之一。
            </p>
            <p className="text-mutedBlue leading-relaxed mb-5">
              大坝以美国第31任总统赫伯特·胡佛命名，其建设不仅为美国西南部提供了稳定的水源和电力，更成为大萧条时期美国人民不屈精神的象征。
            </p>
            <p className="text-mutedBlue leading-relaxed">
              如今，胡佛大坝每年吸引超过700万游客，是美国最受欢迎的旅游目的地之一，也是国家历史地标和美国土木工程师学会评选的"现代土木工程七大奇迹"之一。
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
            <img
              alt="胡佛大坝全景"
              data-strk-img-id="overview-img-hd002"
              data-strk-img="[overview-desc] [overview-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navyBlack/40 to-transparent" />
            <div className="absolute bottom-4 left-4 bg-navyBlack/80 backdrop-blur-sm rounded-lg px-3 py-2">
              <p className="text-accentGold text-xs uppercase tracking-widest">黑峡谷 · 科罗拉多河</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
