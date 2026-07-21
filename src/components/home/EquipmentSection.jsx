import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, Shield, Zap } from 'lucide-react';

const equipment = [
  {
    id: 'eq-1',
    titleId: 'eq-title-1',
    descId: 'eq-desc-1',
    imgId: 'equip-img-1-6c4a9f',
    title: '帆船主体',
    desc: '从单人小艇到多人大帆船，不同级别的帆船适合不同水平的水手。初学者推荐激光级或欧帆级。',
    features: ['轻量化船体', '稳定性强', '易于操控'],
    level: '入门 / 进阶',
  },
  {
    id: 'eq-2',
    titleId: 'eq-title-2',
    descId: 'eq-desc-2',
    imgId: 'equip-img-2-1b7e3d',
    title: '帆具系统',
    desc: '主帆、前帆、桅杆和帆桁构成帆具系统的核心。高性能帆布材料能显著提升航速和操控性。',
    features: ['碳纤维桅杆', '高强度帆布', '精密调节系统'],
    level: '进阶 / 专业',
  },
  {
    id: 'eq-3',
    titleId: 'eq-title-3',
    descId: 'eq-desc-3',
    imgId: 'equip-img-3-9d2c5e',
    title: '安全装备',
    desc: '救生衣、安全绳、头盔和急救包是每位水手的必备装备。安全永远是帆船运动的第一要务。',
    features: ['CE认证救生衣', '防水急救包', '自动充气系统'],
    level: '所有级别',
  },
  {
    id: 'eq-4',
    titleId: 'eq-title-4',
    descId: 'eq-desc-4',
    imgId: 'equip-img-4-3f8b1a',
    title: '导航仪器',
    desc: 'GPS导航仪、风速仪、罗盘和VHF无线电是现代帆船航行的重要辅助工具，确保航行安全。',
    features: ['高精度GPS', '实时风速监测', '防水设计'],
    level: '进阶 / 专业',
  },
  {
    id: 'eq-5',
    titleId: 'eq-title-5',
    descId: 'eq-desc-5',
    imgId: 'equip-img-5-7a4d2c',
    title: '水手服装',
    desc: '专业防水服、抓绒内胆、防滑帆船鞋和手套，让你在各种天气条件下保持舒适和安全。',
    features: ['防水透气面料', '防滑鞋底', '快干材质'],
    level: '所有级别',
  },
  {
    id: 'eq-6',
    titleId: 'eq-title-6',
    descId: 'eq-desc-6',
    imgId: 'equip-img-6-2e9f4b',
    title: '绳索与五金',
    desc: '高强度缆绳、滑轮组、绞盘和各类五金件是帆船操控系统的关键，直接影响帆船性能。',
    features: ['高强度纤维绳', '精密滑轮组', '耐腐蚀五金'],
    level: '进阶 / 专业',
  },
];

const levelColors = {
  '入门 / 进阶': 'bg-seafoam/20 text-seafoam',
  '进阶 / 专业': 'bg-sky/20 text-sky',
  '所有级别': 'bg-sand/30 text-ocean',
};

const EquipmentSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="equipment" ref={containerRef} className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-seafoam font-medium tracking-widest text-sm uppercase mb-3">
            装备指南
          </p>
          <h2
            id="equip-title"
            className="font-serif font-bold text-navy text-3xl md:text-4xl mb-4"
          >
            专业装备，安全出航
          </h2>
          <p
            id="equip-subtitle"
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            从船体到服装，了解帆船运动所需的核心装备，为你的航海之旅做好充分准备
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [equip-subtitle] [equip-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    id={item.titleId}
                    className="font-serif font-bold text-navy text-lg"
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[item.level] || 'bg-gray-100 text-gray-600'}`}
                  >
                    {item.level}
                  </span>
                </div>
                <p id={item.descId} className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <ul className="space-y-1.5">
                  {item.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-seafoam shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-seafoam/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-seafoam" />
              </div>
              <div className="w-12 h-12 rounded-full bg-seafoam/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-seafoam" />
              </div>
              <div className="w-12 h-12 rounded-full bg-seafoam/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-seafoam" />
              </div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-white text-xl mb-2">
                需要专业装备建议？
              </h3>
              <p className="text-white/60 text-sm">
                我们的专业教练团队可以为你提供个性化的装备选购建议
              </p>
            </div>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="shrink-0 bg-seafoam text-navy font-semibold px-8 py-3 rounded-full hover:bg-sky hover:text-white transition-colors duration-300 text-sm"
          >
            咨询专家
          </a>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
