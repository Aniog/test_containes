import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, Search, FileCheck, Package, Truck, 
  CheckCircle, Users, Clock 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      icon: MessageCircle,
      description: 'We start with a detailed discussion of your product requirements, target specifications, quality standards, budget range, and timeline.',
      details: [
        'Product specifications and technical requirements',
        'Target pricing and volume expectations',
        'Quality standards and acceptance criteria',
        'Timeline and delivery requirements',
        'Any regulatory or compliance considerations',
      ],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      icon: Search,
      description: 'We identify potential manufacturers from our network and industry databases, then screen them against your criteria.',
      details: [
        'Database and network search',
        'Initial capability screening',
        'Preliminary pricing comparison',
        'Shortlist of 3-5 qualified candidates',
        'Presentation of options with profiles',
      ],
    },
    {
      number: '03',
      title: 'Factory Verification',
      icon: FileCheck,
      description: 'We conduct on-site audits of shortlisted factories to verify legitimacy, capabilities, and suitability before you commit.',
      details: [
        'Business registration verification',
        'Production capacity assessment',
        'Equipment and facility inspection',
        'Quality system review',
        'Detailed report with photos',
      ],
    },
    {
      number: '04',
      title: 'Sampling & Approval',
      icon: Package,
      description: 'We coordinate sample production and delivery so you can evaluate quality and specifications before placing a production order.',
      details: [
        'Sample order coordination',
        'Sample inspection and photos',
        'Feedback collection and communication',
        'Specification refinement if needed',
        'Final approval before production',
      ],
    },
    {
      number: '05',
      title: 'Production & Monitoring',
      icon: Users,
      description: 'Once production begins, we track progress against the schedule and provide regular updates with photos and milestone reports.',
      details: [
        'Production schedule confirmation',
        'Regular progress updates',
        'Issue identification and escalation',
        'Photo documentation at key stages',
        'Timeline risk alerts',
      ],
    },
    {
      number: '06',
      title: 'Quality Inspection',
      icon: CheckCircle,
      description: 'Before shipment, we conduct a pre-shipment inspection to verify that finished goods meet your specifications and quality standards.',
      details: [
        'AQL sampling inspection',
        'Workmanship and functionality checks',
        'Measurement and specification verification',
        'Packaging and labeling review',
        'Detailed inspection report',
      ],
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      icon: Truck,
      description: 'We coordinate logistics from the factory to your destination, including freight booking, documentation, and customs support.',
      details: [
        'Freight quote comparison',
        'Booking and documentation',
        'Export customs clearance',
        'Tracking and status updates',
        'Import coordination support',
      ],
    },
  ];

  const timeline = [
    { phase: 'Sourcing & Verification', duration: '2-4 weeks' },
    { phase: 'Sampling', duration: '1-3 weeks' },
    { phase: 'Production', duration: '4-12 weeks (varies by product)' },
    { phase: 'Inspection & Shipping', duration: '1-3 weeks' },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              OUR PROCESS
            </div>
            <h1 style={{ marginBottom: '1rem' }}>How It Works</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              A structured approach designed to reduce sourcing risk and give you visibility at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {steps.map((step, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '1.5rem', 
                marginBottom: index < steps.length - 1 ? '2.5rem' : 0,
                position: 'relative'
              }}>
                <div style={{ 
                  flexShrink: 0, 
                  width: '56px', 
                  height: '56px', 
                  background: 'var(--color-accent)', 
                  color: 'white',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '1.125rem'
                }}>
                  {step.number}
                </div>
                <div style={{ flex: 1, paddingBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <step.icon size={20} style={{ color: 'var(--color-accent)' }} />
                    <h3 style={{ fontSize: '1.25rem' }}>{step.title}</h3>
                  </div>
                  <p className="text-muted" style={{ marginBottom: '0.75rem' }}>{step.description}</p>
                  <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                    {step.details.map((detail, i) => (
                      <li key={i} style={{ marginBottom: '0.25rem' }}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Typical Project Timeline</h2>
          <p className="text-muted">Timelines vary by product complexity and order volume.</p>
        </div>
        <div className="grid-2" style={{ maxWidth: '720px', margin: '0 auto' }}>
          {timeline.map((item, index) => (
            <div key={index} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 500 }}>{item.phase}</span>
              <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{item.duration}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
          We provide a project-specific timeline during the initial consultation.
        </p>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>What Makes Our Process Different</h2>
            <div className="grid-2" style={{ marginTop: '2rem', textAlign: 'left' }}>
              {[
                { icon: Users, title: 'On-the-Ground Presence', desc: 'We visit factories in person. We do not rely solely on remote communication or third-party reports.' },
                { icon: Clock, title: 'Regular Reporting', desc: 'You receive written updates with photos at defined milestones. No need to chase for information.' },
                { icon: FileCheck, title: 'Documented Verification', desc: 'Every audit and inspection produces a written report. You have records for your due diligence.' },
                { icon: CheckCircle, title: 'Issue Escalation', desc: 'When problems arise, we identify them early and communicate options clearly before they become costly.' },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ flexShrink: 0 }}>
                    <item.icon size={24} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section container" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready to Start?</h2>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          Contact us to discuss your sourcing requirements and receive a proposal.
        </p>
        <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Sourcing Quote</Link>
      </section>
    </>
  );
};

export default HowItWorks;