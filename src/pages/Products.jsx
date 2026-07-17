import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'Dual-Pass Precision',
    desc: 'Our flagship double folding machine executes two precise bends in a single automated pass, dramatically increasing throughput for high-volume production environments. Engineered for repeatability and minimal setup time.',
    features: [
      'Two folds in one automated cycle',
      'Programmable bend angles (0°–180°)',
      'Quick-change tooling system',
      'Digital angle readout',
      'Safety light curtain included',
    ],
    specs: { 'Max Sheet Width': '3000 mm', 'Max Thickness': '3 mm (mild steel)', 'Bending Force': '60 tons', 'Cycle Time': '< 8 seconds' },
    titleId: 'prod-double-folding-title',
    descId: 'prod-double-folding-desc',
    imgId: 'prod-img-double-folding-aa1bb2',
    badge: 'Best Seller',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    subtitle: 'Compact Dual Folding',
    desc: 'A compact yet powerful double folder designed for workshops and mid-scale production. Delivers consistent dual-fold results with an intuitive interface that reduces operator training time.',
    features: [
      'Compact footprint for workshop use',
      'Dual-fold capability',
      'Manual and CNC modes',
      'Adjustable back gauge',
      'Overload protection system',
    ],
    specs: { 'Max Sheet Width': '2000 mm', 'Max Thickness': '2 mm (mild steel)', 'Bending Force': '40 tons', 'Weight': '1,800 kg' },
    titleId: 'prod-double-folder-title',
    descId: 'prod-double-folder-desc',
    imgId: 'prod-img-double-folder-cc3dd4',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile Precision Folding',
    desc: 'The ARTITECT sheet metal folder is the workhorse of any fabrication shop. Handles a wide range of materials and thicknesses with consistent accuracy, from thin aluminum to heavy-gauge steel.',
    features: [
      'Wide material compatibility',
      'Hydraulic clamping beam',
      'CNC back gauge with memory',
      'Segmented tooling for complex profiles',
      'CE certified',
    ],
    specs: { 'Max Sheet Width': '4000 mm', 'Max Thickness': '4 mm (mild steel)', 'Bending Force': '80 tons', 'Back Gauge Range': '10–800 mm' },
    titleId: 'prod-sheet-metal-folder-title',
    descId: 'prod-sheet-metal-folder-desc',
    imgId: 'prod-img-sheet-metal-folder-ee5ff6',
    badge: 'Most Versatile',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    subtitle: 'Industrial-Scale Performance',
    desc: 'Designed for industrial-scale sheet metal fabrication, this machine combines robust construction with advanced CNC control for complex multi-bend programs and high-precision output.',
    features: [
      'Full CNC control with touchscreen',
      'Multi-bend programming',
      'Automatic tool recognition',
      'Remote diagnostics capability',
      'Energy-efficient servo drive',
    ],
    specs: { 'Max Sheet Width': '6000 mm', 'Max Thickness': '6 mm (mild steel)', 'Bending Force': '160 tons', 'Control System': 'CNC 8-axis' },
    titleId: 'prod-sheet-metal-folding-title',
    descId: 'prod-sheet-metal-folding-desc',
    imgId: 'prod-img-sheet-metal-folding-gg7hh8',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    subtitle: 'Reliable Everyday Folding',
    desc: 'A dependable metal folder built for everyday fabrication tasks. Simple to operate, easy to maintain, and built to last — the ideal entry-level solution for growing workshops.',
    features: [
      'Simple mechanical operation',
      'Low maintenance design',
      'Adjustable clamping pressure',
      'Foot pedal control',
      'Robust steel frame construction',
    ],
    specs: { 'Max Sheet Width': '1500 mm', 'Max Thickness': '1.5 mm (mild steel)', 'Bending Angle': '0°–135°', 'Weight': '950 kg' },
    titleId: 'prod-metal-folder-title',
    descId: 'prod-metal-folder-desc',
    imgId: 'prod-img-metal-folder-ii9jj0',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Semi-Automatic Efficiency',
    desc: 'Bridging the gap between manual and fully automated folding, the ARTITECT metal folder machine offers semi-automatic operation for improved productivity without the complexity of full CNC systems.',
    features: [
      'Semi-automatic operation',
      'Programmable stop positions',
      'Hydraulic folding beam',
      'Digital angle display',
      'Quick tool change system',
    ],
    specs: { 'Max Sheet Width': '2500 mm', 'Max Thickness': '2.5 mm (mild steel)', 'Bending Force': '50 tons', 'Programs': 'Up to 99 stored' },
    titleId: 'prod-metal-folder-machine-title',
    descId: 'prod-metal-folder-machine-desc',
    imgId: 'prod-img-metal-folder-machine-kk1ll2',
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    subtitle: 'Heavy-Duty Industrial Power',
    desc: 'Our heavy-duty metal folding machine is engineered for the most demanding industrial applications. Handles thick plate, stainless steel, and high-tensile materials with ease and precision.',
    features: [
      'Heavy-duty hydraulic system',
      'Thick plate capability',
      'Stainless steel compatible',
      'Automatic crowning system',
      'Full safety guarding',
    ],
    specs: { 'Max Sheet Width': '8000 mm', 'Max Thickness': '10 mm (mild steel)', 'Bending Force': '320 tons', 'Control': 'CNC 12-axis' },
    titleId: 'prod-metal-folding-machine-title',
    descId: 'prod-metal-folding-machine-desc',
    imgId: 'prod-img-metal-folding-machine-mm3nn4',
    badge: 'Heavy Duty',
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-copper-gold text-xs font-semibold tracking-widest uppercase">Our Range</span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Our Products
          </h1>
          <p className="text-mid-gray text-lg max-w-2xl mx-auto leading-relaxed">
            From compact workshop folders to heavy-duty industrial folding machines — ARTITECT has the right solution for every application.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-cloud-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    alt={prod.title}
                    data-strk-img-id={prod.imgId}
                    data-strk-img={`[${prod.descId}] [${prod.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-navy/40 to-transparent" />
                  {prod.badge && (
                    <div className="absolute top-4 left-4 bg-copper-gold text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                      {prod.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="text-copper-gold text-xs font-semibold tracking-widest uppercase mb-2">
                    {prod.subtitle}
                  </div>
                  <h2 id={prod.titleId} className="font-serif text-2xl font-bold text-steel-navy mb-3">
                    {prod.title}
                  </h2>
                  <p id={prod.descId} className="text-slate-gray text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  {/* Key Features */}
                  <ul className="space-y-2 mb-6">
                    {prod.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-gray">
                        <CheckCircle className="w-4 h-4 text-copper-gold mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Specs */}
                  <button
                    onClick={() => setExpanded(expanded === prod.id ? null : prod.id)}
                    className="flex items-center gap-2 text-sm text-copper-gold font-semibold mb-4 hover:text-light-gold transition-colors bg-transparent border-0 p-0"
                  >
                    {expanded === prod.id ? 'Hide' : 'View'} Specifications
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded === prod.id ? 'rotate-180' : ''}`} />
                  </button>

                  {expanded === prod.id && (
                    <div className="bg-cloud-white rounded-xl p-5 mb-6 border border-gray-100">
                      <div className="grid grid-cols-2 gap-3">
                        {Object.entries(prod.specs).map(([key, val]) => (
                          <div key={key}>
                            <div className="text-xs text-mid-gray font-medium uppercase tracking-wide mb-0.5">{key}</div>
                            <div className="text-steel-navy text-sm font-semibold">{val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-steel-navy hover:bg-iron-blue text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200"
                  >
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-iron-blue py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-5">
            Not Sure Which Machine Is Right for You?
          </h2>
          <p className="text-mid-gray text-lg leading-relaxed mb-8">
            Our technical team will analyze your production requirements and recommend the optimal folding solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-copper-gold hover:bg-light-gold text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 tracking-wide"
          >
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
