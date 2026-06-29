import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-performance double folding machine designed for precision bending of sheet metal with dual-axis control and automated operation.',
    imgId: 'prod-dfm-b8k2m1',
    titleId: 'prod-dfm-title',
    descId: 'prod-dfm-desc',
    specs: ['Dual-axis precision', 'Automated operation', 'Up to 4mm thickness'],
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Versatile double folder for consistent, repeatable folds across a wide range of metal sheet sizes and gauges.',
    imgId: 'prod-df-n9l3p2',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
    specs: ['Wide range capacity', 'Repeatable accuracy', 'Quick setup'],
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Professional-grade sheet metal folder delivering clean, precise bends for HVAC, roofing, and general fabrication.',
    imgId: 'prod-smf-q5r7t4',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
    specs: ['Clean precise bends', 'HVAC & roofing', 'Easy operation'],
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Advanced CNC-controlled sheet metal folding machine with programmable back gauge and high-speed folding capabilities.',
    imgId: 'prod-smfm-w6x8y5',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
    specs: ['CNC controlled', 'Programmable back gauge', 'High-speed folding'],
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust metal folder built for daily industrial use, offering exceptional durability and consistent folding performance.',
    imgId: 'prod-mf-z1a3c6',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
    specs: ['Industrial durability', 'Consistent performance', 'Low maintenance'],
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Full-featured metal folder machine combining power and precision for heavy-duty metalworking applications.',
    imgId: 'prod-mfm-d4e6f7',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
    specs: ['Heavy-duty power', 'Precision folding', 'Full feature set'],
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    description: 'State-of-the-art metal folding machine with intelligent control systems for complex folding patterns and maximum productivity.',
    imgId: 'prod-mfld-g8h0j9',
    titleId: 'prod-mfld-title',
    descId: 'prod-mfld-desc',
    specs: ['Intelligent controls', 'Complex patterns', 'Max productivity'],
  },
];

const ProductCard = ({ product }) => (
  <article className="group bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
      <img
        alt={product.title}
        data-strk-img-id={product.imgId}
        data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 id={product.titleId} className="text-lg font-bold text-text-primary mb-2">
        {product.title}
      </h3>
      <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4">
        {product.description}
      </p>
      <ul className="space-y-1.5 mb-5">
        {product.specs.map((spec) => (
          <li key={spec} className="flex items-center gap-2 text-sm text-text-secondary">
            <span className="w-1.5 h-1.5 bg-steel rounded-full shrink-0" />
            {spec}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector('#contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-1.5 text-steel font-semibold text-sm hover:text-steel-dark transition-colors"
      >
        Request Quote
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </article>
);

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-steel font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 id="products-section-title" className="text-3xl md:text-4xl font-extrabold text-text-primary mt-2 mb-4">
            Metal Folding Solutions
          </h2>
          <p className="text-text-secondary leading-relaxed">
            From double folding machines to precision metal folders, our product line covers every aspect of professional sheet metal bending.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
