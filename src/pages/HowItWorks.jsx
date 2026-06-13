import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CTASection from '@/components/shared/CTASection';

const steps = [
  {
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, order volume, and any other requirements. We will assess feasibility and propose a sourcing plan.',
    details: [
      'Product specifications and requirements',
      'Target price and order volume',
      'Quality standards and certifications needed',
      'Timeline and delivery requirements',
    ],
    imgId: 'hiw-step1-s1t2u3',
  },
  {
    step: '02',
    title: 'Supplier Search & Verification',
    desc: 'We search our network, shortlist candidates, and conduct factory audits to verify capabilities and reliability.',
    details: [
      'Search across our verified supplier network',
      'Shortlist 3-5 qualified candidates',
      'On-site factory audits and verification',
      'Detailed supplier comparison report',
    ],
    imgId: 'hiw-step2-v4w5x6',
  },
  {
    step: '03',
    title: 'Sample & Negotiation',
    desc: 'We arrange samples, negotiate pricing and terms on your behalf, and ensure clear specifications before production begins.',
    details: [
      'Sample arrangement and evaluation',
      'Price negotiation on your behalf',
      'Terms and payment structure',
      'Final specification confirmation',
    ],
    imgId: 'hiw-step3-y7z8a9',
  },
  {
    step: '04',
    title: 'Production & Quality Control',
    desc: 'We follow production progress, conduct inspections at key stages, and report results with photos and detailed findings.',
    details: [
      'Production schedule monitoring',
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection (AQL)',
    ],
    imgId: 'hiw-step4-b1c2d3',
  },
  {
    step: '05',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight, handle documentation, and track your shipment until it arrives at your door.',
    details: [
      'Freight booking (sea, air, rail)',
      'Customs documentation preparation',
      'Shipment tracking and updates',
      'Door-to-door delivery coordination',
    ],
    imgId: 'hiw-step5-e4f5g6',
  },
];

export default function HowItWorksPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { ImageHelper } = await import('@strikingly/sdk');
        const strkImgConfig = (await import('@/strk-img-config.json')).default;
        if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch (e) {
        console.log('Image loading skipped:', e.message);
      }
    };
    loadImages();
  }, []);

  return (
    <>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            A clear, structured process that keeps you informed and in control at every stage of your sourcing journey.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {steps.map((s, i) => (
            <div key={s.step} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold text-lg">
                    {s.step}
                  </span>
                  <h2 className="text-2xl font-bold text-navy">{s.title}</h2>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  alt={s.title}
                  data-strk-img-id={s.imgId}
                  data-strk-img={`[hiw-desc-${s.imgId}] [hiw-title-${s.imgId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full rounded-xl bg-gray-200"
                />
                <h3 id={`hiw-title-${s.imgId}`} className="hidden">{s.title}</h3>
                <p id={`hiw-desc-${s.imgId}`} className="hidden">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
