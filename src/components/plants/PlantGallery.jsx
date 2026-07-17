import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Droplets, Sun, Thermometer, Clock } from 'lucide-react';

const categories = ['全部', '观叶植物', '香草蔬菜', '花卉', '多肉'];

const plants = [
  {
    id: 'mint',
    name: '薄荷',
    category: '香草蔬菜',
    difficulty: '简单',
    light: '中等光照',
    water: '每周换水',
    temp: '15–25°C',
    growTime: '2–3 周',
    desc: '清新芳香，适合厨房水培，可直接用于烹饪和泡茶。',
    tag: '热门',
    tagColor: 'bg-leaf-100 text-leaf-700',
    titleId: 'plant-mint-title',
    descId: 'plant-mint-desc',
    imgId: 'plant-mint-img-a1b2c3',
  },
  {
    id: 'pothos',
    name: '绿萝',
    category: '观叶植物',
    difficulty: '简单',
    light: '耐阴',
    water: '每两周换水',
    temp: '18–28°C',
    growTime: '1–2 周',
    desc: '生命力顽强，净化空气效果出色，是水培入门首选植物。',
    tag: '入门推荐',
    tagColor: 'bg-water-100 text-water-700',
    titleId: 'plant-pothos-title',
    descId: 'plant-pothos-desc',
    imgId: 'plant-pothos-img-d4e5f6',
  },
  {
    id: 'basil',
    name: '罗勒',
    category: '香草蔬菜',
    difficulty: '中等',
    light: '充足光照',
    water: '每周换水',
    temp: '20–30°C',
    growTime: '3–4 周',
    desc: '意式料理必备香草，水培罗勒叶片更加鲜嫩，香气浓郁。',
    tag: '美食搭档',
    tagColor: 'bg-soil-100 text-soil-700',
    titleId: 'plant-basil-title',
    descId: 'plant-basil-desc',
    imgId: 'plant-basil-img-g7h8i9',
  },
  {
    id: 'lucky-bamboo',
    name: '富贵竹',
    category: '观叶植物',
    difficulty: '简单',
    light: '散射光',
    water: '每两周换水',
    temp: '18–30°C',
    growTime: '持续生长',
    desc: '寓意吉祥，造型优雅，是办公桌和客厅的经典水培植物。',
    tag: '风水佳品',
    tagColor: 'bg-leaf-100 text-leaf-700',
    titleId: 'plant-lucky-bamboo-title',
    descId: 'plant-lucky-bamboo-desc',
    imgId: 'plant-lucky-bamboo-img-j1k2l3',
  },
  {
    id: 'lettuce',
    name: '生菜',
    category: '香草蔬菜',
    difficulty: '简单',
    light: '充足光照',
    water: '每周换水',
    temp: '15–22°C',
    growTime: '3–5 周',
    desc: '生长迅速，从播种到收获仅需数周，新鲜健康，随摘随吃。',
    tag: '可食用',
    tagColor: 'bg-water-100 text-water-700',
    titleId: 'plant-lettuce-title',
    descId: 'plant-lettuce-desc',
    imgId: 'plant-lettuce-img-m4n5o6',
  },
  {
    id: 'hyacinth',
    name: '风信子',
    category: '花卉',
    difficulty: '中等',
    light: '充足光照',
    water: '保持水位',
    temp: '10–20°C',
    growTime: '6–8 周',
    desc: '花色艳丽，香气馥郁，水培风信子是冬春季节的室内亮点。',
    tag: '芬芳四溢',
    tagColor: 'bg-soil-100 text-soil-700',
    titleId: 'plant-hyacinth-title',
    descId: 'plant-hyacinth-desc',
    imgId: 'plant-hyacinth-img-p7q8r9',
  },
];

const difficultyColor = {
  简单: 'bg-leaf-100 text-leaf-700',
  中等: 'bg-soil-100 text-soil-700',
  困难: 'bg-red-100 text-red-700',
};

const PlantCard = ({ plant }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
    <div className="relative overflow-hidden">
      <img
        data-strk-img-id={plant.imgId}
        data-strk-img={`[${plant.descId}] [${plant.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={plant.name}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${plant.tagColor}`}>
        {plant.tag}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between mb-2">
        <h3 id={plant.titleId} className="text-lg font-bold text-gray-900">{plant.name}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColor[plant.difficulty]}`}>
          {plant.difficulty}
        </span>
      </div>
      <p id={plant.descId} className="text-sm text-gray-600 mb-4 leading-relaxed">{plant.desc}</p>
      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <Sun className="w-3.5 h-3.5 text-soil-400" />
          <span>{plant.light}</span>
        </div>
        <div className="flex items-center gap-1">
          <Droplets className="w-3.5 h-3.5 text-water-400" />
          <span>{plant.water}</span>
        </div>
        <div className="flex items-center gap-1">
          <Thermometer className="w-3.5 h-3.5 text-red-400" />
          <span>{plant.temp}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-leaf-500" />
          <span>{plant.growTime}</span>
        </div>
      </div>
    </div>
  </div>
);

const PlantGallery = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const containerRef = useRef(null);

  const filtered = activeCategory === '全部'
    ? plants
    : plants.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-water-100 text-water-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🌿 植物图鉴
          </span>
          <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            精选水培植物
          </h2>
          <p id="gallery-subtitle" className="text-gray-600 max-w-xl mx-auto">
            从香草蔬菜到观叶花卉，每一株都经过精心挑选，适合在家中水培养殖。
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-leaf-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-leaf-50 hover:text-leaf-700 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGallery;
