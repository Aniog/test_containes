import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, mobile accessories, PCBs, electronic components, cables, chargers, smart devices, IoT products, and audio equipment.',
    imgId: 'prod-pg-electronics-v3w4x5',
    titleId: 'prod-pg-title-electronics',
    descId: 'prod-pg-desc-electronics',
  },
  {
    id: 'machinery',
    title: 'Machinery & Industrial Parts',
    desc: 'CNC machined parts, injection molds, die casting, metal stamping, industrial equipment, power tools, bearings, and hardware components.',
    imgId: 'prod-pg-machinery-w4x5y6',
    titleId: 'prod-pg-title-machinery',
    descId: 'prod-pg-desc-machinery',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden',
    desc: 'Furniture, home decor, lighting, kitchenware, bathroom accessories, garden tools, outdoor furniture, and storage solutions.',
    imgId: 'prod-pg-home-x5y6z7',
    titleId: 'prod-pg-title-home',
    descId: 'prod-pg-desc-home',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Garments, sportswear, bags, shoes, home textiles, fabrics, fashion accessories, and promotional clothing.',
    imgId: 'prod-pg-textiles-y6z7a8',
    titleId: 'prod-pg-title-textiles',
    descId: 'prod-pg-desc-textiles',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, paper bags, labels, flexible packaging, gift boxes, branded packaging, and display stands.',
    imgId: 'prod-pg-packaging-z7a8b9',
    titleId: 'prod-pg-title-packaging',
    descId: 'prod-pg-desc-packaging',
  },
  {
    id: 'medical',
    title: 'Medical & Health Supplies',
    desc: 'PPE, face masks, medical devices, diagnostic equipment, health monitors, rehabilitation products, and medical consumables.',
    imgId: 'prod-pg-medical-a8b9c0',
    titleId: 'prod-pg-title-medical',
    descId: 'prod-pg-desc-medical',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car accessories, motorcycle parts, EV components, and automotive electronics.',
    imgId: 'prod-pg-auto-b9c0d1',
    titleId: 'prod-pg-title-auto',
    descId: 'prod-pg-desc-auto',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, camping gear, sports accessories, bicycles, outdoor furniture, and recreational products.',
    imgId: 'prod-pg-sports-c0d1e2',
    titleId: 'prod-pg-title-sports',
    descId: 'prod-pg-desc-sports',
  },
  {
    id: 'toys',
    title: 'Toys & Educational Products',
    desc: 'Plush toys, educational toys, STEM kits, board games, wooden toys, and learning materials for children.',
    imgId: 'prod-pg-toys-d1e2f3',
    titleId: 'prod-pg-title-toys',
    descId: 'prod-pg-desc-toys',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, beauty tools, personal care appliances, hair products, and cosmetic packaging.',
    imgId: 'prod-pg-beauty-e2f3g4',
    titleId: 'prod-pg-title-beauty',
    descId: 'prod-pg-desc-beauty',
  },
  {
    id: 'pet',
    title: 'Pet Supplies',
    desc: 'Pet toys, pet beds, grooming tools, pet carriers, feeding accessories, and pet clothing.',
    imgId: 'prod-pg-pet-f3g4h5',
    titleId: 'prod-pg-title-pet',
    descId: 'prod-pg-desc-pet',
  },
  {
    id: 'kitchen',
    title: 'Kitchen & Food Service',
    desc: 'Cookware, kitchen gadgets, food packaging, restaurant supplies, bakeware, and commercial kitchen equipment.',
    imgId: 'prod-pg-kitchen-g4h5i6',
    titleId: 'prod-pg-title-kitchen',
    descId: 'prod-pg-desc-kitchen',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-navy-950 text-white">
        <div className="section-container py-20 lg:py-28">
          <div className="max-w-3xl">
            <h1 id="products-pg-title" className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Products We Source
            </h1>
            <p id="products-pg-subtitle" className="mt-4 text-lg text-slate-300 max-w-xl leading-relaxed">
              We source across 50+ product categories. If it's made in China, we can find the right factory for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-pg-subtitle] [products-pg-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-navy-900 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="section-container text-center max-w-3xl">
          <h2 className="section-heading">Don't See Your Product?</h2>
          <p className="section-subheading">
            Our supplier network covers far more than what's listed here. If you're sourcing a product not shown above, we can still help. Contact us with your requirements and we'll find the right manufacturer.
          </p>
          <Link to="/contact" className="btn-primary gap-2 mt-8 inline-flex">
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
