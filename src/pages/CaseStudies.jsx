import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Clock, Shield, Users } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechStart Inc.',
    industry: 'Electronics',
    location: 'USA',
    year: '2024',
    challenge: 'TechStart Inc., a US-based startup, needed to find a reliable manufacturer for smart home devices with strict quality requirements. They had limited experience with China sourcing and were concerned about quality control and IP protection.',
    approach: 'We conducted thorough supplier identification, focusing on factories with experience in smart home electronics and relevant certifications. We performed on-site factory verification visits, assessed production capabilities, and implemented a rigorous QC process including during-production inspections.',
    result: 'Sourced 3 verified factories, conducted thorough QC inspections at each production stage, and delivered 50,000 units with less than 1% defect rate. The client achieved 35% cost savings compared to their original budget.',
    metrics: [
      { label: 'Cost Savings', value: '35%' },
      { label: 'Defect Rate', value: '<1%' },
      { label: 'Order Size', value: '50,000 units' }
    ]
  },
  {
    client: 'Fashion Forward Ltd.',
    industry: 'Apparel',
    location: 'UK',
    year: '2023',
    challenge: 'Fashion Forward Ltd., a British fashion retailer, was struggling with inconsistent quality and missed deadlines from their previous suppliers. They needed a partner who could ensure consistent quality and on-time delivery for their private label clothing line.',
    approach: 'We implemented a comprehensive production monitoring system with weekly factory visits, quality checkpoints at critical production stages, and established clear quality benchmarks. We also negotiated improved payment terms and established contingency plans for potential delays.',
    result: 'On-time delivery improved from 72% to 98%. Quality consistency increased significantly, with defect rates dropping to under 2%. The client expanded their order volume by 40% in the following year.',
    metrics: [
      { label: 'On-Time Delivery', value: '98%' },
      { label: 'Quality Improvement', value: '+40%' },
      { label: 'Order Growth', value: '40%' }
    ]
  },
  {
    client: 'GreenHome Co.',
    industry: 'Home Goods',
    location: 'Australia',
    year: '2024',
    challenge: 'GreenHome Co., an Australian home goods retailer, was a first-time importer unfamiliar with Chinese manufacturing and shipping processes. They needed end-to-end guidance from supplier selection to final delivery.',
    approach: 'We provided comprehensive support including supplier identification, factory verification, sample management, production monitoring, and complete logistics coordination. We handled all documentation and customs clearance, providing the client with regular updates throughout the process.',
    result: 'Successful first import of eco-friendly home products. Complete documentation and 100% customs compliance. The client has since placed 3 additional orders and plans to expand their product line.',
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'First Order', value: 'Success' },
      { label: 'Repeat Orders', value: '3' }
    ]
  },
  {
    client: 'AutoParts Direct',
    industry: 'Automotive',
    location: 'Germany',
    year: '2023',
    challenge: 'AutoParts Direct, a German automotive parts distributor, needed to source specialized car accessories from China. They required suppliers with specific certifications (IATF 16949) and needed parts that met European quality standards.',
    approach: 'We focused our search on factories with automotive industry certifications and experience supplying to European markets. We conducted detailed factory audits, verified quality management systems, and arranged for third-party testing to ensure compliance with EU standards.',
    result: 'Identified and verified 2 suppliers meeting all requirements. Implemented a quality control protocol that resulted in zero customer complaints in the first year. The client expanded their product catalog by 25 SKUs.',
    metrics: [
      { label: 'Customer Complaints', value: '0' },
      { label: 'New SKUs', value: '25' },
      { label: 'Supplier Match', value: '100%' }
    ]
  },
  {
    client: 'Wellness Plus',
    industry: 'Health & Beauty',
    location: 'Canada',
    year: '2024',
    challenge: 'Wellness Plus, a Canadian health and beauty brand, wanted to launch a new line of natural skincare products. They needed a manufacturer with organic certification capabilities and experience with GMP-compliant production.',
    approach: 'We identified factories with organic certification (COSMOS, USDA Organic) and GMP-compliant facilities. We arranged virtual factory tours, coordinated sample production with different formulations, and facilitated communication between the client\'s product team and manufacturers.',
    result: 'Successfully launched 12 products with organic certification. The client achieved 25% lower manufacturing costs than initially projected. The products received positive market reception with 4.5-star average customer rating.',
    metrics: [
      { label: 'Products Launched', value: '12' },
      { label: 'Cost Savings', value: '25%' },
      { label: 'Customer Rating', value: '4.5 stars' }
    ]
  },
  {
    client: 'SportZone',
    industry: 'Sports Equipment',
    location: 'USA',
    year: '2023',
    challenge: 'SportZone, a US sporting goods retailer, needed to source high-quality fitness equipment at competitive prices. They were expanding their private label program and needed a reliable manufacturing partner for long-term partnership.',
    approach: 'We conducted a comprehensive supplier search focusing on factories with experience in fitness equipment manufacturing and strong export track records. We negotiated favorable pricing based on projected volume growth and established a structured quality assurance program.',
    result: 'Established a 3-year partnership with a verified manufacturer. Achieved 30% cost reduction through volume optimization. Product quality consistently meets or exceeds industry standards with less than 0.5% defect rate.',
    metrics: [
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Defect Rate', value: '<0.5%' },
      { label: 'Partnership', value: '3 years' }
    ]
  }
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
        padding: '100px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
              Case Studies
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              Real results from real clients who trusted us with their China sourcing. 
              See how we've helped businesses worldwide succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '32px' }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="card" style={{ padding: '32px' }}>
                <div className="flex-between mb-4">
                  <div>
                    <h3 style={{ marginBottom: '8px', fontSize: '22px' }}>{study.client}</h3>
                    <div className="flex gap-3">
                      <span style={{ 
                        background: '#F1F5F9', 
                        padding: '4px 12px', 
                        borderRadius: '20px',
                        fontSize: '13px',
                        color: '#475569'
                      }}>
                        {study.industry}
                      </span>
                      <span style={{ 
                        background: '#F1F5F9', 
                        padding: '4px 12px', 
                        borderRadius: '20px',
                        fontSize: '13px',
                        color: '#475569'
                      }}>
                        {study.location}
                      </span>
                      <span style={{ 
                        background: '#F1F5F9', 
                        padding: '4px 12px', 
                        borderRadius: '20px',
                        fontSize: '13px',
                        color: '#475569'
                      }}>
                        {study.year}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Challenge
                  </h4>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                    {study.challenge}
                  </p>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Approach
                  </h4>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                    {study.approach}
                  </p>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', color: '#64748B', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Result
                  </h4>
                  <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>
                    {study.result}
                  </p>
                </div>
                
                <div className="grid grid-3" style={{ gap: '12px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E2E8F0' }}>
                  {study.metrics.map((metric, mIndex) => (
                    <div key={mIndex} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E3A5F' }}>
                        {metric.value}
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748B' }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Our Track Record</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              Years of experience helping businesses source from China successfully
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="text-center" style={{ padding: '24px' }}>
              <Users size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#1E3A5F', marginBottom: '8px' }}>500+</div>
              <div style={{ color: '#64748B', fontSize: '14px' }}>Verified Suppliers</div>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <TrendingUp size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#1E3A5F', marginBottom: '8px' }}>1,200+</div>
              <div style={{ color: '#64748B', fontSize: '14px' }}>Orders Fulfilled</div>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <Shield size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#1E3A5F', marginBottom: '8px' }}>98%</div>
              <div style={{ color: '#64748B', fontSize: '14px' }}>Client Satisfaction</div>
            </div>
            <div className="text-center" style={{ padding: '24px' }}>
              <Clock size={40} style={{ color: '#1E3A5F', marginBottom: '16px' }} />
              <div style={{ fontSize: '36px', fontWeight: '700', color: '#1E3A5F', marginBottom: '8px' }}>15+</div>
              <div style={{ color: '#64748B', fontSize: '14px' }}>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Write Your Success Story?</h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              Join hundreds of satisfied clients who have transformed their China sourcing experience.
            </p>
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Get a Free Quote
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
