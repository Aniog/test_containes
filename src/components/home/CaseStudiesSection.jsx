import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cases = [
  {
    id: 'led-lighting',
    title: 'LED Lighting Importer — USA',
    category: 'Electronics',
    result: '35% cost reduction vs. previous supplier',
    summary: 'A US-based lighting distributor needed a reliable LED manufacturer after quality issues with their existing supplier. We audited 8 factories, shortlisted 2, and secured a new supplier with CE and UL certifications.',
    imgId: 'case-led-img-4f2a8b',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture Brand — Australia',
    category: 'Furniture',
    result: 'On-time delivery for 3 consecutive orders',
    summary: 'An Australian furniture brand struggled with production delays and inconsistent quality. We implemented a production monitoring schedule and pre-shipment inspection protocol that resolved both issues.',
    imgId: 'case-furniture-img-7c3e1d',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Private Label Apparel — UK',
    category: 'Apparel',
    result: 'Launched 3 SKUs within 90 days',
    summary: 'A UK fashion startup needed to develop a private label sportswear line from scratch. We managed supplier selection, sample development, labeling compliance, and first production run.',
    imgId: 'case-apparel-img-2b9f5c',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span id="cases-section-label" className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Case Studies</span>
          <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-brand-text mt-2 mb-4">
            Real Results for Real Buyers
          </h2>
          <p id="cases-section-subtitle" className="text-brand-muted text-lg max-w-2xl mx-auto">
            Here are a few examples of how we've helped global buyers source successfully from China.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-brand-gray rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow">
              <div className="relative h-44 overflow-hidden bg-brand-blue-light">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] [cases-section-subtitle] [cases-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {c.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                  <span className="text-brand-orange text-xs font-semibold">{c.result}</span>
                </div>
                <h3 id={c.titleId} className="font-semibold text-brand-text mb-2">{c.title}</h3>
                <p id={c.descId} className="text-brand-muted text-sm leading-relaxed">{c.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-navy text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            View All Case Studies <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
