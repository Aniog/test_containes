import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting Importer — UK',
    category: 'Electronics',
    summary:
      'A UK-based distributor needed a reliable LED manufacturer after a previous supplier delivered non-compliant products. We identified 4 factories, conducted audits, and secured a CE-certified supplier within 6 weeks.',
    result: 'Order placed within 6 weeks. 0 compliance issues on arrival.',
    imgId: 'case-led-3b7f2a',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
  },
  {
    id: 'furniture',
    title: 'Office Furniture Brand — Australia',
    category: 'Furniture',
    summary:
      'An Australian furniture brand wanted to move production to China. We sourced 3 manufacturers, managed sample rounds, and oversaw the first production run with in-line inspections.',
    result: '22% cost reduction vs. previous supplier. On-time delivery.',
    imgId: 'case-furniture-9c4d1e',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Sportswear Label — USA',
    category: 'Apparel',
    summary:
      'A US sportswear startup needed a factory for their first private-label collection. We managed supplier selection, sample development, and pre-shipment inspection for a 2,000-unit order.',
    result: 'First collection delivered on spec. Client reordered within 3 months.',
    imgId: 'case-apparel-5e8b3c',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

export default function HomeCaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-brand-light">
      <div className="container-xl">
        <div className="text-center mb-12">
          <span className="section-label">Client Results</span>
          <h2 className="section-heading">Case Studies</h2>
          <p className="section-subtext max-w-2xl mx-auto">
            Real projects, real outcomes. Here's how we've helped buyers source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">
                    {c.category}
                  </span>
                </div>
                <h3 id={c.titleId} className="font-semibold text-brand-dark mb-2">{c.title}</h3>
                <p id={c.descId} className="text-brand-mid text-sm leading-relaxed mb-4 flex-1">{c.summary}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2.5 text-sm text-brand-green font-medium">
                  ✓ {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies" className="btn-secondary inline-flex items-center gap-2">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
