import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  '超过 10 年的环保行业经验',
  '服务全球 50+ 个国家和地区',
  '100% 使用可再生能源生产',
  '获得国际绿色认证机构认可',
  '每年种植超过 100 万棵树木',
  '零废弃物生产工艺',
];

const stats = [
  { value: '10+', label: '年行业经验' },
  { value: '50+', label: '服务国家' },
  { value: '1M+', label: '种植树木' },
  { value: '99%', label: '客户满意度' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 bg-green-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-green-100">
              <div className="text-4xl font-extrabold text-green-600 mb-1">{stat.value}</div>
              <div className="text-green-700 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-green-200/40 rounded-3xl blur-2xl" />
            <img
              data-strk-img-id="about-main-img-8s9t0u"
              data-strk-img="[about-subtitle] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="关于我们"
              className="relative rounded-3xl shadow-xl w-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-extrabold">10+</div>
              <div className="text-green-100 text-sm font-medium">年环保经验</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-green-100 text-green-700 rounded-full px-4 py-1 text-sm font-semibold mb-4">
              关于我们
            </span>
            <h2 id="about-title" className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 leading-tight">
              我们的绿色使命
            </h2>
            <p id="about-subtitle" className="text-green-700 text-lg leading-relaxed mb-8">
              GreenLife 成立于 2014 年，我们相信每一个小小的绿色行动都能改变世界。
              我们致力于通过创新的环保技术和可持续的商业模式，为下一代留下一个更美好的地球。
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-green-800">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex bg-green-600 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              与我们合作
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
