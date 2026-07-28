import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const studies = [
    {
      id: 'smart-home-brand',
      client: 'European Smart Home Brand',
      title: 'Reducing Defect Rate from 15% to 0.5% for Smart Lighting',
      desc: 'The client was struggling with high defect rates from a supplier they found on Alibaba. We stepped in, audited the factory, discovered systemic QC issues, and transitioned manufacturing to a verified partner.',
      metrics: [
        { label: 'Defect Rate', value: '-96%', icon: TrendingUp },
        { label: 'Cost per Unit', value: '-12%', icon: DollarSign },
        { label: 'Lead Time', value: '-2 Weeks', icon: Clock }
      ],
      imgQuery: 'smart home lighting electronics quality control factory'
    },
    {
      id: 'activewear-startup',
      client: 'US Activewear Startup',
      title: 'Consolidating Suppliers to Scale Production',
      desc: 'A growing activewear brand was managing 5 different suppliers for fabrics, packaging, and assembly, causing massive shipping delays. We consolidated their supply chain to a single capable manufacturer with stronger capabilities.',
      metrics: [
        { label: 'Shipping Costs', value: '-35%', icon: DollarSign },
        { label: 'Production Time', value: '-30%', icon: Clock },
        { label: 'Quality Consistency', value: '100%', icon: TrendingUp }
      ],
      imgQuery: 'activewear clothing manufacturing garments sewing'
    },
    {
      id: 'amazon-fba-seller',
      client: 'Amazon FBA Seller (Home Goods)',
      title: 'Finding the Right Factory for a Custom Product Mold',
      desc: 'The client needed a custom kitchen gadget but was getting quotes that were too high for the tooling. We sourced a mid-sized factory willing to co-invest in the mold, helping the seller launch 2 months ahead of schedule.',
      metrics: [
        { label: 'Tooling Cost', value: '-40%', icon: DollarSign },
        { label: 'Time to Market', value: '-2 Months', icon: Clock },
        { label: 'Sales Growth', value: '+200%', icon: TrendingUp }
      ],
      imgQuery: 'kitchen gadgets plastic injection molding factory'
    }
  ];

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold mb-6">Client Case Studies</h1>
          <p id="page-subtitle" className="text-lg md:text-xl text-slate-300">
            Real examples of how we've helped overseas buyers solve problems, cut costs, and scale their businesses through reliable China sourcing.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
          {studies.map((study) => (
            <Card key={study.id} className="overflow-hidden border-none shadow-lg bg-white flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full">
                    <img
                        data-strk-img-id={`case-study-img-${study.id}`}
                        data-strk-img={`[case-title-${study.id}] [case-client-${study.id}] ${study.imgQuery}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 text-primary bg-primary/10 hover:bg-primary/20" id={`case-client-${study.id}`}>
                        {study.client}
                    </Badge>
                    <h2 id={`case-title-${study.id}`} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                        {study.title}
                    </h2>
                    <p id={`case-desc-${study.id}`} className="text-slate-600 text-lg mb-8 leading-relaxed">
                        {study.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                    <metric.icon className="h-4 w-4" />
                                    <span>{metric.label}</span>
                                </div>
                                <span className="text-2xl font-bold text-primary">{metric.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to be our next success story?</h2>
          <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};