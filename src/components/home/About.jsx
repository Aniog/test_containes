import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, BookOpen, Globe } from 'lucide-react';

const milestones = [
  { year: '2003', event: '明远律师事务所在北京正式成立' },
  { year: '2008', event: '荣获"北京市优秀律师事务所"称号' },
  { year: '2012', event: '在上海、广州设立分所，业务全国布局' },
  { year: '2016', event: '与多家国际律所建立战略合作关系' },
  { year: '2020', event: '律师团队规模突破50人，服务客户超5000家' },
  { year: '2024', event: '荣登"中国最佳律师事务所"百强榜单' },
];

const values = [
  { icon: Award, title: '专业卓越', desc: '持续精进专业能力，以最高标准服务每一位客户' },
  { icon: Users, title: '以客为本', desc: '深入理解客户需求，提供个性化的法律解决方案' },
  { icon: BookOpen, title: '诚信守法', desc: '恪守职业道德，以诚信为本，维护法律尊严' },
  { icon: Globe, title: '开拓创新', desc: '紧跟法律前沿，不断创新服务模式和解决方案' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">关于我们</p>
          <h2 className="font-serif font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-5">
            二十年专业积淀
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                alt="明远律师事务所办公室"
                data-strk-img-id="about-office-img-h7i8j9"
                data-strk-img="[about-title] law firm office professional"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-navy/5 rounded-lg -z-10" />
          </div>

          {/* Text */}
          <div>
            <h3 id="about-title" className="font-serif font-bold text-navy text-2xl md:text-3xl mb-6 leading-snug">
              以专业守护权益，以诚信赢得信任
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              明远律师事务所成立于2003年，是一家专注于商事法律服务的综合性律师事务所。
              经过二十余年的发展，我们已成长为在全国具有重要影响力的律师事务所之一。
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              我们拥有一支由50余名专业律师组成的精英团队，在商事诉讼、公司法务、知识产权、
              刑事辩护等多个领域积累了丰富的实践经验，为数千家企业和个人提供了高质量的法律服务。
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-gold/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm mb-1">{v.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="font-serif font-bold text-navy text-2xl text-center mb-12">发展历程</h3>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-cream rounded-lg p-5 border border-gray-100">
                      <span className="text-gold font-bold font-serif text-lg">{m.year}</span>
                      <p className="text-navy text-sm mt-1 font-medium">{m.event}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="hidden md:flex w-4 h-4 bg-gold rounded-full border-4 border-white shadow-md flex-shrink-0 relative z-10" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
