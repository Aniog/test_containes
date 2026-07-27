import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, cables, wire harnesses, displays (LCD, LED, OLED), touch panels, sensors, IoT modules, power adapters, chargers, batteries, speakers, microphones, and consumer electronics.',
    imgId: 'products-electronics-f8g9h0',
  },
  {
    title: 'Industrial Machinery & Parts',
    desc: 'CNC machined parts, metal stampings, die castings, motors, gearboxes, pumps, valves, bearings, hydraulic and pneumatic components, industrial automation equipment, conveyors, packaging machinery, and custom tooling.',
    imgId: 'products-machinery-i1j2k3',
  },
  {
    title: 'Home Appliances & Kitchenware',
    desc: 'Small kitchen appliances (blenders, air fryers, coffee makers), cookware, bakeware, cutlery, food storage containers, water filters, vacuum cleaners, irons, humidifiers, and smart home devices.',
    imgId: 'products-appliances-l4m5n6',
  },
  {
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, office furniture, lighting fixtures, rugs and carpets, curtains and blinds, wall decor, mirrors, decorative accessories, storage and organization products, pet furniture.',
    imgId: 'products-furniture-o7p8q9',
  },
  {
    title: 'Textiles, Apparel & Accessories',
    desc: 'Casual wear, sportswear, workwear, uniforms, children\'s clothing, bags and backpacks, luggage, hats, scarves, gloves, socks, bedding, towels, table linens, and upholstery fabrics.',
    imgId: 'products-textiles-r0s1t2',
  },
  {
    title: 'Packaging & Printing',
    desc: 'Custom printed boxes, mailer boxes, rigid boxes, paper bags, plastic bags, flexible packaging, labels and stickers, hang tags, tissue paper, display stands, and POP/POS display materials.',
    imgId: 'products-packaging-u3v4w5',
  },
  {
    title: 'Hardware, Tools & Building Materials',
    desc: 'Fasteners (screws, bolts, nuts), hand tools, power tools, tool sets, door hardware, plumbing fittings, electrical supplies, safety equipment, ladders, workbenches, and construction materials.',
    imgId: 'products-hardware-x6y7z8',
  },
  {
    title: 'Plastics, Rubber & Chemical Products',
    desc: 'Plastic injection molded parts, extrusion profiles, blow-molded containers, silicone products, rubber seals and gaskets, foam products, adhesives, sealants, and industrial chemical products.',
    imgId: 'products-plastics-a9b0c1',
  },
  {
    title: 'Automotive Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, motorcycle parts, EV components, car electronics, seat covers, floor mats, car care products, and repair tools.',
    imgId: 'products-automotive-d2e3f4',
  },
  {
    title: 'Medical Devices & Supplies',
    desc: 'PPE (masks, gloves, gowns), medical consumables, diagnostic devices, rehabilitation equipment, hospital furniture, first aid supplies, and personal care devices.',
    imgId: 'products-medical-g5h6i7',
  },
  {
    title: 'Sports, Fitness & Outdoor',
    desc: 'Fitness equipment, yoga accessories, camping gear, outdoor furniture, sports protective gear, bicycles and accessories, water sports equipment, and team sports equipment.',
    imgId: 'products-sports-j8k9l0',
  },
  {
    title: 'Promotional Products & Gifts',
    desc: 'Custom branded merchandise, corporate gifts, promotional giveaways, drinkware, stationery, tech gadgets, eco-friendly products, and seasonal promotional items.',
    imgId: 'products-promotional-m1n2o3',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Products We Source
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            We have experience across a wide range of industries. If your product is not listed, contact us — we likely have relevant expertise.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-desc-${cat.imgId}] [products-title-${cat.imgId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="hidden" id={`products-title-${cat.imgId}`}>{cat.title}</div>
                <div className="hidden" id={`products-desc-${cat.imgId}`}>{cat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Don't See Your Product?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            China's manufacturing ecosystem is vast. Our network spans hundreds of factories across
            dozens of industries. Contact us with your specific product requirements and we will tell
            you honestly if we can help.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors"
            >
              Inquire About Your Product
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
