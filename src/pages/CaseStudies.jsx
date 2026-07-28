import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Shield, 
  Users,
  Star,
  Quote
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      location: 'United States',
      year: '2024',
      challenge: 'TechStart Inc., a startup based in San Francisco, needed to source 50,000 smartphone accessories (cases, chargers, cables) from China for their new product launch. They had limited experience with international sourcing and were concerned about quality and reliability.',
      solution: 'We conducted a comprehensive supplier search, focusing on factories with ISO 9001 certification and proven track records in electronics. After verifying 15 potential suppliers, we narrowed it down to 3 and arranged factory audits. We negotiated favorable payment terms and conducted weekly production updates with photo documentation.',
      results: [
        { label: 'Cost Savings', value: '35%', description: 'compared to US suppliers' },
        { label: 'Quality Pass Rate', value: '99.2%', description: 'on pre-shipment inspection' },
        { label: 'Delivery', value: 'On Time', description: 'within agreed timeline' },
      ],
      testimonial: 'SSourcing China made what seemed like a daunting process incredibly smooth. Their team handled everything - from finding suppliers to quality inspections. We saved significant costs and the product quality exceeded our expectations.',
      testimonialAuthor: 'Michael Chen, CEO',
    },
    {
      company: 'HomeGoods Co.',
      industry: 'Home & Garden',
      location: 'United Kingdom',
      year: '2023',
      challenge: 'HomeGoods Co., a UK-based homeware retailer, was struggling to find reliable suppliers for their kitchenware product line. Previous attempts with other agents had resulted in quality issues and delayed shipments. They needed a partner who could ensure consistent quality and on-time delivery.',
      solution: 'We performed detailed factory audits on 8 potential suppliers, focusing on production capabilities and quality management systems. We selected a factory in Guangdong with 15 years of experience and excellent certifications. We implemented a rigorous QC process including during-production inspections and pre-shipment checks.',
      results: [
        { label: 'Inspection Pass Rate', value: '99%', description: 'consistently high quality' },
        { label: 'Order Fulfillment', value: '100%', description: 'on-time delivery' },
        { label: 'Client Growth', value: '3x', description: 'in first year' },
      ],
      testimonial: 'The difference working with SSourcing China was night and day. Their QC process gave us complete confidence in the quality of our products. We\'ve now expanded our product line with them and couldn\'t be happier.',
      testimonialAuthor: 'Sarah Williams, Procurement Director',
    },
    {
      company: 'FashionLine Ltd.',
      industry: 'Apparel',
      location: 'Germany',
      year: '2024',
      challenge: 'FashionLine Ltd., a German fashion brand, needed to develop a new clothing line with private label manufacturing. They required factories that could handle small MOQs for their initial launch while maintaining high quality standards. Language barriers and cultural differences were also concerns.',
      solution: 'We identified factories experienced in working with European brands and familiar with their quality requirements. Our Mandarin-speaking team handled all communications, ensuring clear understanding of specifications. We coordinated sample development and managed the entire approval process.',
      results: [
        { label: 'MOQ Achieved', value: '500 pcs', description: 'per color per style' },
        { label: 'Sample Accuracy', value: '98%', description: 'first sample approval' },
        { label: 'Lead Time', value: '-40%', description: 'reduced from original' },
      ],
      testimonial: 'Their team\'s ability to communicate in our language and understand European quality expectations was invaluable. They found us factories that were flexible with MOQs while maintaining excellent quality. Highly recommended.',
      testimonialAuthor: 'Hans Mueller, Founder',
    },
    {
      company: 'MediCare Supplies',
      industry: 'Healthcare',
      location: 'Australia',
      year: '2023',
      challenge: 'MediCare Supplies, an Australian medical equipment distributor, needed to source medical-grade products from China with proper certifications. They required suppliers with relevant medical device certifications and a track record of compliance with international standards.',
      solution: 'We focused on factories with proper medical device certifications (CE, FDA registration where applicable). We coordinated with their quality team to ensure all products met Australian therapeutic goods requirements. We arranged for lab testing of samples at accredited facilities.',
      results: [
        { label: 'Certifications', value: '100%', description: 'all required obtained' },
        { label: 'Compliance', value: '100%', description: 'passed TGA audit' },
        { label: 'Product Range', value: '25+', description: 'SKUs sourced' },
      ],
      testimonial: 'Medical product sourcing requires extreme attention to detail and compliance. SSourcing China understood these requirements completely. They found us certified suppliers and managed the entire process professionally.',
      testimonialAuthor: 'Dr. James Anderson, Medical Director',
    },
    {
      company: 'AutoParts Pro',
      industry: 'Automotive',
      location: 'Canada',
      year: '2024',
      challenge: 'AutoParts Pro, a Canadian automotive parts retailer, needed to source replacement parts from China. They required specific quality standards for automotive components and needed suppliers who could provide technical documentation and traceability.',
      solution: 'We identified factories specializing in automotive components with IATF 16949 certification. We coordinated technical specifications review and ensured all parts met OEM standards. We arranged for detailed inspection protocols including dimensional checks and material testing.',
      results: [
        { label: 'Defect Rate', value: '<0.5%', description: 'industry leading' },
        { label: 'Cost Reduction', value: '45%', description: 'vs previous supplier' },
        { label: 'Technical Docs', value: 'Complete', description: 'full traceability' },
      ],
      testimonial: 'Automotive parts require precise specifications and documentation. SSourcing China delivered on all fronts - quality, pricing, and technical support. They\'ve become our go-to sourcing partner.',
      testimonialAuthor: 'Robert Taylor, Operations Manager',
    },
    {
      company: 'GreenLife Organics',
      industry: 'Health & Beauty',
      location: 'United States',
      year: '2023',
      challenge: 'GreenLife Organics, a US wellness brand, wanted to source natural and organic personal care products from China. They needed suppliers who could provide organic certifications and were transparent about ingredients and manufacturing processes.',
      solution: 'We researched factories with organic certifications and experience producing natural personal care products. We coordinated sample testing at US FDA-registered labs to verify ingredient claims. We implemented a comprehensive audit process focusing on ingredient traceability.',
      results: [
        { label: 'Organic Certified', value: '100%', description: 'products verified' },
        { label: 'Lab Testing', value: 'Pass', description: 'all products' },
        { label: 'Brand Growth', value: '200%', description: 'YoY revenue' },
      ],
      testimonial: 'Finding truly organic suppliers in China seemed challenging until we worked with SSourcing China. Their verification process gave us confidence in the quality and authenticity of our products. Our customers love them.',
      testimonialAuthor: 'Emily Green, Founder',
    },
  ];

  const stats = [
    { number: '150+', label: 'Successful Projects' },
    { number: '35%', label: 'Average Cost Savings' },
    { number: '98%', label: 'Client Retention' },
    { number: '99%', label: 'Quality Pass Rate' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light text-white py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover how we've helped businesses worldwide source products from China successfully. Real results from real clients.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-background rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-primary/5 p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-text-dark">{study.company}</h3>
                      <p className="text-text-muted">{study.industry} • {study.location} • {study.year}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-text-dark">Verified Client</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-semibold text-text-dark mb-2">Challenge</h4>
                        <p className="text-text-muted leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-dark mb-2">Solution</h4>
                        <p className="text-text-muted leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-white rounded-xl p-6">
                      <h4 className="font-semibold text-text-dark mb-4">Results</h4>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="border-l-4 border-accent pl-4">
                            <div className="text-2xl font-bold text-accent">{result.value}</div>
                            <p className="text-sm text-text-dark font-medium">{result.label}</p>
                            <p className="text-xs text-text-muted">{result.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 bg-white rounded-xl p-6 border border-border">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-text-dark italic mb-4">"{study.testimonial}"</p>
                    <p className="text-text-muted text-sm font-medium">— {study.testimonialAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers in China. Get a free consultation and quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;