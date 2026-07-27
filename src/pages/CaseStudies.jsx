import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      client: 'TechHome Solutions',
      location: 'Germany',
      challenge: 'A leading European electronics retailer needed to establish a reliable supply chain for smart home devices. They had previously struggled with inconsistent quality, missed deadlines, and communication issues with suppliers.',
      approach: 'We conducted a comprehensive supplier search, evaluating 15 factories against strict criteria including production capacity, quality certifications, and export experience. After thorough verification, we selected three qualified suppliers and facilitated a competitive bidding process.',
      results: [
        'Reduced defect rate from 8% to under 1%',
        'Improved margin by 23% through negotiation',
        'Established 3-year supply agreement',
        'On-time delivery rate increased to 98%',
      ],
      testimonial: "SSourcing China transformed our China operations. The quality improvements alone saved us over €200,000 annually in returns and rework.",
      clientName: 'Klaus Werner',
      clientTitle: 'Procurement Director',
    },
    {
      id: 2,
      category: 'Furniture',
      title: 'Office Furniture Batch Sourcing for US Distributor',
      client: 'OfficePro Distributors',
      location: 'United States',
      challenge: 'A US office furniture distributor wanted to expand their product line with competitively priced items from China. Previous attempts resulted in quality issues and delays that damaged their reputation with retail partners.',
      approach: 'We implemented a rigorous sourcing and QC program. This included factory audits, during-production inspections, and pre-shipment verification. We also established clear quality standards and acceptance criteria.',
      results: [
        'Defect rate reduced from 12% to under 2%',
        'Secured $2M annual contract',
        'Zero quality-related returns in 18 months',
        'Lead time reduced by 3 weeks',
      ],
      testimonial: "The difference in quality consistency has been remarkable. Our retail partners have noticed the improvement, and we've actually grown our business because of it.",
      clientName: 'Jennifer Martinez',
      clientTitle: 'CEO',
    },
    {
      id: 3,
      category: 'Textiles',
      title: 'Private Label Apparel for Australian Brand',
      client: 'Urban Threads',
      location: 'Australia',
      challenge: 'An Australian fashion brand needed to launch a private label clothing line with ethical production standards. They required a manufacturer that could meet both quality and social compliance requirements.',
      approach: 'We identified and vetted factories with BSCI and SEDEX certifications. After visiting 8 facilities, we selected a manufacturer with proven ethical practices. We coordinated sample development and managed the full production process.',
      results: [
        'Produced 50,000 units with 99.5% quality pass rate',
        'Achieved full social compliance certification',
        'Launched 3 product lines on schedule',
        'Cost savings of 35% vs. previous supplier',
      ],
      testimonial: "Finding a factory that met our ethical standards was crucial. SSourcing China not only found us a great manufacturer but made the entire process smooth.",
      clientName: 'Emma Thompson',
      clientTitle: 'Founder',
    },
    {
      id: 4,
      category: 'Machinery',
      title: 'Industrial Equipment Sourcing for Manufacturing Company',
      client: 'PrecisionMech Industries',
      location: 'Canada',
      challenge: 'A Canadian manufacturing company needed specialized industrial equipment custom-manufactured in China. The technical specifications were complex and required careful supplier selection.',
      approach: "We worked closely with the client's engineering team to create detailed specifications. We then identified manufacturers with the specific technical capabilities, conducted capability assessments, and coordinated prototype development.",
      results: [
        'Successfully developed 4 custom machine models',
        'Prototype to production in 6 months',
        'Cost savings of 40% vs. Western suppliers',
        'Full technical documentation provided',
      ],
      testimonial: "Their technical understanding and attention to detail made this complex project possible. They truly understood what we needed.",
      clientName: 'Robert Chen',
      clientTitle: 'Engineering Manager',
    },
    {
      id: 5,
      category: 'Packaging',
      title: 'Sustainable Packaging for Cosmetics Brand',
      client: 'GreenBeauty Co.',
      location: 'United Kingdom',
      challenge: 'A UK cosmetics brand needed eco-friendly packaging solutions. They wanted sustainable materials but needed to maintain product quality and meet regulatory requirements.',
      approach: 'We sourced suppliers specializing in sustainable packaging materials. We coordinated material testing, ensured compliance with EU regulations, and managed the production process with strict quality controls.',
      results: [
        'Sourced 100% recyclable packaging materials',
        'Achieved all EU cosmetic packaging regulations',
        'Reduced packaging costs by 25%',
        'Successful product launch across 200 stores',
      ],
      testimonial: "They helped us navigate the complexities of sustainable sourcing while keeping quality high. Our customers love our new packaging.",
      clientName: 'Sophie Williams',
      clientTitle: 'Head of Operations',
    },
    {
      id: 6,
      category: 'Consumer Goods',
      title: 'Kitchen Appliances for Retail Chain',
      client: 'HomeEssentials',
      location: 'United States',
      challenge: 'A major US retail chain needed a reliable supplier for a new line of kitchen appliances. They required high volume production with consistent quality and competitive pricing.',
      approach: 'We conducted a comprehensive supplier search focusing on manufacturers with experience in kitchen appliances. We implemented a quality management system and conducted regular inspections throughout production.',
      results: [
        'Produced 200,000 units in first year',
        'Quality pass rate of 99.2%',
        'Retailer expanded to 5 additional products',
        'Maintained 98% on-time delivery',
      ],
      testimonial: "The scale and consistency they delivered exceeded our expectations. They've become a key partner in our supply chain.",
      clientName: 'David Brown',
      clientTitle: 'VP of Sourcing',
    },
  ];

  const stats = [
    { value: '150+', label: 'Projects Completed', icon: TrendingUp },
    { value: '98%', label: 'Client Satisfaction', icon: Star },
    { value: '15+', label: 'Years Combined Experience', icon: Clock },
    { value: '100%', label: 'Supplier Verification', icon: Shield },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-200">
              Real results from businesses that transformed their China sourcing with SSourcing China.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F8FAFC] border-b border-[#E5E7EB]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-[#F5A623] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-sm text-[#6B7280]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="border border-[#E5E7EB] rounded-lg overflow-hidden">
                <div className="bg-[#F8FAFC] px-6 py-4 border-b border-[#E5E7EB]">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-xs font-medium text-[#F5A623] uppercase tracking-wide bg-[#F5A623]/10 px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1E3A5F]">
                      {study.title}
                    </h2>
                  </div>
                  <p className="text-[#6B7280] mt-2">
                    {study.client} • {study.location}
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Challenge</h3>
                        <p className="text-[#6B7280]">{study.challenge}</p>
                      </div>
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Our Approach</h3>
                        <p className="text-[#6B7280]">{study.approach}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-[#4CAF50] mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-[#6B7280]">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-lg p-6">
                      <div className="mb-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-[#F5A623] fill-current" />
                          ))}
                        </div>
                        <p className="text-[#6B7280] italic mb-4">"{study.testimonial}"</p>
                        <div>
                          <p className="font-semibold text-[#1E3A5F]">{study.clientName}</p>
                          <p className="text-sm text-[#6B7280]">{study.clientTitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let us help you transform your China sourcing. Contact us today for a free consultation.
          </p>
          <Link to="/contact" className="btn-primary inline-block text-lg px-8 py-4">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;