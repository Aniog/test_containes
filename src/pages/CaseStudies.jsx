import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, Users, Clock, Shield, ArrowRight, 
  CheckCircle, Globe, Factory, Package
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'Consumer Electronics',
      location: 'United States',
      year: '2024',
      challenge: 'TechStart Inc., a US-based startup, needed to source 50,000 wireless chargers with specific certifications (FCC, CE) for their first product launch. They had no prior China sourcing experience and were concerned about quality and reliability.',
      solution: 'We conducted a comprehensive supplier search, identifying 5 qualified manufacturers. After factory verification visits, we selected 3 factories for sample production. Our team performed pre-shipment inspections and coordinated consolidated shipping from multiple suppliers.',
      result: 'Delivered on time with only 0.2% defect rate - well below the industry average. Total cost savings of 35% compared to their previous domestic supplier. Successfully launched product with zero quality issues.',
      metrics: [
        { label: 'Order Size', value: '50,000 units' },
        { label: 'Defect Rate', value: '0.2%' },
        { label: 'Cost Savings', value: '35%' },
        { label: 'On-Time Delivery', value: '100%' }
      ]
    },
    {
      company: 'HomeStyle Furniture',
      industry: 'Home Furnishings',
      location: 'United Kingdom',
      year: '2023',
      challenge: 'HomeStyle Furniture, a UK retailer, wanted to expand their product line with modern furniture sourced directly from China. They needed to manage multiple suppliers and ensure consistent quality across 120 different SKUs.',
      solution: 'We identified and verified 8 suitable factories across different provinces. Implemented a rigorous quality control process with during-production inspections. Coordinated consolidated shipping to reduce logistics costs by 40%.',
      result: 'Successfully launched 120 SKUs with less than 1% overall defect rate. Achieved 40% margin improvement compared to their previous supply chain. Established long-term partnerships with 4 verified suppliers.',
      metrics: [
        { label: 'Product SKUs', value: '120' },
        { label: 'Defect Rate', value: '<1%' },
        { label: 'Margin Improvement', value: '40%' },
        { label: 'Suppliers', value: '8' }
      ]
    },
    {
      company: 'MediCare Plus',
      industry: 'Medical Equipment',
      location: 'Germany',
      year: '2024',
      challenge: 'MediCare Plus, a German medical equipment distributor, needed to find FDA-registered and CE-certified manufacturers for medical device components. Quality and regulatory compliance were non-negotiable.',
      solution: 'We conducted rigorous supplier vetting focusing on regulatory certifications. Performed detailed quality management system audits. Coordinated with regulatory consultants to ensure all products met EU and US standards.',
      result: 'Partnered with 4 fully certified suppliers. All products passed regulatory audits on first attempt. Zero compliance issues in 18 months of partnership. Expanded product line from 20 to 65 SKUs.',
      metrics: [
        { label: 'Certifications', value: 'FDA, CE' },
        { label: 'Audit Pass Rate', value: '100%' },
        { label: 'Product Expansion', value: '225%' },
        { label: 'Compliance Issues', value: '0' }
      ]
    },
    {
      company: 'SportGear Pro',
      industry: 'Sports & Outdoor',
      location: 'Australia',
      year: '2023',
      challenge: 'SportGear Pro, an Australian sports equipment brand, needed to source high-quality yoga mats and fitness accessories. They had experienced quality issues with previous suppliers and needed a reliable partner.',
      solution: 'We performed factory verification visits to 6 potential suppliers. Implemented a strict quality control process including material inspection and final product testing. Established clear quality specifications and acceptance criteria.',
      result: 'Reduced defect rate from 8% to 0.5%. Increased order volume by 200% over 2 years. Developed exclusive products with supplier R&D collaboration. Achieved 25% cost reduction through better negotiation.',
      metrics: [
        { label: 'Defect Rate', value: '0.5%' },
        { label: 'Volume Growth', value: '200%' },
        { label: 'Cost Reduction', value: '25%' },
        { label: 'Client Since', value: '2021' }
      ]
    },
    {
      company: 'EcoPack Solutions',
      industry: 'Packaging',
      location: 'Canada',
      year: '2024',
      challenge: 'EcoPack Solutions, a Canadian sustainable packaging company, needed to source eco-friendly packaging materials from China. They required suppliers with environmental certifications and sustainable manufacturing practices.',
      solution: 'We identified suppliers with relevant environmental certifications (FSC, ISO 14001). Conducted factory audits focusing on sustainability practices. Implemented a traceability system for raw materials.',
      result: 'Sourced from 3 certified eco-friendly manufacturers. All products now have full traceability. Successfully launched 15 new sustainable product lines. Customer satisfaction increased by 30%.',
      metrics: [
        { label: 'Certifications', value: 'FSC, ISO 14001' },
        { label: 'New Products', value: '15' },
        { label: 'Satisfaction', value: '+30%' },
        { label: 'Traceability', value: '100%' }
      ]
    },
    {
      company: 'FashionForward',
      industry: 'Apparel',
      location: 'France',
      year: '2023',
      challenge: 'FashionForward, a French fashion brand, needed to source high-quality garments for their new collection. They required fast turnaround times and flexibility in order quantities to test market demand.',
      solution: 'We partnered with 5 flexible manufacturers capable of small-batch production. Implemented a rapid sample development process. Established a responsive production system with 2-week turnaround for reorders.',
      result: 'Reduced time-to-market by 60%. Successfully tested 30 new designs with small batches before mass production. Increased inventory turnover by 45%. Reduced dead stock by 70%.',
      metrics: [
        { label: 'Time Reduction', value: '60%' },
        { label: 'Designs Tested', value: '30' },
        { label: 'Inventory Turnover', value: '+45%' },
        { label: 'Dead Stock', value: '-70%' }
      ]
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: Package },
    { value: '98%', label: 'On-Time Delivery', icon: Clock },
    { value: '35%', label: 'Average Cost Savings', icon: TrendingUp },
    { value: '0.5%', label: 'Average Defect Rate', icon: Shield }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '20px'
            }}>
              Case Studies
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.7'
            }}>
              Real results from our partnerships with global buyers across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '60px 0',
        marginTop: '-40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          <div className="grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon size={32} style={{ color: 'var(--accent)', marginBottom: '12px' }} />
                <div style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '4px'
                }}>
                  {stat.value}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    backgroundColor: 'rgba(26, 54, 93, 0.1)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}>
                    {study.industry}
                  </span>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--text-muted)'
                  }}>
                    {study.location} | {study.year}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)' }}>
                  {study.company}
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '8px' }}>Challenge</p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>{study.challenge}</p>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '8px' }}>Solution</p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>{study.solution}</p>
                </div>
                
                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(56, 161, 105, 0.1)',
                  borderRadius: '8px',
                  borderLeft: '4px solid var(--success)',
                  marginBottom: '24px'
                }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--success)', marginBottom: '12px' }}>Result</p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '15px' }}>{study.result}</p>
                </div>
                
                <div className="grid-4" style={{ gap: '16px' }}>
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center" style={{
                      padding: '12px',
                      backgroundColor: 'var(--background)',
                      borderRadius: '8px'
                    }}>
                      <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>
                        {metric.value}
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="card p-8" style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '16px'
            }}>
              Ready to Be Our Next Success Story?
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
              lineHeight: '1.7'
            }}>
              Join hundreds of satisfied clients who have transformed their China sourcing experience.
            </p>
            <Link to="/contact" className="btn btn-cta btn-lg">
              Get a Free Sourcing Quote
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
