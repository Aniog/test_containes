import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const teamMembers = [
  {
    name: '陈秋远',
    role: '创始人 & 创意总监',
    desc: '15年广告行业经验，曾服务多家世界500强品牌',
    imgId: 'team-img-a1b2c3',
    imgQuery: '[team-name-1] creative director advertising agency professional portrait',
  },
  {
    name: '林晓月',
    role: '品牌策略总监',
    desc: '专注品牌定位与传播策略，帮助50+品牌完成蜕变',
    imgId: 'team-img-d4e5f6',
    imgQuery: '[team-name-2] brand strategy director professional businesswoman portrait',
  },
  {
    name: '赵志强',
    role: '数字营销总监',
    desc: '精通全平台数字营销，管理过亿级广告预算',
    imgId: 'team-img-g7h8i9',
    imgQuery: '[team-name-3] digital marketing director professional businessman portrait',
  },
  {
    name: '吴雅婷',
    role: '视觉设计总监',
    desc: '国际设计大奖得主，擅长品牌视觉系统构建',
    imgId: 'team-img-j1k2l3',
    imgQuery: '[team-name-4] visual design director creative professional portrait',
  },
];

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="team" ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#E8431A] font-semibold text-sm uppercase tracking-widest">核心团队</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-2">精英团队，共创卓越</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            汇聚行业顶尖人才，每一位成员都是所在领域的专家
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => {
            const nameId = `team-name-${idx + 1}`;
            return (
              <div key={member.name} className="group text-center">
                {/* Photo */}
                <div className="relative mx-auto w-48 h-48 rounded-2xl overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={member.imgId}
                    data-strk-img={member.imgQuery}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#E8431A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 id={nameId} className="font-bold text-[#1A1A2E] text-lg">{member.name}</h3>
                <p className="text-[#E8431A] text-sm font-medium mt-0.5">{member.role}</p>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{member.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
