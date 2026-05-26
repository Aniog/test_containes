import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const LifestyleBanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-widest uppercase mb-3">
            生活方式
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            家的每个角落，都值得被精心对待
          </h2>
          <p className="text-[#6B5B4E] text-lg max-w-xl mx-auto">
            从清晨的第一缕阳光，到夜晚的温柔灯光，由妮可陪伴您生活的每一刻
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Large card */}
          <div className="lg:col-span-2 relative rounded-2xl overflow-hidden aspect-[16/9] group">
            <div
              className="absolute inset-0"
              data-strk-bg-id="lifestyle-bg-a1b2c3"
              data-strk-bg="[lifestyle-title-1] [lifestyle-sub-1]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="900"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3
                id="lifestyle-title-1"
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                温馨客厅，家的中心
              </h3>
              <p id="lifestyle-sub-1" className="text-white/80 text-sm">
                精心布置的客厅，是家人相聚的温暖港湾
              </p>
            </div>
          </div>

          {/* Small card 1 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <div
              className="absolute inset-0"
              data-strk-bg-id="lifestyle-bg-d4e5f6"
              data-strk-bg="[lifestyle-title-2] [lifestyle-sub-2]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="500"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3
                id="lifestyle-title-2"
                className="text-lg font-bold mb-0.5"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                卧室的宁静时光
              </h3>
              <p id="lifestyle-sub-2" className="text-white/75 text-xs">
                舒适寝具，给您最好的休息
              </p>
            </div>
          </div>

          {/* Small card 2 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <div
              className="absolute inset-0"
              data-strk-bg-id="lifestyle-bg-g7h8i9"
              data-strk-bg="[lifestyle-title-3] [lifestyle-sub-3]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="500"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3
                id="lifestyle-title-3"
                className="text-lg font-bold mb-0.5"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                厨房里的幸福味道
              </h3>
              <p id="lifestyle-sub-3" className="text-white/75 text-xs">
                精美餐具，让每一餐都成为仪式
              </p>
            </div>
          </div>

          {/* Small card 3 */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <div
              className="absolute inset-0"
              data-strk-bg-id="lifestyle-bg-j1k2l3"
              data-strk-bg="[lifestyle-title-4] [lifestyle-sub-4]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="500"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3
                id="lifestyle-title-4"
                className="text-lg font-bold mb-0.5"
                style={{ fontFamily: "'Noto Serif SC', serif" }}
              >
                阳台的绿意盎然
              </h3>
              <p id="lifestyle-sub-4" className="text-white/75 text-xs">
                绿植花器，为家带来自然气息
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#8B6F47] to-[#6B5035] rounded-2xl aspect-[4/3] flex flex-col items-center justify-center p-6 text-center text-white">
            <div
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              开启您的
              <br />
              家居美学之旅
            </div>
            <p className="text-white/75 text-sm mb-5">
              探索更多家居灵感
            </p>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white text-[#8B6F47] rounded-full px-6 py-2.5 text-sm font-medium hover:bg-[#FAF7F2] transition-colors"
            >
              立即探索
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleBanner;
