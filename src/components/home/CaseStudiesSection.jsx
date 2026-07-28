import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'case-1',
    title: 'Electronics Brand Saves 30% on Component Costs',
    desc: 'A US-based electronics brand needed reliable PCB assembly suppliers. We identified 3 qualified factories, negotiated pricing, and managed QC — reducing their unit cost by 30%.',
    result: '30% cost reduction',
    imgId: 'case-study-1-d4e5f6',
    titleId: 'case-title-1',
    descId: 'case-desc-1',
  },
  {
    id: 'case-2',
    title: 'Furniture Retailer Scales from 1 to 5 Product Lines',
    desc: 'A European furniture retailer wanted to expand their product range. We sourced 5 new product lines from different specialized factories, all meeting EU safety standards.',
    result: '5 new product lines',
    imgId: 'case-study-2-d4e5f7',
    titleId: 'case-title-2',
    descId: 'case-desc-2',
  },
  {
    id: 'case-3',
    title: 'Startup Launches First Product with Zero Defects',
    desc: 'A first-time importer with no China experience launched a kitchen gadget. We handled everything from supplier selection to final QC, achieving a 0% defect rate on the first shipment.',
    result: '0% defect rate',
    imgId: 'case-study-3-d4e5f8',
    titleId: 'case-title-3',
    descId: 'case-desc-3',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Case Studies
          </h2>
          <p id="cases-section-subtitle" className="mt-4 text-lg text-slate-600">
            Real results from real clients. See how we have helped businesses source successfully from China.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div
                data-strk-bg-id={c.imgId}
                data-strk-bg={`[${c.descId}] [${c.titleId}] [cases-section-subtitle] [cases-section-title]`}
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="600"
              >
                <div className="aspect-[16/9] bg-slate-100" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h3 id={c.titleId} className="font-semibold text-slate-900 leading-snug">
                  {c.title}
                </h3>
                <p id={c.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                  {c.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-orange transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}