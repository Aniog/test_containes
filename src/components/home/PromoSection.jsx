import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';

const PROMO_ITEMS = [
  {
    id: 'promo-jersey',
    title: '球衣专区',
    subtitle: '32支球队官方球衣',
    desc: '收藏您最爱球队的官方球衣，高品质面料，正版授权。',
    link: '/products?category=jersey',
    gradient: 'from-blue-900 to-blue-700',
    searchTerms: 'football jersey national team world cup',
  },
  {
    id: 'promo-trophy',
    title: '限量收藏',
    subtitle: '大力神杯 & 珍藏品',
    desc: '限量版大力神杯复制品，球星卡套装，永久珍藏。',
    link: '/products?category=trophy',
    gradient: 'from-yellow-600 to-orange-600',
    searchTerms: 'FIFA World Cup trophy gold collectible limited edition',
  },
];

export default function PromoSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-14 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROMO_ITEMS.map(item => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} min-h-[220px] flex items-center`}
          >
            <div
              className="absolute inset-0 opacity-30"
              data-strk-bg-id={`promo-bg-${item.id}`}
              data-strk-bg={item.searchTerms}
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="800"
            />
            <div className="relative z-10 p-8">
              <p className="text-white/70 text-sm font-medium mb-1">{item.subtitle}</p>
              <h3 className="text-white text-3xl font-extrabold mb-3">{item.title}</h3>
              <p className="text-white/80 text-sm mb-6 max-w-xs">{item.desc}</p>
              <Link to={item.link}>
                <Button variant="secondary" size="md">立即选购</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
