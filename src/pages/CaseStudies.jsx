import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Globe
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      client: "European Home Goods Retailer",
      industry: "Home & Living",
      location: "Germany",
      challenge: "This retailer needed to source high-quality kitchenware products from China but had concerns about supplier reliability and consistent quality. Previous attempts with other suppliers resulted in quality issues and delays.",
      solution: "We conducted comprehensive factory verification, identified certified manufacturers, implemented a rigorous quality inspection protocol, and provided ongoing production monitoring. We also negotiated favorable payment terms to protect the client's interests.",
      results: [
        "40% reduction in sourcing costs compared to previous supplier",
        "Zero quality issues in first 12 months of production",
        "On-time delivery rate improved to 98%",
        "Successfully launched 15 new product lines"
      ],
      testimonial: "SSourcing China transformed our supply chain. Their verification process gave us confidence in our supplier choice, and their quality inspections have been invaluable.",
      person: "Thomas Mueller",
      role: "Procurement Director"
    },
    {
      id: 2,
      client: "US Technology Company",
      industry: "Electronics",
      location: "United States",
      challenge: "A growing tech company needed to source electronic components and accessories for their product line. They required suppliers with specific certifications and the ability to scale production as they grew.",
      solution: "We performed detailed factory audits focusing on technical capabilities and certifications. We identified several ISO-certified manufacturers, coordinated sample production, and established quality control checkpoints throughout the manufacturing process.",
      results: [
        "Found 3 certified suppliers meeting all requirements",
        "Zero defects in 100,000+ units shipped",
        "Production capacity increased 200% on demand",
        "Cost savings of 25% through supplier negotiation"
      ],
      testimonial: "Their technical understanding of electronics manufacturing helped us find suppliers we wouldn't have found on our own. The quality control process has been exceptional.",
      person: "Sarah Chen",
      role: "VP of Operations"
    },
    {
      id: 3,
      client: "Australian Automotive Parts Distributor",
      industry: "Automotive",
      location: "Australia",
      challenge: "This distributor needed to expand their product range with automotive parts but faced challenges finding suppliers who could meet Australian safety standards and certification requirements.",
      solution: "We conducted thorough factory verification with emphasis on quality management systems and certifications. We coordinated with testing agencies to ensure products met Australian standards and handled all documentation for compliance.",
      results: [
        "Successfully launched 20+ new product SKUs",
        "All products meet Australian design rules",
        "40% reduction in time-to-market",
        "Established long-term partnerships with 5 factories"
      ],
      testimonial: "Their expertise in automotive regulations saved us months of confusion. They handled everything from factory selection to compliance documentation.",
      person: "James Wilson",
      role: "Managing Director"
    },
    {
      id: 4,
      client: "UK Fashion Brand",
      industry: "Apparel & Fashion",
      location: "United Kingdom",
      challenge: "A fashion brand wanted to create a private label clothing line but had no experience with textile manufacturing in China. They needed help with everything from fabric selection to production quality.",
      solution: "We connected them with verified textile factories, assisted with fabric sourcing and testing, provided production monitoring, and implemented quality checks at each stage. We also coordinated packaging and labeling to meet UK regulations.",
      results: [
        "Launched private label collection with 50 items",
        "Fabric quality exceeded expectations",
        "Production costs 30% below UK manufacturing",
        "First shipment delivered on schedule"
      ],
      testimonial: "They made the complex process of overseas manufacturing straightforward. Their attention to detail in quality control has been crucial for our brand reputation.",
      person: "Emma Thompson",
      role: "Founder"
    },
    {
      id: 5,
      client: "Canadian Industrial Equipment Company",
      industry: "Industrial Manufacturing",
      location: "Canada",
      challenge: "This company needed specialized industrial machinery components with tight tolerances and specific material requirements. Finding a supplier with the right technical capabilities was critical.",
      solution: "We conducted a targeted supplier search focusing on technical capabilities, performed detailed factory audits including technical interviews, coordinated prototype development, and established strict quality specifications.",
      results: [
        "Found supplier with advanced CNC capabilities",
        "First article approval achieved in 6 weeks",
        "Components meet or exceed specifications",
        "Established ongoing production relationship"
      ],
      testimonial: "Their technical knowledge of manufacturing processes helped us find a supplier capable of meeting our exact specifications. The quality has been consistently excellent.",
      person: "Robert Jackson",
      role: "Engineering Manager"
    },
    {
      id: 6,
      client: "French Cosmetics Brand",
      industry: "Beauty & Personal Care",
      location: "France",
      challenge: "A cosmetics company wanted to source packaging materials and beauty products from China while maintaining the high quality standards expected by European consumers.",
      solution: "We identified factories with clean room facilities and relevant certifications, performed quality audits focusing on materials and safety, coordinated with their QA team for specification development, and arranged for samples and testing.",
      results: [
        "Sourced premium packaging meeting EU regulations",
        "Quality consistency maintained across orders",
        "Cost reduction of 35% vs European suppliers",
        "Successfully passed第三方 quality audits"
      ],
      testimonial: "They understood our quality requirements and found suppliers who could meet the high standards our brand is known for. Excellent communication throughout.",
      person: "Marie Dubois",
      role: "Supply Chain Manager"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Globe, value: "30+", label: "Countries Served" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Real success stories from our sourcing partnerships. See how we've helped businesses worldwide find reliable suppliers in China.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 ${index !== 0 ? 'pt-16 border-t border-slate-200' : ''}`}>
                <div className="lg:col-span-4">
                  <div className="sticky top-24">
                    <div className="text-sm text-blue-600 font-medium mb-2">{study.industry}</div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h2>
                    <p className="text-slate-500 mb-6">{study.location}</p>
                    
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">Key Results</h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {study.testimonial && (
                      <div className="mt-6 bg-blue-50 rounded-xl p-6">
                        <p className="text-slate-600 italic mb-4">"{study.testimonial}"</p>
                        <div>
                          <div className="font-medium text-slate-900">{study.person}</div>
                          <div className="text-sm text-slate-500">{study.role}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="lg:col-span-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">The Challenge</h3>
                      <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">Our Solution</h3>
                      <p className="text-slate-600 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss how we can help you find the right suppliers in China. Get a free consultation and quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;