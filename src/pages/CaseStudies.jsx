import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const cases = [
    {
      client: 'European Home Goods Retailer',
      location: 'Germany',
      category: 'Kitchenware & Tabletop',
      challenge: 'Needed to expand supplier base for private-label kitchen products while maintaining quality standards and reducing landed cost.',
      approach: 'We conducted a targeted supplier search across three provinces, performed on-site audits of 8 factories, and coordinated sample production from the top 4 candidates.',
      results: [
        '12 qualified suppliers identified and verified',
        'Unit cost reduced by 22% compared to previous supplier',
        'Quality acceptance rate improved from 87% to 96%',
        'Established ongoing QC program with quarterly audits',
      ],
      metrics: [
        { value: '22%', label: 'Cost Reduction' },
        { value: '96%', label: 'Quality Pass Rate' },
        { value: '12', label: 'Suppliers Qualified' },
      ],
      timeline: '6 weeks from briefing to first production order',
    },
    {
      client: 'US Industrial Equipment Distributor',
      location: 'United States',
      category: 'Hydraulic Components',
      challenge: 'Required reliable sources for OEM hydraulic fittings and valves. Previous attempts with trading companies resulted in inconsistent quality and delivery delays.',
      approach: 'We focused on identifying direct manufacturers with in-house machining capabilities. Factory audits included equipment verification and quality system review. We also coordinated material certification requirements.',
      results: [
        '3 factories qualified for ongoing supply',
        'Established direct manufacturer relationships',
        'Implemented pre-shipment inspection protocol',
        'Reduced lead time variability by 40%',
      ],
      metrics: [
        { value: '3', label: 'Factories Qualified' },
        { value: '40%', label: 'Lead Time Improvement' },
        { value: '18', label: 'SKUs Sourced' },
      ],
      timeline: '10 weeks including sample approval and first bulk order',
    },
    {
      client: 'Australian Outdoor Brand',
      location: 'Australia',
      category: 'Camping Equipment',
      challenge: 'Launching a new line of camping furniture and needed a partner to manage the full production process for an 8,000-unit initial order with tight seasonal timing.',
      approach: 'We managed the complete process: supplier selection, factory verification, sample coordination, production monitoring, and pre-shipment inspection. Weekly progress reports kept the client informed throughout.',
      results: [
        'Production completed on schedule',
        '100% on-time delivery to warehouse',
        'Quality issues identified and corrected during production',
        'Documentation and labeling compliant for Australian market',
      ],
      metrics: [
        { value: '100%', label: 'On-Time Delivery' },
        { value: '8,000', label: 'Units Delivered' },
        { value: '0', label: 'Quality Rejections' },
      ],
      timeline: '14 weeks from initial briefing to warehouse delivery',
    },
    {
      client: 'Canadian Medical Supply Company',
      location: 'Canada',
      category: 'Medical Consumables',
      challenge: 'Needed to qualify suppliers for non-sterile medical examination gloves meeting specific ASTM standards. Required documented quality systems and traceability.',
      approach: 'We identified manufacturers with relevant certifications and conducted detailed audits focusing on quality management, raw material sourcing, and batch traceability. Coordinated third-party lab testing of samples.',
      results: [
        '2 suppliers qualified with full documentation',
        'All products passed required ASTM testing',
        'Established batch traceability procedures',
        'Supplier approved for ongoing framework agreement',
      ],
      metrics: [
        { value: '2', label: 'Suppliers Qualified' },
        { value: '100%', label: 'Test Pass Rate' },
        { value: '6', label: 'Audit Reports Delivered' },
      ],
      timeline: '8 weeks including lab testing coordination',
    },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              CASE STUDIES
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Client Results</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              Examples of sourcing projects we have completed for international buyers. Results vary by product, volume, and requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          {cases.map((caseStudy, index) => (
            <div key={index} className="card" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <h3 style={{ marginBottom: '0.25rem' }}>{caseStudy.client}</h3>
                  <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                    {caseStudy.location} • {caseStudy.category}
                  </div>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)', textAlign: 'right' }}>
                  {caseStudy.timeline}
                </div>
              </div>

              <div className="grid-2" style={{ gap: '2rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>CHALLENGE</div>
                  <p style={{ fontSize: '0.9375rem', margin: 0 }}>{caseStudy.challenge}</p>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>APPROACH</div>
                  <p style={{ fontSize: '0.9375rem', margin: 0 }}>{caseStudy.approach}</p>
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>RESULTS</div>
                <ul style={{ fontSize: '0.9375rem', paddingLeft: '1.25rem', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.25rem' }}>
                  {caseStudy.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                {caseStudy.metrics.map((metric, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-accent)' }}>{metric.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Your Project Could Be Next</h2>
        <p className="text-muted" style={{ marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
          Every sourcing project is different. Contact us to discuss your specific requirements.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Sourcing Quote</Link>
      </section>
    </>
  );
};

export default CaseStudies;