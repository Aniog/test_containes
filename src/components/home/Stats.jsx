import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10M+', label: '活跃用户', suffix: '' },
  { value: '99.99', label: '服务可用率', suffix: '%' },
  { value: '150+', label: '覆盖国家', suffix: '' },
  { value: '500TB', label: '每日处理数据', suffix: '' },
];

const testimonials = [
  {
    id: 'testi-1',
    name: '张伟',
    role: 'CTO · 星辰科技',
    quote: 'BluePeak 彻底改变了我们的基础设施管理方式，部署效率提升了 300%，运维成本降低了一半。',
    imgId: 'testi-img-y7z8a9',
    titleId: 'testi-1-name',
    descId: 'testi-1-quote',
  },
  {
    id: 'testi-2',
    name: '李晓梅',
    role: '产品总监 · 云帆集团',
    quote: '安全性和稳定性是我们选择 BluePeak 的核心原因，他们的支持团队响应速度令人印象深刻。',
    imgId: 'testi-img-b1c2d3',
    titleId: 'testi-2-name',
    descId: 'testi-2-quote',
  },
  {
    id: 'testi-3',
    name: '王建国',
    role: '创始人 · 未来数字',
    quote: '从初创到规模化，BluePeak 一直是我们最可靠的技术伙伴，强烈推荐给每一位创业者。',
    imgId: 'testi-img-e4f5g6',
    titleId: 'testi-3-name',
    descId: 'testi-3-quote',
  },
];

const Stats = () => {
  const containerRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounted(true); },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="stats" ref={containerRef} className="bg-gradient-to-br from-blue-800 to-blue-600 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
                <span className="text-blue-300">{stat.suffix}</span>
              </p>
              <p className="text-blue-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 id="stats-title" className="text-3xl md:text-4xl font-bold text-white mb-3">
            客户怎么说
          </h2>
          <p id="stats-subtitle" className="text-blue-200 text-lg">
            来自全球各地企业的真实反馈
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8"
            >
              <p
                id={t.descId}
                className="text-white/90 text-sm leading-relaxed mb-6 italic"
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.descId}] [${t.titleId}] [stats-subtitle] [stats-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="80"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <p id={t.titleId} className="text-white font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-blue-300 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
