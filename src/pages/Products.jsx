import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const categories = [
  {
    title: 'Electronics & Accessories',
    products: ['Bluetooth speakers and earphones', 'Phone cases and screen protectors', 'LED lights and smart home devices', 'Power banks and charging cables', 'Security cameras and smart locks', 'USB hubs and computer peripherals'],
    note: 'We source electronics from Shenzhen, the global electronics capital, with access to thousands of component and finished goods manufacturers.',
  },
  {
    title: 'Home & Garden',
    products: ['Kitchen appliances and cookware', 'Bathroom accessories and fixtures', 'Home decor and wall art', 'Garden tools and planters', 'Storage and organization products', 'Smart home and IoT devices'],
    note: 'Foshan and Guangzhou are our primary sourcing hubs for home and garden products, offering competitive pricing and OEM capabilities.',
  },
  {
    title: 'Apparel & Fashion',
    products: ['Men\'s, women\'s, and children\'s clothing', 'Bags, wallets, and luggage', 'Shoes and footwear', 'Jewelry and watches', 'Hats, scarves, and accessories', 'Custom uniform and workwear'],
    note: 'We work with manufacturers in Guangzhou, Dongguan, and Fujian province who specialize in export-quality fashion products.',
  },
  {
    title: 'Industrial & Machinery',
    products: ['CNC machined parts and components', 'Injection molds and die casting', 'Packaging machinery', 'Welding and cutting equipment', 'Hydraulic and pneumatic components', 'Custom metal fabrication'],
    note: 'Our industrial sourcing team in Ningbo and Wenzhou can handle complex engineering specifications and custom manufacturing requirements.',
  },
  {
    title: 'Health, Beauty & Fitness',
    products: ['Skincare and cosmetics', 'Hair care and styling tools', 'Fitness equipment and accessories', 'Massage and wellness devices', 'Personal care electronics', 'Supplements packaging'],
    note: 'We ensure all health and beauty products meet relevant regulatory requirements including FDA, CE, and REACH compliance where applicable.',
  },
  {
    title: 'Toys & Baby Products',
    products: ['Educational and STEM toys', 'Plush and stuffed toys', 'Outdoor play equipment', 'Baby monitors and safety gates', 'Feeding and nursery products', 'Baby clothing and accessories'],
    note: 'We prioritize safety certifications (EN71, ASTM F963, CPC) and work only with factories that have proven track records in children\'s product safety.',
  },
  {
    title: 'Promotional & Corporate Products',
    products: ['Custom branded merchandise', 'Corporate gifts and awards', 'Trade show giveaways', 'Custom packaging and boxes', 'Branded drinkware and bags', 'USB drives and tech accessories'],
    note: 'We offer end-to-end branded product sourcing, from design consultation and prototyping through mass production and quality control.',
  },
  {
    title: 'Automotive & Transport',
    products: ['Aftermarket auto parts', 'Car electronics and accessories', 'Motorcycle parts and gear', 'Electric scooters and bikes', 'Car care and detailing products', 'Custom wheels and body kits'],
    note: 'We source automotive parts from specialized factories in Zhejiang and Jiangsu provinces, ensuring proper fitment and quality standards.',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-blue-100 text-lg max-w-2xl mx-auto">
            We source products across a wide range of categories, each with specialized knowledge
            of the best manufacturing regions and factory capabilities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {categories.map((cat, i) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/7] bg-surface-alt overflow-hidden">
                  <img
                    data-strk-img-id={`products-page-cat-img-${i}`}
                    data-strk-img={`[products-cat-title-${i}] [products-page-subtitle]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 id={`products-cat-title-${i}`} className="text-xl font-bold text-text-primary mb-3">{cat.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {cat.products.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-text-muted text-sm border-t border-border pt-4">{cat.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 md:py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-6">
            We handle custom and niche product sourcing regularly. If your product is not listed above,
            send us your specifications and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors"
          >
            Inquire About Your Product
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <CTASection
        title="Ready to Source Your Products?"
        subtitle="Send us your product requirements and receive supplier options within 3-5 business days."
      />
    </div>
  );
}
