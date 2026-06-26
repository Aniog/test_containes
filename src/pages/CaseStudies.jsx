import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  DollarSign,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      industry: 'Electronics',
      company: 'US Smart Home Retailer',
      challenge: 'A US retailer needed to source smart home devices with strict quality standards. Previous suppliers had high defect rates (8%) and inconsistent product quality.',
      solution: 'We verified 15 factories, conducted comprehensive factory audits, and implemented a 3-stage QC process: during production, pre-shipment, and loading supervision.',
      result: 'Reduced defect rate from 8% to 0.5%, saving $120,000 in potential returns. Maintained 99% on-time delivery rate.',
      metrics: [
        { label: 'Defect Rate', value: '8% → 0.5%' },
        { label: 'Cost Savings', value: '$120,000' },
        { label: 'On-Time Delivery', value: '99%' }
      ]
    },
    {
      industry: 'Furniture',
      company: 'European Outdoor Brand',
      challenge: 'A European importer wanted to source outdoor furniture at competitive prices. They struggled to find manufacturers meeting EU quality and safety standards.',
      solution: 'Identified specialized manufacturers in Zhejiang province with EU certification experience. Negotiated volume discounts and arranged consolidated shipping.',
      result: 'Achieved 35% cost savings compared to previous supplier. All products passed EU safety testing. Delivered on schedule.',
      metrics: [
        { label: 'Cost Savings', value: '35%' },
        { label: 'EU Compliance', value: '100%' },
        { label: 'On-Time Delivery', value: '100%' }
      ]
    },
    {
      industry: 'Textiles',
      company: 'Fashion Brand Startup',
      challenge: 'A fashion brand startup needed reliable fabric suppliers with sustainable practices. Limited budget and no prior China sourcing experience.',
      solution: 'Vetted suppliers for eco-certifications (OEKO-TEX, GOTS). Arranged fabric testing samples. Established quality benchmarks and regular inspection schedule.',
      result: 'Secured consistent quality supply. Increased customer satisfaction by 40%. Built long-term supplier relationships.',
      metrics: [
        { label: 'Customer Satisfaction', value: '+40%' },
        { label: 'Suppliers Verified', value: '8' },
        { label: 'Quality Score', value: '95%' }
      ]
    },
    {
      industry: 'Machinery',
      company: 'Industrial Equipment Distributor',
      challenge: 'An industrial equipment distributor needed specialized machinery parts with precise specifications. Required suppliers with technical expertise.',
      solution: 'Matched with manufacturers specializing in precision parts. Conducted technical capability assessments. Implemented detailed inspection protocols.',
      result: 'Found suppliers meeting exact specifications. Reduced procurement time by 50%. Zero quality complaints in first year.',
      metrics: [
        { label: 'Procurement Time', value: '-50%' },
        { label: 'Quality Complaints', value: '0' },
        { label: 'Specification Match', value: '100%' }
      ]
    },
    {
      industry: 'Packaging',
      company: 'Cosmetic Brand',
      challenge: 'A cosmetic brand needed premium packaging solutions that aligned with their luxury brand positioning. Required unique designs and high-quality materials.',
      solution: 'Sourced specialized packaging manufacturers with experience in luxury goods. Coordinated custom tooling and material selection. Implemented strict QC for finish quality.',
      result: 'Packaging quality exceeded expectations. Reduced costs by 20% through supplier optimization. Successful product launch.',
      metrics: [
        { label: 'Cost Reduction', value: '20%' },
        { label: 'Quality Rating', value: '98%' },
        { label: 'Time to Market', value: '3 months' }
      ]
    },
    {
      industry: 'Medical',
      company: 'Healthcare Equipment Company',
      challenge: 'A healthcare company needed medical-grade supplies meeting FDA and CE certification requirements. Strict regulatory compliance needed.',
      solution: 'Identified manufacturers with existing FDA/CE certifications. Conducted facility audits for GMP compliance. Arranged regulatory documentation.',
      result: 'All products passed regulatory audits. Achieved FDA registration. Secured long-term supply contract.',
      metrics: [
        { label: 'FDA Registration', value: 'Achieved' },
        { label: 'Audit Pass Rate', value: '100%' },
        { label: 'Compliance Cost', value: '-30%' }
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Case Studies</h1>
            <p className="text-xl text-gray-200">
              Real results from clients who have transformed their sourcing operations with our help.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-3">
                    <div className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wide mb-2">
                      {study.industry}
                    </div>
                    <h3 className="mb-4">{study.company}</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-[var(--primary)]">{metric.value}</div>
                          <div className="text-xs text-[var(--text-muted)]">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <ShieldCheck className="w-5 h-5 text-[var(--primary)]" />
                          <h4 className="font-semibold">Challenge</h4>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-[var(--primary)]" />
                          <h4 className="font-semibold">Solution</h4>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{study.solution}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-5 h-5 text-[var(--accent)]" />
                          <h4 className="font-semibold">Result</h4>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card">
              <p className="text-lg text-[var(--text-secondary)] italic mb-6">
                "SSourcing China transformed our supply chain. Their verification process saved us from a potential $200,000 loss from a fraudulent supplier. Their QC team is meticulous and their communication is excellent."
              </p>
              <div>
                <p className="font-semibold">John Miller</p>
                <p className="text-sm text-[var(--text-muted)]">CEO, TechHome Solutions (USA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-white mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers and streamline your China sourcing operations.
          </p>
          <Link to="/contact" className="btn btn-cta text-lg px-8 py-4">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;