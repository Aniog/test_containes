import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    category: 'Heavy Duty Series',
    description: 'Our flagship double folding machine delivers exceptional precision for complex sheet metal profiles. Engineered for high-volume production environments.',
    specs: ['Folding Length: up to 4000mm', 'Material Thickness: 0.5–6mm', 'Bending Angle: 0–135°'],
    imgId: 'prod-img-dfm-9a3b1c',
    titleId: 'prod-title-double-folding-machine',
    descId: 'prod-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    name: 'Double Folder',
    category: 'Professional Series',
    description: 'Versatile double folder designed for precision bending of sheet metal panels. Ideal for HVAC, roofing, and architectural metalwork applications.',
    specs: ['Folding Length: up to 3000mm', 'Material Thickness: 0.4–4mm', 'Motorized Beam'],
    imgId: 'prod-img-df-7c4d2e',
    titleId: 'prod-title-double-folder',
    descId: 'prod-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    category: 'Standard Series',
    description: 'Reliable sheet metal folder built for consistent, repeatable bends. Perfect for workshops and fabrication shops requiring daily precision work.',
    specs: ['Folding Length: up to 2500mm', 'Material Thickness: 0.3–3mm', 'Manual & CNC Options'],
    imgId: 'prod-img-smf-5e6f3a',
    titleId: 'prod-title-sheet-metal-folder',
    descId: 'prod-desc-sheet-metal-folder',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    category: 'Industrial Series',
    description: 'Heavy-duty metal folding machine for demanding industrial applications. Handles a wide range of metals including steel, aluminum, and copper.',
    specs: ['Folding Length: up to 6000mm', 'Material Thickness: 0.5–8mm', 'CNC Controlled'],
    imgId: 'prod-img-mfm-2b8c4d',
    titleId: 'prod-title-metal-folding-machine',
    descId: 'prod-desc-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder',
    category: 'Compact Series',
    description: 'Compact yet powerful metal folder for smaller workshops. Delivers professional-grade results in a space-efficient footprint.',
    specs: ['Folding Length: up to 1500mm', 'Material Thickness: 0.3–2.5mm', 'Portable Design'],
    imgId: 'prod-img-mf-6a1e9f',
    titleId: 'prod-title-metal-folder',
    descId: 'prod-desc-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    name: 'Sheet Metal Folding Machine',
    category: 'CNC Series',
    description: 'Advanced CNC sheet metal folding machine with programmable bending sequences. Maximizes throughput and minimizes setup time for complex parts.',
    specs: ['Folding Length: up to 5000mm', 'Material Thickness: 0.5–6mm', 'Full CNC Automation'],
    imgId: 'prod-img-smfm-3d7b5e',
    titleId: 'prod-title-sheet-metal-folding-machine',
    descId: 'prod-desc-sheet-metal-folding-machine',
  },
];

const ProductCard = ({ product }) => {
  const handleContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="group flex flex-col overflow-hidden transition-all duration-300"
      style={{ background: '#161B22', border: '1px solid #30363D' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#C9A84C')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#30363D')}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <img
          alt={product.name}
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}] [products-section-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ background: '#21262D' }}
        />
        <div
          className="absolute top-4 left-4 px-3 py-1 text-xs tracking-widest uppercase font-medium"
          style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
        >
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          id={product.titleId}
          className="text-xl font-semibold mb-3"
          style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
        >
          {product.name}
        </h3>
        <p
          id={product.descId}
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: '#8B949E' }}
        >
          {product.description}
        </p>

        {/* Specs */}
        <ul className="space-y-2 mb-6">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-xs" style={{ color: '#C9D1D9' }}>
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
              {spec}
            </li>
          ))}
        </ul>

        <button
          onClick={handleContact}
          className="flex items-center gap-2 text-xs tracking-widest uppercase font-semibold py-3 px-5 transition-all duration-200 cursor-pointer w-full justify-center"
          style={{ border: '1px solid #C9A84C', color: '#C9A84C', background: 'transparent' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C9A84C';
            e.currentTarget.style.color = '#0D1117';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#C9A84C';
          }}
        >
          Inquire Now
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="products" ref={containerRef} style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
              Our Product Range
            </span>
          </div>
          <h2
            id="products-section-title"
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
          >
            Folding Machines for Every Need
          </h2>
          <p className="text-base max-w-2xl" style={{ color: '#8B949E' }}>
            From compact workshop folders to large-scale industrial CNC systems, our complete range of sheet metal folding machines is built to exceed your production demands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
