import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const cases = [
    {
      client: 'European Home Goods Retailer',
      location: 'Germany',
      category: 'Home & Kitchen',
      challenge: 'Needed to source a new kitchenware collection with strict quality requirements and competitive pricing. Previous supplier had quality issues and long lead times.',
      solution: 'Conducted supplier search across 4 provinces, performed 6 factory audits, coordinated sample development, and established ongoing quality inspection protocol.',
      results: [
        '40% reduction in sourcing lead time',
        '18% cost reduction vs previous supplier',
        '98% first-pass quality rate on first production run',
        'Established 3 qualified backup suppliers',
      ],
      timeline: '14 weeks from inquiry to first shipment',
    },
    {
      client: 'North American Electronics Distributor',
      location: 'United States',
      category: 'Electronics & Components',
      challenge: 'Required reliable supply chain for 12 new product SKUs. Needed suppliers with RoHS compliance and consistent quality across multiple production batches.',
      solution: 'Identified 4 qualified component manufacturers, verified compliance documentation, implemented pre-shipment inspection for every batch, and set up production monitoring schedule.',
      results: [
        '12 SKUs successfully sourced from 3 factories',
        '98% average quality pass rate over 18 months',
        'On-time delivery rate above 95%',
        'Reduced incoming inspection costs by 60%',
      ],
      timeline: '22 weeks for initial setup, ongoing management',
    },
    {
      client: 'Australian Industrial Equipment Importer',
      location: 'Australia',
      category: 'Industrial Equipment',
      challenge: 'Sourcing specialized machinery components with tight tolerances. Required full material traceability and compliance documentation for end-customer requirements.',
      solution: 'Located 3 factories with CNC and precision machining capabilities, conducted detailed capability audits, coordinated material certification, and managed production with milestone inspections.',
      results: [
        'Successfully sourced 28 component SKUs',
        'All parts met dimensional tolerances on first run',
        'Complete documentation package delivered',
        'Established ongoing supply relationship',
      ],
      timeline: '18 weeks from inquiry to delivery',
    },
    {
      client: 'UK Apparel Brand',
      location: 'United Kingdom',
      category: 'Apparel & Textiles',
      challenge: 'Expanding product line required new outerwear supplier. Needed factory with GOTS organic certification and experience with technical fabrics.',
      solution: 'Searched certified factories in 3 regions, verified certification validity, coordinated sample development for 4 styles, and established quality standards for bulk production.',
      results: [
        'Secured GOTS-certified manufacturing partner',
        'First production run delivered on schedule',
        'Quality standards met on 95% of units',
        'Repeat orders placed within 6 months',
      ],
      timeline: '16 weeks to first delivery',
    },
    {
      client: 'Canadian Hardware Wholesaler',
      location: 'Canada',
      category: 'Hardware & Tools',
      challenge: 'Needed to diversify supply base for hand tools and fasteners. Previous single-source supplier had capacity constraints and pricing pressure.',
      solution: 'Identified 5 potential suppliers, conducted verification audits on 3, coordinated samples for 40+ SKUs, and negotiated volume pricing across multiple product lines.',
      results: [
        'Added 2 qualified suppliers to portfolio',
        '15% average cost reduction on tool range',
        'Improved delivery flexibility',
        'Reduced single-source risk',
      ],
      timeline: '12 weeks for supplier onboarding',
    },
    {
      client: 'Middle East Packaging Distributor',
      location: 'UAE',
      category: 'Packaging & Materials',
      challenge: 'Required custom printed packaging for food products. Needed supplier with food-grade certification and experience with export documentation for GCC markets.',
      solution: 'Located 4 packaging manufacturers with relevant certifications, coordinated artwork and sample approval, managed production schedule, and handled export documentation.',
      results: [
        'Food-grade certified supplier secured',
        'First order of 150,000 units delivered',
        'All GCC compliance documentation provided',
        'Ongoing quarterly orders established',
      ],
      timeline: '10 weeks from inquiry to delivery',
    },
  ];

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Case Studies</h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl">
            Real sourcing projects for international buyers. Results achieved through structured supplier verification and quality management.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {cases.map((cs, idx) => (
            <Card key={idx} className="overflow-hidden">
              <CardContent className="pt-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-xs font-medium rounded">{cs.category}</span>
                  <span className="inline-block px-3 py-1 bg-[#f1f5f9] text-xs font-medium rounded">{cs.location}</span>
                </div>
                <CardTitle className="text-2xl mb-6">{cs.client}</CardTitle>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold text-sm tracking-widest text-[#64748b] mb-2">CHALLENGE</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm tracking-widest text-[#64748b] mb-2">OUR APPROACH</h4>
                    <p className="text-sm text-[#475569] leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm tracking-widest text-[#64748b] mb-2">RESULTS</h4>
                    <ul className="space-y-1.5 text-sm text-[#475569]">
                      {cs.results.map((r, rIdx) => (
                        <li key={rIdx} className="flex gap-2">• {r}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#64748b] mt-3">Timeline: {cs.timeline}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fafc] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
          <p className="text-[#475569] mb-6">Contact us to discuss your sourcing requirements.</p>
          <Button asChild variant="accent">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
