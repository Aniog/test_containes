import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'electronics', title: 'Electronics & Components', desc: 'Consumer electronics, PCB assemblies, IoT devices, cables, chargers, components, and accessories.', items: 'Smart devices, PCBs, sensors, connectors, power adapters, LED lighting' },
  { id: 'home-kitchen', title: 'Home & Kitchen Products', desc: 'Housewares, kitchenware, cookware, small appliances, storage solutions, and home organization products.', items: 'Cookware, bakeware, blenders, food containers, cleaning tools, organizers' },
  { id: 'furniture', title: 'Furniture & Home Decor', desc: 'Indoor and outdoor furniture, lighting fixtures, decorative items, mirrors, and custom-designed pieces.', items: 'Tables, chairs, sofas, cabinets, lamps, wall art, rugs, outdoor furniture' },
  { id: 'textiles', title: 'Textiles & Apparel', desc: 'Garments, sportswear, fabrics, home textiles, bags, backpacks, and fashion accessories.', items: 'T-shirts, activewear, bedding, towels, curtains, tote bags, leather goods' },
  { id: 'industrial', title: 'Industrial Parts & Hardware', desc: 'CNC machined parts, metal stamping, fasteners, bearings, tools, molds, and industrial supplies.', items: 'Machined parts, screws, bolts, springs, bearings, cutting tools, injection molds' },
  { id: 'packaging', title: 'Packaging & Printing', desc: 'Custom packaging, boxes, labels, paper bags, gift boxes, and promotional print materials.', items: 'Product boxes, mailer boxes, labels, stickers, paper bags, catalogs' },
  { id: 'toys', title: 'Toys & Games', desc: 'Educational toys, plush toys, board games, outdoor play equipment, and children\'s products.', items: 'Plush toys, puzzles, building blocks, outdoor games, ride-on toys' },
  { id: 'sports', title: 'Sports & Outdoor', desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, and recreational products.', items: 'Exercise equipment, yoga mats, tents, backpacks, water bottles, camping gear' },
  { id: 'beauty', title: 'Beauty & Personal Care', desc: 'Cosmetic tools, skincare devices, personal care appliances, beauty accessories, and grooming products.', items: 'Makeup brushes, facial tools, hair dryers, nail art, bath accessories' },
  { id: 'auto', title: 'Automotive Parts & Accessories', desc: 'Aftermarket auto parts, car accessories, tools, maintenance products, and vehicle electronics.', items: 'Floor mats, seat covers, car chargers, LED lights, cleaning supplies, tools' },
  { id: 'pet', title: 'Pet Products', desc: 'Pet accessories, toys, beds, feeding supplies, grooming tools, and pet furniture.', items: 'Pet beds, toys, collars, bowls, carriers, grooming brushes, scratching posts' },
  { id: 'medical', title: 'Medical Supplies & Devices', desc: 'Disposable medical supplies, healthcare devices, rehabilitation equipment, and PPE products.', items: 'Face masks, gloves, thermometers, blood pressure monitors, first aid kits' },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h1>
            <p id="products-page-subtitle" className="mt-4 text-lg text-slate-600">
              We source across 20+ product categories. Whatever you need manufactured in China, we have the expertise to find the right supplier.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const titleId = `prod-page-title-${cat.id}`;
              const descId = `prod-page-desc-${cat.id}`;
              const itemsId = `prod-page-items-${cat.id}`;
              return (
                <div key={cat.id} className="group bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <div
                    data-strk-bg-id={`prod-page-img-${cat.id}`}
                    data-strk-bg={`[${itemsId}] [${descId}] [${titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="500"
                  >
                    <div className="aspect-[4/3] bg-slate-100" />
                  </div>
                  <div className="p-6">
                    <h3 id={titleId} className="text-lg font-semibold text-slate-900">{cat.title}</h3>
                    <p id={descId} className="mt-2 text-sm text-slate-600 leading-relaxed">{cat.desc}</p>
                    <p id={itemsId} className="mt-3 text-xs text-slate-400">
                      {cat.items}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Don't See Your Product?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We source across many more categories. If your product is not listed, contact us — we likely have experience in your industry.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white bg-brand-orange hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/25"
            >
              Tell Us About Your Product
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}