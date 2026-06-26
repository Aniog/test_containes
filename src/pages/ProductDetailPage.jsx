import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Phone, Mail, Download } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const productData = {
  'double-folding-machine': {
    title: 'Double Folding Machine',
    category: 'Double Folding',
    description: 'Our flagship double folding machine delivers exceptional precision for complex sheet metal operations. Featuring CNC-controlled hydraulic systems and digital angle measurement, this machine ensures consistent, high-quality folds every time.',
    features: [
      'CNC-controlled hydraulic system for precise angle control',
      'Digital angle measurement with 0.1 degree accuracy',
      'Automatic back gauge with programmable positioning',
      'Heavy-duty welded steel frame for stability',
      'Touch screen HMI for easy operation',
      'Safety light curtains and emergency stop',
    ],
    specifications: {
      'Max Sheet Width': '3200 mm',
      'Max Thickness (Steel)': '3.0 mm',
      'Max Thickness (Aluminum)': '4.0 mm',
      'Folding Angle': '0-135 degrees',
      'Bending Speed': '8-12 cycles/min',
      'Motor Power': '7.5 kW',
      'Machine Weight': '4500 kg',
      'Dimensions (LxWxH)': '4200 x 1800 x 2100 mm',
    },
    applications: [
      'HVAC ductwork fabrication',
      'Roofing and cladding panels',
      'Electrical enclosures',
      'Kitchen equipment manufacturing',
      'Automotive parts production',
    ],
  },
  'double-folder-pro': {
    title: 'Double Folder Pro Series',
    category: 'Double Folding',
    description: 'The Pro Series represents the pinnacle of double folding technology. Designed for high-volume production environments, it combines speed, precision, and reliability in a robust industrial package.',
    features: [
      'Dual-axis CNC control for complex folding sequences',
      'Large 15-inch touch screen interface',
      'Auto-back gauge with laser positioning',
      'Programmable job memory for 500+ profiles',
      'Quick-change tooling system',
      'Integrated sheet support arms',
    ],
    specifications: {
      'Max Sheet Width': '4000 mm',
      'Max Thickness (Steel)': '4.0 mm',
      'Max Thickness (Aluminum)': '5.0 mm',
      'Folding Angle': '0-150 degrees',
      'Bending Speed': '10-15 cycles/min',
      'Motor Power': '11 kW',
      'Machine Weight': '6200 kg',
      'Dimensions (LxWxH)': '5200 x 2000 x 2300 mm',
    },
    applications: [
      'Large-scale panel production',
      'Industrial enclosure manufacturing',
      'Architectural metalwork',
      'Transportation industry components',
      'Custom fabrication shops',
    ],
  },
  'sheet-metal-folder-sm': {
    title: 'Sheet Metal Folder - Standard',
    category: 'Sheet Metal',
    description: 'A versatile and reliable sheet metal folder perfect for workshops and small to medium production runs. Easy to operate with minimal training required.',
    features: [
      'Manual operation with mechanical advantage',
      'Portable design with forklift pockets',
      'Quick setup and changeover',
      'Adjustable folding beam',
      'Clamping pressure adjustment',
      'Durable powder-coated finish',
    ],
    specifications: {
      'Max Sheet Width': '2000 mm',
      'Max Thickness (Steel)': '1.5 mm',
      'Max Thickness (Aluminum)': '2.0 mm',
      'Folding Angle': '0-135 degrees',
      'Clamping Type': 'Manual screw',
      'Machine Weight': '350 kg',
      'Dimensions (LxWxH)': '2400 x 800 x 1200 mm',
    },
    applications: [
      'Small workshop fabrication',
      'Sign making',
      'Custom metal art',
      'Repair and maintenance shops',
      'Educational institutions',
    ],
  },
  'sheet-metal-folder-auto': {
    title: 'Sheet Metal Folder - Automatic',
    category: 'Sheet Metal',
    description: 'Fully automatic sheet metal folder with programmable folding sequences. Ideal for medium to high production volumes with consistent quality requirements.',
    features: [
      'Programmable folding cycles',
      'Memory storage for 100+ jobs',
      'Pneumatic clamping system',
      'Digital angle display',
      'Safety guards with interlocks',
      'Foot pedal operation option',
    ],
    specifications: {
      'Max Sheet Width': '2500 mm',
      'Max Thickness (Steel)': '2.5 mm',
      'Max Thickness (Aluminum)': '3.0 mm',
      'Folding Angle': '0-140 degrees',
      'Clamping Type': 'Pneumatic',
      'Motor Power': '3 kW',
      'Machine Weight': '1200 kg',
      'Dimensions (LxWxH)': '3200 x 1200 x 1600 mm',
    },
    applications: [
      'Medium-volume production',
      'Cabinet manufacturing',
      'Metal furniture production',
      'Light industrial fabrication',
      'Contract manufacturing',
    ],
  },
  'metal-folding-machine-hd': {
    title: 'Metal Folding Machine - Heavy Duty',
    category: 'Metal Folding',
    description: 'Built for the toughest applications, this heavy-duty metal folding machine handles thick plates and demanding industrial environments with ease.',
    features: [
      'Reinforced welded steel frame',
      'Industrial-grade hydraulic system',
      'Precision-ground folding beams',
      'Automatic crowning compensation',
      'Heavy-duty clamping cylinders',
      'Overload protection system',
    ],
    specifications: {
      'Max Sheet Width': '3000 mm',
      'Max Thickness (Steel)': '6.0 mm',
      'Max Thickness (Aluminum)': '8.0 mm',
      'Folding Angle': '0-135 degrees',
      'Hydraulic Pressure': '250 bar',
      'Motor Power': '15 kW',
      'Machine Weight': '8500 kg',
      'Dimensions (LxWxH)': '4000 x 2200 x 2500 mm',
    },
    applications: [
      'Heavy industrial fabrication',
      'Shipbuilding components',
      'Construction equipment parts',
      'Mining industry applications',
      'Structural steel work',
    ],
  },
  'metal-folder-compact': {
    title: 'Metal Folder - Compact',
    category: 'Metal Folding',
    description: 'Space-saving design without compromising on quality. Perfect for workshops with limited floor space that still need professional-grade folding capability.',
    features: [
      'Compact footprint design',
      'Easy transport with wheels',
      'Quick-change tooling system',
      'Manual or electric operation',
      'Adjustable work height',
      'Built-in material support',
    ],
    specifications: {
      'Max Sheet Width': '1250 mm',
      'Max Thickness (Steel)': '1.2 mm',
      'Max Thickness (Aluminum)': '1.5 mm',
      'Folding Angle': '0-135 degrees',
      'Operation': 'Manual/Electric',
      'Machine Weight': '180 kg',
      'Dimensions (LxWxH)': '1500 x 600 x 1000 mm',
    },
    applications: [
      'Small workshops',
      'Hobbyist metalworking',
      'Prototype development',
      'Educational training',
      'Mobile fabrication units',
    ],
  },
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const product = productData[productId];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  if (!product) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold text-primary">Product Not Found</h2>
        <p className="mt-4 text-muted">The product you are looking for does not exist.</p>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-accent font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span className="text-primary">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <img
                  alt={product.title}
                  data-strk-img-id={`detail-${productId}-img`}
                  data-strk-img="[detail-title] [detail-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                {product.category}
              </span>
              <h1 id="detail-title" className="mt-4 text-3xl md:text-4xl font-bold text-primary tracking-tight">
                {product.title}
              </h1>
              <p id="detail-subtitle" className="mt-4 text-lg text-muted leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-primary mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 border border-border hover:border-accent text-primary font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-8">
            Technical Specifications
          </h2>
          <div className="bg-white rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-surface' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-primary w-1/3">{key}</td>
                    <td className="px-6 py-4 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight mb-8">
            Typical Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.applications.map((app, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-primary">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Interested in This Machine?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Contact our sales team for pricing, availability, and custom configuration options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@artitect.com"
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-accent text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
