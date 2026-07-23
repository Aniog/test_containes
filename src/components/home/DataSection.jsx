import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { BarChart2, TrendingUp, Globe, Users } from 'lucide-react';

const dataPoints = [
  { label: '全球听力损失人数', value: '15亿', sub: '占全球人口约20%', color: 'bg-cyan-500' },
  { label: '可预防的比例', value: '50%', sub: '通过预防措施可避免', color: 'bg-teal-500' },
  { label: '未获治疗的比例', value: '80%', sub: '中低收入国家尤为突出', color: 'bg-orange-500' },
  { label: '年轻人风险人群', value: '11亿', sub: '因不安全使用音频设备', color: 'bg-purple-500' },
];

const timeline = [
  { year: '出生', event: '新生儿听力筛查', desc: '早期发现先天性听力损失' },
  { year: '儿童期', event: '定期听力评估', desc: '监测语言发育和学习能力' },
  { year: '青少年', event: '安全用耳教育', desc: '建立良好的耳机使用习惯' },
  { year: '成年期', event: '职业听力保护', desc: '噪音环境中的防护措施' },
  { year: '50岁+', event: '年度听力检查', desc: '早期发现老年性听力下降' },
];

export default function DataSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="data" ref={containerRef} className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider border border-cyan-500/30">
            数据洞察
          </span>
          <h2 id="data-section-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
            全球听力健康现状
          </h2>
          <p id="data-section-subtitle" className="text-lg text-cyan-100 max-w-2xl mx-auto">
            世界卫生组织数据显示，听力损失已成为全球重大公共卫生问题。
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {dataPoints.map((dp) => (
            <div key={dp.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 text-center">
              <div className={`w-2 h-2 ${dp.color} rounded-full mx-auto mb-3`} />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{dp.value}</div>
              <div className="text-sm font-semibold text-cyan-200 mb-1">{dp.label}</div>
              <div className="text-xs text-cyan-300/70">{dp.sub}</div>
            </div>
          ))}
        </div>

        {/* Two Column: Image + Timeline */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-xl" />
            <img
              data-strk-img-id="data-section-img-n1o2p3"
              data-strk-img="[data-section-subtitle] [data-section-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="全球听力健康数据"
              className="relative w-full rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              全生命周期听力保护
            </h3>
            <div className="space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">
                      {idx + 1}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-cyan-500/30 mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      <span className="font-semibold text-white text-sm">{item.event}</span>
                    </div>
                    <p className="text-cyan-200/80 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
