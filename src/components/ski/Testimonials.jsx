import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: '李明远',
    role: '专业滑雪教练',
    quote: 'SNOWPEAK 的技巧教程非常专业，帮助我的学员快速掌握了平行转弯技术。内容深入浅出，视频质量一流。',
    imgId: 'testimonial-1-img-c1d2e3',
    titleId: 'testimonial-1-name',
    descId: 'testimonial-1-quote',
  },
  {
    id: 'testimonial-2',
    name: '张晓雪',
    role: '滑雪爱好者 · 5年经验',
    quote: '通过这个网站发现了二世古，那里的粉雪真的改变了我对滑雪的认知。目的地推荐非常准确，信息详尽。',
    imgId: 'testimonial-2-img-f4g5h6',
    titleId: 'testimonial-2-name',
    descId: 'testimonial-2-quote',
  },
  {
    id: 'testimonial-3',
    name: '王浩天',
    role: '自由式滑雪运动员',
    quote: '装备推荐帮我省了很多时间和金钱，选到了最适合自己的雪板。雪况报告也非常及时准确，出行必备！',
    imgId: 'testimonial-3-img-i7j8k9',
    titleId: 'testimonial-3-name',
    descId: 'testimonial-3-quote',
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-deep-navy py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-sky-blue text-sm font-semibold uppercase tracking-widest mb-3">
            用户评价
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-snow-white mb-4">
            滑雪者的心声
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-frost rounded-2xl p-6 border border-white/10 hover:border-sky-blue/30 transition-all shadow-xl shadow-black/40"
            >
              <Quote className="w-8 h-8 text-sky-blue/40 mb-4" />
              <p id={t.descId} className="text-glacier text-base leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt={t.name}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${t.titleId}] portrait person`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="80"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-blue/30"
                />
                <div>
                  <div id={t.titleId} className="text-snow-white font-bold text-sm">{t.name}</div>
                  <div className="text-glacier text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
