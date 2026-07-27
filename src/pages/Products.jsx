import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, sensors, consumer electronics, IoT devices, chargers, cables, and electronic accessories.',
    examples: 'PCB assemblies, LED drivers, Bluetooth modules, USB cables, power adapters, smart home devices',
    titleId: 'prod-page-title-electronics',
    descId: 'prod-page-desc-electronics',
    imgId: 'prod-page-img-electronics-a1b2',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Parts',
    desc: 'CNC machines, packaging equipment, injection molding machines, automation systems, pumps, valves, bearings, and industrial tools.',
    examples: 'CNC machined parts, injection molds, conveyor systems, hydraulic pumps, gearboxes, pneumatic components',
    titleId: 'prod-page-title-machinery',
    descId: 'prod-page-desc-machinery',
    imgId: 'prod-page-img-machinery-c3d4',
  },
  {
    id: 'textiles',
    title: 'Textiles, Apparel & Accessories',
    desc: 'Garments, fabrics, home textiles, sportswear, bags, shoes, hats, and fashion accessories.',
    examples: 'T-shirts, jackets, bed linen, towels, sports bags, backpacks, caps, scarves, promotional wear',
    titleId: 'prod-page-title-textiles',
    descId: 'prod-page-desc-textiles',
    imgId: 'prod-page-img-textiles-e5f6',
  },
  {
    id: 'hardware',
    title: 'Hardware, Tools & Metal Products',
    desc: 'Fasteners, hand tools, power tools, construction hardware, metal stampings, castings, forgings, and fabricated metal components.',
    examples: 'Screws, bolts, wrenches, drill bits, door handles, hinges, brackets, aluminum extrusions, steel fabrications',
    titleId: 'prod-page-title-hardware',
    descId: 'prod-page-desc-hardware',
    imgId: 'prod-page-img-hardware-g7h8',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, flexible packaging, paper bags, gift boxes, corrugated cartons, and promotional materials.',
    examples: 'Folding cartons, stand-up pouches, shrink sleeves, printed labels, paper shopping bags, display boxes',
    titleId: 'prod-page-title-packaging',
    descId: 'prod-page-desc-packaging',
    imgId: 'prod-page-img-packaging-i9j0',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Indoor/outdoor furniture, kitchenware, home decor, lighting fixtures, storage solutions, and household products.',
    examples: 'Office chairs, outdoor tables, cookware sets, LED lamps, storage racks, bathroom accessories, ceramic tableware',
    titleId: 'prod-page-title-furniture',
    descId: 'prod-page-desc-furniture',
    imgId: 'prod-page-img-furniture-k1l2',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts & Accessories',
    desc: 'Aftermarket auto parts, accessories, maintenance products, tools, and vehicle electronics.',
    examples: 'Brake pads, filters, car mats, LED headlights, car chargers, diagnostic tools, motorcycle accessories',
    titleId: 'prod-page-title-automotive',
    descId: 'prod-page-desc-automotive',
    imgId: 'prod-page-img-automotive-m3n4',
  },
  {
    id: 'medical',
    title: 'Medical Devices & Supplies',
    desc: 'Medical consumables, diagnostic equipment, PPE, rehabilitation products, and healthcare accessories.',
    examples: 'Surgical masks, gloves, blood pressure monitors, wheelchairs, hospital furniture, first-aid kits',
    titleId: 'prod-page-title-medical',
    descId: 'prod-page-desc-medical',
    imgId: 'prod-page-img-medical-o5p6',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, camping gear, sports accessories, outdoor furniture, and recreational products.',
    examples: 'Yoga mats, resistance bands, tents, sleeping bags, fishing gear, bicycle accessories, water bottles',
    titleId: 'prod-page-title-sports',
    descId: 'prod-page-desc-sports',
    imgId: 'prod-page-img-sports-q7r8',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From electronics to furniture, we have experience across a wide range of industries and product categories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-10 p-4 bg-brand-50 rounded-lg border border-brand-100">
            <Search className="w-5 h-5 text-brand-500 flex-shrink-0" />
            <p className="text-sm text-brand-700">
              Do not see your product category? <Link to="/contact" className="font-semibold underline">Contact us</Link> — we likely have experience sourcing it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-52 overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-brand-900 mb-2">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <Package className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>{cat.examples}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">What Do You Need to Source?</h2>
          <p className="text-slate-600 mb-8">
            Tell us your product requirements and we will find the right supplier for you.
          </p>
          <Link to="/contact" className="btn-accent gap-2 text-lg px-8 py-3.5">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
