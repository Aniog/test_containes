import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { laureates } from '../data/laureates';

const medalFacts = [
  {
    title: '设计者',
    value: 'R. Tait McKenzie',
    desc: '加拿大雕塑家兼医生，设计了菲尔兹奖章的正面图案。',
  },
  {
    title: '材质',
    value: '18K 金质',
    desc: '奖章由18K黄金制成，直径约63.5毫米，重约169克。',
  },
  {
    title: '奖金',
    value: '15,000 加元',
    desc: '每位获奖者除奖章外，还将获得15,000加拿大元的奖金。',
  },
  {
    title: '颁奖频率',
    value: '每四年一次',
    desc: '菲尔兹奖在每届国际数学家大会（ICM）上颁发，每四年举办一次。',
  },
  {
    title: '年龄限制',
    value: '40岁以下',
    desc: '获奖者必须在颁奖年的1月1日前未满40岁，以鼓励年轻数学家。',
  },
  {
    title: '获奖人数',
    value: '2至4人',
    desc: '每届颁奖2至4人，自1966年起通常为4人。',
  },
];

const medalSides = [
  {
    side: '正面',
    desc: '阿基米德侧面像，周围环绕拉丁文铭文：',
    inscription: '"TRANSIRE SUUM PECTUS MUNDOQUE POTIRI"',
    translation: '（超越自我，掌握世界）',
    details: '正面还刻有获奖年份的罗马数字。',
  },
  {
    side: '背面',
    desc: '一位数学家站在地球仪旁，背景是月桂树枝，象征荣誉与智慧。',
    inscription: '"CONGREGATI EX TOTO ORBE MATHEMATICI OB SCRIPTA INSIGNIA TRIBUERE"',
    translation: '（来自全世界的数学家，为杰出著作而颁奖）',
    details: '背面还刻有获奖者的姓名。',
  },
];

export default function Medal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const fieldCounts = laureates.reduce((acc, l) => {
    acc[l.field] = (acc[l.field] || 0) + 1;
    return acc;
  }, {});

  const topFields = Object.entries(fieldCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const maxCount = topFields[0]?.[1] || 1;

  return (
    <div className="min-h-screen bg-ivory-light" ref={containerRef}>
      {/* Header */}
      <div className="bg-navy pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-3">The Medal</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ivory mb-4">
            奖章介绍
          </h1>
          <p className="text-ivory/60 max-w-2xl">
            菲尔兹奖章不仅是一枚金质奖章，更是数学精神的象征，
            承载着对人类智慧极限的追求与礼赞。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 space-y-20">

        {/* Medal visual + intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl shadow-amber-900/20">
              <img
                alt="菲尔兹奖章"
                data-strk-img-id="medal-main-img-a1b2c3"
                data-strk-img="[medal-title] Fields Medal gold mathematics award Archimedes"
                data-strk-img-ratio="1x1"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 max-w-md mx-auto rounded-full border border-gold/10 scale-110 pointer-events-none" />
          </div>

          <div>
            <h2 id="medal-title" className="font-serif text-3xl font-bold text-navy mb-6">
              数学界的"诺贝尔奖"
            </h2>
            <p className="text-navy/70 leading-relaxed mb-4">
              菲尔兹奖（Fields Medal）正式名称为"国际杰出数学发现奖"，
              由加拿大数学家约翰·查尔斯·菲尔兹（John Charles Fields，1863-1932）倡议设立。
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">
              菲尔兹在去世前将个人遗产捐出，用于设立这一奖项。他希望这个奖项不仅能表彰已有的成就，
              更能激励获奖者在未来做出更大的贡献——这也是设置年龄上限的初衷。
            </p>
            <p className="text-navy/70 leading-relaxed">
              尽管奖金远不及诺贝尔奖，但菲尔兹奖在数学界的声望无与伦比，
              被视为数学家所能获得的最高荣誉。
            </p>
          </div>
        </div>

        {/* Medal facts */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            奖章基本信息
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medalFacts.map(({ title, value, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-amber-200/40 shadow-sm">
                <p className="text-gold text-xs font-medium tracking-wider uppercase mb-2">{title}</p>
                <p className="font-serif text-2xl font-bold text-navy mb-3">{value}</p>
                <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Medal design */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-10 text-center">
            奖章设计
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medalSides.map(({ side, desc, inscription, translation, details }) => (
              <div key={side} className="bg-white rounded-xl p-8 border border-amber-200/40 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="text-gold font-serif font-bold text-sm">{side[0]}</span>
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl">{side}</h3>
                </div>
                <p className="text-navy/70 text-sm leading-relaxed mb-4">{desc}</p>
                <blockquote className="border-l-2 border-gold/40 pl-4 mb-3">
                  <p className="text-gold font-serif italic text-sm">{inscription}</p>
                  <p className="text-navy/50 text-xs mt-1">{translation}</p>
                </blockquote>
                <p className="text-navy/60 text-sm">{details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fields distribution */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4 text-center">
            获奖领域分布
          </h2>
          <p className="text-navy/50 text-center text-sm mb-10">
            菲尔兹奖涵盖了数学的广泛领域，代数几何和数论是获奖最多的方向
          </p>
          <div className="bg-white rounded-xl p-8 border border-amber-200/40 shadow-sm">
            <div className="space-y-4">
              {topFields.map(([field, count]) => (
                <div key={field} className="flex items-center gap-4">
                  <div className="w-28 text-right text-sm text-navy/70 font-medium flex-shrink-0">
                    {field}
                  </div>
                  <div className="flex-1 bg-amber-100/50 rounded-full h-6 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-end pr-3 transition-all duration-700"
                      style={{ width: `${(count / maxCount) * 100}%` }}
                    >
                      <span className="text-navy text-xs font-bold">{count}</span>
                    </div>
                  </div>
                  <div className="w-8 text-sm text-navy/50 flex-shrink-0">{count}人</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* John Charles Fields */}
        <div className="bg-navy rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="aspect-square max-w-xs mx-auto rounded-xl overflow-hidden border border-gold/20">
                <img
                  alt="约翰·查尔斯·菲尔兹"
                  data-strk-img-id="fields-portrait-d4e5f6"
                  data-strk-img="[fields-bio-title] John Charles Fields mathematician portrait historical"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-gold text-sm font-medium tracking-wider uppercase mb-3">奖项创立者</p>
              <h2 id="fields-bio-title" className="font-serif text-3xl font-bold text-ivory mb-4">
                约翰·查尔斯·菲尔兹
              </h2>
              <p className="text-ivory/70 leading-relaxed mb-4">
                约翰·查尔斯·菲尔兹（1863-1932），加拿大数学家，多伦多大学教授。
                他在代数函数理论方面做出了重要贡献，但更为人所知的是他对国际数学合作的推动。
              </p>
              <p className="text-ivory/70 leading-relaxed mb-4">
                1924年，菲尔兹在多伦多主持了国际数学家大会，这次大会的成功举办让他萌生了
                设立国际数学奖的想法。他希望这个奖项能够超越国界，促进全球数学家之间的交流与合作。
              </p>
              <p className="text-ivory/70 leading-relaxed">
                菲尔兹在1932年去世前，将个人遗产47,000美元捐出，用于设立这一奖项。
                他的遗愿在1936年得以实现，菲尔兹奖从此成为数学界最崇高的荣誉。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
