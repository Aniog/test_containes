import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '张明远',
    title: '星辰科技 CEO',
    content: '秋易广告团队专业素养极高，从品牌策略到视觉落地，每个环节都精益求精。合作后我们的品牌知名度大幅提升，强烈推荐！',
    rating: 5,
    imgId: 'test-img-a1b2c3',
    imgQuery: 'professional business executive portrait CEO',
  },
  {
    name: '李晓雯',
    title: '悦享生活 市场总监',
    content: '双十一大促活动中，秋易广告为我们制定了精准的数字营销方案，最终销售额超出预期380%，是我们最信赖的广告合作伙伴。',
    rating: 5,
    imgId: 'test-img-d4e5f6',
    imgQuery: 'professional businesswoman marketing director portrait',
  },
  {
    name: '王建国',
    title: '清风茶业 品牌总监',
    content: '秋易广告为我们拍摄的品牌TVC，完美诠释了茶文化的意境之美，播放量突破千万，品牌形象焕然一新。',
    rating: 5,
    imgId: 'test-img-g7h8i9',
    imgQuery: 'professional business man brand director portrait',
  },
  {
    name: '陈思琪',
    title: '花颜美妆 创始人',
    content: '从零到一打造品牌，秋易广告给了我们最专业的支持。社媒运营策略让我们在短短三个月内积累了15万精准粉丝。',
    rating: 5,
    imgId: 'test-img-j1k2l3',
    imgQuery: 'young businesswoman entrepreneur founder portrait',
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E8431A] font-semibold text-sm uppercase tracking-widest">客户评价</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-2">客户的信任是我们最大的荣誉</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            听听合作伙伴们怎么说
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#E8431A]/20">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={t.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={t.imgId}
                    data-strk-img={t.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="120"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1A1A2E]">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.title}</div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-[#F5A623] fill-[#F5A623]" />
                    ))}
                  </div>
                </div>
                <Quote size={32} className="text-[#E8431A]/20 flex-shrink-0" />
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{t.content}</p>
            </div>
          ))}
        </div>

        {/* Client Logos Strip */}
        <div className="mt-16">
          <p className="text-center text-gray-400 text-sm mb-8">合作品牌</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['星辰科技', '悦享生活', '清风茶业', '花颜美妆', '极光汽车', '绿城地产', '万象城', '味道江湖'].map((brand) => (
              <div
                key={brand}
                className="text-gray-300 font-bold text-lg hover:text-[#E8431A] transition-colors duration-200 cursor-default"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
