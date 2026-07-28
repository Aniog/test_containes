import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const cases = [
    {
      client: 'US Retail Chain',
      location: 'United States',
      industry: 'Home Improvement',
      product: 'LED Lighting Products',
      challenge: 'High defect rates (8%) from previous supplier were damaging brand reputation and increasing returns.',
      solution: 'We identified three new manufacturers, conducted full audits, and implemented a two-stage inspection process (in-process + pre-shipment).',
      results: [
        'Defect rate reduced to under 1%',
        'Monthly volume increased from 25,000 to 40,000 units',
        'Unit cost reduced by 11%',
        'On-time delivery improved to 97%',
      ],
      timeline: '14 weeks from initial inquiry to first shipment',
    },
    {
      client: 'European Distributor',
      location: 'Germany',
      industry: 'Kitchen & Home',
      product: 'Small Kitchen Appliances',
      challenge: 'Long lead times and inconsistent quality from trading company. No direct factory relationship or visibility.',
      solution: 'We sourced direct manufacturers for 12 SKUs, consolidated orders, and established a quarterly production calendar with buffer stock planning.',
      results: [
        'Lead time reduced from 90 to 58 days',
        'Quality complaints dropped 70%',
        'Freight cost per unit reduced 18% through consolidation',
        'Now sourcing 28 SKUs with the same suppliers',
      ],
      timeline: '11 weeks to first consolidated shipment',
    },
    {
      client: 'Australian Importer',
      location: 'Australia',
      industry: 'Outdoor Living',
      product: 'Garden Furniture & Accessories',
      challenge: 'Trading company markup was 35%. Quality varied significantly between batches. Limited communication.',
      solution: 'We verified and contracted directly with the factory, optimized container loading, and introduced a pre-production sample approval step.',
      results: [
        'Total landed cost reduced 22%',
        'Consistent quality across 4 production runs',
        'Container utilization improved from 78% to 94%',
        'Direct factory relationship established',
      ],
      timeline: '9 weeks to first direct shipment',
    },
    {
      client: 'Canadian E-commerce Brand',
      location: 'Canada',
      industry: 'Consumer Electronics',
      product: 'Bluetooth Speakers & Accessories',
      challenge: 'Needed reliable supplier for new product line launch. Tight timeline and strict quality requirements.',
      solution: 'We sourced 4 qualified factories, managed rapid sample development, and coordinated parallel production across two suppliers to meet launch date.',
      results: [
        'First production run delivered on schedule',
        'Zero defects in pre-shipment inspection',
        'Successfully launched 6 SKUs simultaneously',
        'Repeat order placed within 60 days',
      ],
      timeline: '6 weeks from inquiry to delivery',
    },
    {
      client: 'UK Hardware Wholesaler',
      location: 'United Kingdom',
      industry: 'Tools & Hardware',
      product: 'Hand Tools & Safety Equipment',
      challenge: 'Previous supplier failed social compliance audit. Needed alternative with verified working conditions and certifications.',
      solution: 'We conducted social compliance audits on 7 factories, selected 2 that met requirements, and managed transition without supply interruption.',
      results: [
        'Passed client social audit on first attempt',
        'Maintained supply continuity during transition',
        'Added CE and UKCA certification support',
        'Now primary supplier for 3 product lines',
      ],
      timeline: '10 weeks for full transition',
    },
    {
      client: 'Scandinavian Design Brand',
      location: 'Sweden',
      industry: 'Home Decor',
      product: 'Ceramic & Glassware',
      challenge: 'High breakage rates during shipping. Needed better packaging and quality control for fragile items.',
      solution: 'We worked with the factory on packaging redesign, implemented drop testing, and added loading supervision for every container.',
      results: [
        'Breakage rate reduced from 6% to under 0.5%',
        'Packaging cost per unit reduced 9%',
        'Insurance claims eliminated',
        'Expanded to 3 additional product categories',
      ],
      timeline: '8 weeks including packaging redesign',
    },
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="case-hero-title">Case Studies</h1>
          <p id="case-hero-subtitle">Real results for businesses sourcing from China</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="case-hero"
              data-strk-img="[case-hero-subtitle] [case-hero-title] success results"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Case studies overview"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
            <p style={{ color: 'var(--color-text-light)', textAlign: 'center' }}>
              These examples represent typical projects. Every sourcing engagement is different, 
              and we tailor our approach to your specific requirements and constraints.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '2rem' }}>
            {cases.map((c, idx) => (
              <div key={idx} className="card" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                  <div style={{ flex: '1 1 280px' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>
                      {c.industry} • {c.location}
                    </div>
                    <h3 id={`case-client-${idx}`} style={{ marginBottom: '0.25rem' }}>{c.client}</h3>
                    <p style={{ fontWeight: 500, color: 'var(--color-accent)', marginBottom: '1rem' }}>{c.product}</p>
                    
                    <img
                      data-strk-img-id={`case-${idx + 1}`}
                      data-strk-img={`[case-client-${idx}] success results manufacturing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                      alt={c.product}
                      style={{ width: '100%', borderRadius: '6px', marginBottom: '1rem' }}
                    />
                    
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>CHALLENGE</div>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>{c.challenge}</p>
                    </div>
                    
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>SOLUTION</div>
                      <p style={{ fontSize: '0.9375rem', margin: 0 }}>{c.solution}</p>
                    </div>
                  </div>
                  
                  <div style={{ flex: '1 1 280px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>RESULTS</div>
                    <ul style={{ fontSize: '0.9375rem', paddingLeft: '1.25rem', margin: 0 }}>
                      {c.results.map((r, i) => (
                        <li key={i} style={{ marginBottom: '0.375rem', color: 'var(--color-success)' }}>{r}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                      Timeline: {c.timeline}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
            Every successful sourcing relationship starts with a conversation.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;