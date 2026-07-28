import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Linkedin, Mail } from 'lucide-react';

const lawyers = [
  {
    id: 'zhang-wei',
    name: '张伟',
    title: '创始合伙人',
    specialty: '商事诉讼 · 公司法务',
    education: '北京大学法学院 · 哈佛法学院 LLM',
    experience: '25年执业经验',
    desc: '张伟律师专注于大型商事诉讼及企业并购法律服务，曾代理多起重大上市公司股权纠纷案件，在业界享有极高声誉。',
    imgId: 'lawyer-zhang-img-d4e5f6',
    titleId: 'lawyer-zhang-title',
    descId: 'lawyer-zhang-desc',
  },
  {
    id: 'li-na',
    name: '李娜',
    title: '高级合伙人',
    specialty: '知识产权 · 涉外法律',
    education: '清华大学法学院 · 耶鲁法学院 JD',
    experience: '18年执业经验',
    desc: '李娜律师是知识产权领域的权威专家，曾为多家世界500强企业提供知识产权战略规划及跨境维权服务。',
    imgId: 'lawyer-li-img-g7h8i9',
    titleId: 'lawyer-li-title',
    descId: 'lawyer-li-desc',
  },
  {
    id: 'wang-jun',
    name: '王军',
    title: '合伙人',
    specialty: '刑事辩护 · 行政法',
    education: '中国政法大学 · 司法部优秀律师',
    experience: '15年执业经验',
    desc: '王军律师是刑事辩护领域的资深专家，曾成功代理多起重大刑事案件，以严谨的逻辑和出色的庭审技巧著称。',
    imgId: 'lawyer-wang-img-j1k2l3',
    titleId: 'lawyer-wang-title',
    descId: 'lawyer-wang-desc',
  },
  {
    id: 'chen-xiao',
    name: '陈晓',
    title: '合伙人',
    specialty: '婚姻家事 · 房产纠纷',
    education: '复旦大学法学院 · 全国优秀律师',
    experience: '12年执业经验',
    desc: '陈晓律师专注于婚姻家事及房地产法律领域，以细腻的专业服务和对客户的深切关怀赢得广泛好评。',
    imgId: 'lawyer-chen-img-m4n5o6',
    titleId: 'lawyer-chen-title',
    descId: 'lawyer-chen-desc',
  },
];

export default function Team() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="team" className="py-24 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">律师团队</p>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-5">
            专业律师团队
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            我们的律师团队由国内外顶尖法学院毕业的精英组成，每位律师都在各自领域拥有深厚的专业积累
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden rounded-lg mb-5 aspect-[3/4]">
                <img
                  alt={lawyer.name}
                  data-strk-img-id={lawyer.imgId}
                  data-strk-img={`[${lawyer.descId}] [${lawyer.titleId}] professional lawyer portrait`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
                {/* Social overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4 text-navy" />
                  </button>
                  <button className="w-9 h-9 bg-white rounded flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-navy" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 id={lawyer.titleId} className="font-serif font-bold text-navy text-xl mb-1">
                  {lawyer.name}
                </h3>
                <p className="text-gold text-sm font-semibold mb-1">{lawyer.title}</p>
                <p className="text-gray-500 text-xs mb-3">{lawyer.specialty}</p>
                <p id={lawyer.descId} className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {lawyer.desc}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400">{lawyer.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
