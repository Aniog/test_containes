import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Shield, Users, Globe, Award } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      client: 'European Retail Chain',
      location: 'Germany',
      industry: 'Home Goods',
      year: '2024',
      challenge: 'A major European home goods retailer needed to find a reliable supplier for 50,000 units of kitchenware products with strict EU safety and quality standards. Previous attempts to source directly from China had resulted in quality issues and delays.',
      solution: 'We conducted a comprehensive supplier search, evaluating 15+ factories. After thorough verification, we selected three qualified manufacturers. We implemented a rigorous QC process including pre-production, in-process, and pre-shipment inspections. Regular factory visits ensured consistent quality.',
      result: 'Delivered 50,000 units with a 99.2% pass rate. The client established an ongoing partnership and has since placed 3 additional orders. Quality issues reduced by 95% compared to previous sourcing attempts.',
      metrics: [
        { value: '99.2%', label: 'Quality Pass Rate' },
        { value: '50K', label: 'Units Delivered' },
        { value: '3', label: 'Repeat Orders' },
      ],
    },
    {
      client: 'US Technology Startup',
      location: 'United States',
      industry: 'Electronics',
      year: '2024',
      challenge: 'A Silicon Valley tech startup needed to launch their first consumer electronics product within a tight timeline and limited budget. They had no prior experience sourcing from China and were concerned about quality and IP protection.',
      solution: 'We provided end-to-end sourcing services including supplier matching, prototype development coordination, and quality control. We helped negotiate favorable payment terms and implemented strict IP protection measures with the manufacturer.',
      result: 'Product launched 3 weeks ahead of schedule. Total cost savings of 35% compared to US-based manufacturers. The startup has raised Series A funding and is now working with us on their second product.',
      metrics: [
        { value: '35%', label: 'Cost Savings' },
        { value: '3 weeks', label: 'Ahead of Schedule' },
        { value: '100%', label: 'IP Protection' },
      ],
    },
    {
      client: 'Australian Distribution Company',
      location: 'Australia',
      industry: 'Apparel & Textiles',
      year: '2023',
      challenge: 'An Australian fashion distributor wanted to launch an eco-friendly clothing line requiring sustainable materials and fair-trade certified manufacturing. They needed help navigating the complex certification requirements.',
      solution: 'We identified certified manufacturers in China with GOTS and Fair Trade certifications. We conducted social compliance audits and established a transparent supply chain. Regular third-party audits ensured ongoing compliance.',
      result: 'Successfully launched the eco-friendly line with all certifications in place. The product line achieved 200% revenue growth in its first year. The client expanded to 3 additional sustainable product categories.',
      metrics: [
        { value: '200%', label: 'Revenue Growth' },
        { value: '3', label: 'New Categories' },
        { value: '100%', label: 'Certified' },
      ],
    },
    {
      client: 'Canadian Industrial Equipment Distributor',
      location: 'Canada',
      industry: 'Industrial',
      year: '2023',
      challenge: 'A Canadian distributor of industrial equipment needed to source specialized machinery parts at competitive prices while meeting strict North American safety standards (CSA certification).',
      solution: 'We identified and verified manufacturers with existing CSA certification experience. We coordinated the certification process and conducted thorough quality inspections. We also arranged for CSA marking at the factory.',
      result: 'Successfully sourced parts at 40% lower cost than previous suppliers. All products received CSA certification on first attempt. Established a reliable supply chain with 98% on-time delivery rate.',
      metrics: [
        { value: '40%', label: 'Cost Reduction' },
        { value: '98%', label: 'On-Time Delivery' },
        { value: '100%', label: 'CSA Pass Rate' },
      ],
    },
    {
      client: 'UK E-commerce Brand',
      location: 'United Kingdom',
      industry: 'Health & Beauty',
      year: '2024',
      challenge: 'A UK e-commerce brand wanted to launch a private label range of skincare products. They needed help with formulation, packaging design, and finding a manufacturer that could meet EU cosmetic regulations.',
      solution: 'We connected them with a manufacturer specializing in private label cosmetics. We coordinated product development, including formulation and packaging. We ensured all products met EU cosmetic regulations and obtained necessary testing.',
      result: 'Launched 15 SKUs within 6 months. All products passed EU regulatory requirements. The brand achieved £500K in first-year sales and has become a top seller in their category on Amazon UK.',
      metrics: [
        { value: '15', label: 'SKUs Launched' },
        { value: '£500K', label: 'First Year Sales' },
        { value: '6 months', label: 'Time to Market' },
      ],
    },
    {
      client: 'Middle East Trading Company',
      location: 'UAE',
      industry: 'General Merchandise',
      year: '2023',
      challenge: 'A trading company in the UAE needed to source a wide variety of consumer goods for their retail network across the Middle East. They required competitive pricing, reliable quality, and help with regional compliance.',
      solution: 'We established a comprehensive sourcing program covering multiple product categories. We negotiated volume discounts with factories and implemented a unified quality control standard. We also coordinated with local agents for UAE compliance.',
      result: 'Sourced over 200 different products at 25% below previous pricing. Established a streamlined supply chain serving 50+ retail locations. Reduced sourcing cycle time by 60%.',
      metrics: [
        { value: '200+', label: 'Products Sourced' },
        { value: '25%', label: 'Cost Savings' },
        { value: '50+', label: 'Retail Locations' },
      ],
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Clients Worldwide' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Clock, value: '8+', label: 'Years Experience' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 100px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
              Case Studies
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              Real success stories from clients who trusted us with their China sourcing. See how we've helped businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '48px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }} className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon size={32} color="#C9A227" style={{ marginBottom: '12px' }} />
                <div style={{ fontSize: '36px', fontWeight: '700', color: '#1E3A5F', marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', color: '#718096' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                overflow: 'hidden',
                marginBottom: index < caseStudies.length - 1 ? '48px' : '0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div style={{ padding: '40px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ 
                        backgroundColor: '#C9A227', 
                        color: '#1E3A5F', 
                        padding: '4px 12px', 
                        borderRadius: '999px',
                        fontSize: '12px',
                        fontWeight: '600',
                      }}>
                        {study.industry}
                      </span>
                      <span style={{ fontSize: '14px', color: '#718096' }}>{study.location}</span>
                      <span style={{ fontSize: '14px', color: '#718096' }}>•</span>
                      <span style={{ fontSize: '14px', color: '#718096' }}>{study.year}</span>
                    </div>
                    <h3 style={{ fontSize: '28px', marginBottom: '8px' }}>{study.client}</h3>
                  </div>
                  
                  {/* Metrics */}
                  <div style={{ display: 'flex', gap: '24px' }} className="case-metrics">
                    {study.metrics.map((metric, mIndex) => (
                      <div key={mIndex} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E3A5F' }}>{metric.value}</div>
                        <div style={{ fontSize: '12px', color: '#718096' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="case-content">
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#718096', textTransform: 'uppercase', marginBottom: '8px' }}>Challenge</div>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4A5568' }}>{study.challenge}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#718096', textTransform: 'uppercase', marginBottom: '8px' }}>Solution</div>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4A5568' }}>{study.solution}</p>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#718096', textTransform: 'uppercase', marginBottom: '8px' }}>Result</div>
                    <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#38A169', fontWeight: '500' }}>{study.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#1E3A5F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>
              Ready to Write Your Success Story?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px', marginBottom: '32px' }}>
              Let us help you achieve similar results with your China sourcing.
            </p>
            <Link
              to="/contact"
              style={{
                backgroundColor: '#C9A227',
                color: '#1E3A5F',
                padding: '16px 32px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .case-content { grid-template-columns: 1fr !important; }
          .case-metrics { flex-wrap: wrap; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;