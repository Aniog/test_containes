import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Cog, Shirt, Home, Package, Gift, Wrench, Truck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader.jsx';
import ProductCard from '../components/ProductCard.jsx';
import InquiryForm from '../components/InquiryForm.jsx';

const products = [
  {
    title: 'Electronics & Components',
    description: 'Consumer electronics, cables, adapters, chargers, PCBs, batteries, and small appliances.',
    icon: Cpu,
    imgId: 'product-electronics-page',
    titleId: 'product-electronics-page-title',
    descId: 'product-electronics-page-desc',
  },
  {
    title: 'Machinery & Industrial Parts',
    description: 'Valves, pumps, fasteners, bearings, tooling, castings, and custom mechanical components.',
    icon: Cog,
    imgId: 'product-machinery-page',
    titleId: 'product-machinery-page-title',
    descId: 'product-machinery-page-desc',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Garments, fabrics, bags, footwear, workwear, and accessories with compliance support.',
    icon: Shirt,
    imgId: 'product-apparel-page',
    titleId: 'product-apparel-page-title',
    descId: 'product-apparel-page-desc',
  },
  {
    title: 'Home, Hardware & Furniture',
    description: 'Furniture, lighting, kitchenware, bathroom fittings, and building materials.',
    icon: Home,
    imgId: 'product-home-page',
    titleId: 'product-home-page-title',
    descId: 'product-home-page-desc',
  },
  {
    title: 'Packaging & Printing',
    description: 'Retail boxes, labels, bags, inserts, and printed marketing materials.',
    icon: Package,
    imgId: 'product-packaging-page',
    titleId: 'product-packaging-page-title',
    descId: 'product-packaging-page-desc',
  },
  {
    title: 'Promotional Products',
    description: 'Custom-branded merchandise, corporate gifts, event giveaways, and marketing items.',
    icon: Gift,
    imgId: 'product-promo-page',
    titleId: 'product-promo-page-title',
    descId: 'product-promo-page-desc',
  },
  {
    title: 'Tools & Hardware',
    description: 'Hand tools, power tools, hardware sets, safety equipment, and workshop supplies.',
    icon: Wrench,
    imgId: 'product-tools-page',
    titleId: 'product-tools-page-title',
    descId: 'product-tools-page-desc',
  },
  {
    title: 'Auto & Transportation Parts',
    description: 'Replacement parts, accessories, and components for automotive, bicycle, and logistics equipment.',
    icon: Truck,
    imgId: 'product-auto-page',
    titleId: 'product-auto-page-title',
    descId: 'product-auto-page-desc',
  },
];

const Products = () => {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-amber mb-3">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Product categories we know well
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              We focus on categories where our team has verified factory networks and hands-on sourcing experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="products-categories-title"
            eyebrow="Categories"
            title="Industries we support"
            description="If your product is not listed, contact us. We evaluate each project individually before taking it on."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.titleId}
                {...product}
                sectionTitleId="products-categories-title"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cloud">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Have a product in mind?
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto mb-8">
              Send us your specifications and we will let you know how we can help source it from China.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-lg hover:bg-amber-hover transition-colors"
            >
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </>
  );
};

export default Products;
