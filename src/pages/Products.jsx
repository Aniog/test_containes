import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { ArrowRight, Ruler, Gauge, Layers, Settings } from 'lucide-react';
import strkImgConfig from '../strk-img-config.json';

const productList = [
  {
    name: 'Double Folding Machine',
    shortDesc: 'Versatile dual-action folding for complex sheet metal profiles.',
    description:
      'The ARTITECT Double Folding Machine delivers two independent folding actions in a single pass. Ideal for creating complex box sections, drip edges, and custom profiles. Available in hydraulic and CNC-controlled configurations with capacities from 1.2mm to 6mm mild steel.',
    specs: { capacity: '6mm mild steel', length: '2000mm – 4000mm', control: 'CNC / Manual' },
    imgId: 'prod-df-img-1a2b',
    titleId: 'prod-df-title',
    descId: 'prod-df-desc',
  },
  {
    name: 'Double Folder',
    shortDesc: 'Compact double-folder for precision small-batch production.',
    description:
      'Our Double Folder line is engineered for workshops needing quick setup and repeatable accuracy. The segmented top beam allows for box-and-pan folding while the backgauge ensures every fold lands exactly where it should.',
    specs: { capacity: '3mm mild steel', length: '1250mm – 2500mm', control: 'Digital Readout' },
    imgId: 'prod-dfo-img-3c4d',
    titleId: 'prod-dfo-title',
    descId: 'prod-dfo-desc',
  },
  {
    name: 'Sheet Metal Folder',
    shortDesc: 'Heavy-duty manual and hydraulic folders for every workshop.',
    description:
      'The classic ARTITECT Sheet Metal Folder is built with a rigid monoblock frame and induction-hardened folding beams. From the entry-level 1m hand folder to the 4m hydraulic beast, there is a model for every budget and capacity requirement.',
    specs: { capacity: '8mm mild steel', length: '1000mm – 4000mm', control: 'Manual / Hydraulic' },
    imgId: 'prod-smf-img-5e6f',
    titleId: 'prod-smf-title',
    descId: 'prod-smf-desc',
  },
  {
    name: 'Sheet Metal Folding Machine',
    shortDesc: 'Computer-controlled folding with programmable depth and angle.',
    description:
      'The ARTITECT Sheet Metal Folding Machine brings modern CNC control to traditional folding. Store hundreds of programs, recall jobs instantly, and let the machine handle backgauge positioning and angle setting for flawless repeatability.',
    specs: { capacity: '4mm mild steel', length: '2000mm – 4000mm', control: 'CNC Touchscreen' },
    imgId: 'prod-smfm-img-7g8h',
    titleId: 'prod-smfm-title',
    descId: 'prod-smfm-desc',
  },
  {
    name: 'Metal Folder',
    shortDesc: 'Robust all-metal construction folder built for industrial use.',
    description:
      'When reliability is non-negotiable, the ARTITECT Metal Folder stands ready. Cast-iron frame, chrome-plated beams, and sealed bearings mean years of maintenance-free operation even in the toughest fabrication environments.',
    specs: { capacity: '5mm mild steel', length: '1500mm – 3000mm', control: 'Manual / Hydraulic' },
    imgId: 'prod-mf-img-9i0j',
    titleId: 'prod-mf-title',
    descId: 'prod-mf-desc',
  },
  {
    name: 'Metal Folding Machine',
    shortDesc: 'High-speed automated folding for production-scale output.',
    description:
      'The flagship ARTITECT Metal Folding Machine is designed for factories where throughput is king. Servo-electric backgauge, automatic crowning compensation, and robot-ready interfaces make it the cornerstone of any modern sheet metal production line.',
    specs: { capacity: '6mm mild steel', length: '2500mm – 6000mm', control: 'Full CNC / Robot' },
    imgId: 'prod-mfm-img-1k2l',
    titleId: 'prod-mfm-title',
    descId: 'prod-mfm-desc',
  },
];

const specIcons = {
  capacity: Ruler,
  length: Layers,
  control: Settings,
};

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Our Product Line
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Sheet Metal Folding Machines
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From compact workshop folders to industrial CNC systems — discover the machine that fits your workflow.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section ref={containerRef} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productList.map((product) => (
              <article
                key={product.name}
                className="bg-white border border-border-light rounded-sm overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="aspect-[4/3] bg-cream overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 id={product.titleId} className="text-xl font-bold text-navy mb-2">
                    {product.name}
                  </h2>
                  <p id={product.descId} className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {product.shortDesc}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-5 pt-4 border-t border-border-light">
                    {Object.entries(product.specs).map(([key, value]) => {
                      const Icon = specIcons[key] || Gauge;
                      return (
                        <div key={key} className="text-center">
                          <Icon className="w-4 h-4 text-gold mx-auto mb-1" />
                          <p className="text-[10px] uppercase tracking-wider text-text-secondary">
                            {key}
                          </p>
                          <p className="text-xs font-semibold text-navy">{value}</p>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-navy bg-cream hover:bg-gold hover:text-navy py-3 rounded-sm transition-colors"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Banner */}
      <section className="py-16 md:py-20 bg-white border-t border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading mb-4">Need Help Choosing?</h2>
          <p className="section-subheading mb-8">
            Our engineers will analyze your material, thickness, and volume requirements to recommend the perfect machine.
          </p>
          <a href="/contact" className="btn-primary">
            Talk to an Engineer
          </a>
        </div>
      </section>
    </div>
  );
}
