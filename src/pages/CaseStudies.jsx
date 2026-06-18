import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Users,
  Globe,
  Package,
  Factory,
  ShoppingCart,
  ArrowUpRight
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      client: "European Home Goods Retailer",
      industry: "Home & Kitchen",
      location: "Germany",
      challenge: "A mid-sized German retailer wanted to expand their kitchenware product line with new suppliers in China. They had previously experienced quality issues and communication challenges with direct sourcing.",
      solution: "We conducted a comprehensive supplier search, identifying 8 potential manufacturers. After detailed factory verification audits, we shortlisted 3 factories. We implemented a rigorous QC process with pre-production, inline, and pre-shipment inspections. Regular production updates and sample approvals ensured quality consistency.",
      result: "Successfully sourced 12 new SKUs with zero quality issues in the first order. The client achieved 30% cost savings compared to their previous supplier and reduced lead time by 3 weeks.",
      metrics: [
        { label: "Cost Savings", value: "30%" },
        { label: "Lead Time Reduction", value: "3 weeks" },
        { label: "Quality Defect Rate", value: "0%" }
      ],
      testimonial: "SSourcing China transformed our sourcing operations. Their factory verification process gave us confidence in our suppliers, and their QC team caught potential issues before they became problems."
    },
    {
      id: 2,
      client: "US Technology Company",
      industry: "Electronics",
      location: "United States",
      challenge: "A US tech startup needed to manufacture a new line of smart home devices. They lacked in-house sourcing expertise and were concerned about IP protection when working with Chinese manufacturers.",
      solution: "We performed thorough factory audits focusing on IP protection measures. We identified a manufacturer with strong security protocols and established clear NDAs. Throughout production, we conducted regular inspections and maintained strict confidentiality protocols.",
      result: "Successfully launched the product on schedule with only 0.5% defect rate. The client secured their IP through comprehensive protection measures and established a reliable long-term manufacturing partner.",
      metrics: [
        { label: "Defect Rate", value: "0.5%" },
        { label: "On-time Delivery", value: "100%" },
        { label: "IP Protection", value: "Complete" }
      ],
      testimonial: "Their attention to IP protection gave us peace of mind. The quality of the first production run exceeded our expectations. We'll definitely continue working with them."
    },
    {
      id: 3,
      client: "Australian Fashion Brand",
      industry: "Apparel & Fashion",
      location: "Australia",
      challenge: "An Australian fashion brand wanted to launch a private label clothing line. They needed help with fabric sourcing, factory selection, and quality control for garments.",
      solution: "We identified factories specializing in their target price point and quality level. We coordinated fabric sourcing from verified textile suppliers. Our QC team performed inline inspections during production and final inspections before shipping.",
      result: "Launched 25 garment styles with an average defect rate of just 1.2%. The client achieved a 40% margin compared to their previous domestic supplier.",
      metrics: [
        { label: "Product Lines", value: "25" },
        { label: "Defect Rate", value: "1.2%" },
        { label: "Margin Improvement", value: "40%" }
      ],
      testimonial: "They understood our quality requirements and delivered exactly what we needed. The communication throughout the process was excellent, and they always responded quickly to our questions."
    },
    {
      id: 4,
      client: "Canadian Industrial Equipment Distributor",
      industry: "Industrial & Manufacturing",
      location: "Canada",
      challenge: "A Canadian distributor needed to source industrial machinery components from China. The technical specifications were complex, and they needed a partner who could bridge the language and technical gap.",
      solution: "We worked closely with their engineering team to create detailed specifications. We identified factories with the required technical capabilities and conducted thorough capability assessments. Our team provided technical translation and regular progress updates.",
      result: "Sourced 8 different component types meeting all technical specifications. The client established a reliable supply chain with 15% lower costs than their previous Asian supplier.",
      metrics: [
        { label: "Cost Reduction", value: "15%" },
        { label: "Components Sourced", value: "8" },
        { label: "Technical Accuracy", value: "100%" }
      ],
      testimonial: "Their technical expertise was invaluable. They understood our specifications and ensured every component met our standards. A truly professional sourcing partner."
    }
  ];

  const industries = [
    { name: "Home & Kitchen", icon: Package },
    { name: "Electronics", icon: Factory },
    { name: "Apparel & Fashion", icon: ShoppingCart },
    { name: "Industrial", icon: Wrench },
    { name: "Automotive", icon: Car },
    { name: "Medical", icon: Heart }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Real results from clients who have successfully sourced from China with our help. See how we've helped businesses like yours overcome sourcing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {study.industry}
                        </span>
                        <span className="text-sm text-slate-500 flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {study.location}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900">{study.client}</h2>
                    </div>
                    <div className="flex gap-4">
                      {study.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Challenge</h3>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Solution</h3>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-green-700 mb-2">Result</h3>
                        <p className="text-slate-600">{study.result}</p>
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <p className="text-slate-600 italic mb-4">"{study.testimonial}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">Client</div>
                          <div className="text-xs text-slate-500">{study.industry}</div>
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

      {/* Industries Served */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Industries We Serve
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We've helped clients across various industries successfully source from China.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 text-center">
                <industry.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-medium text-slate-900">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Achieve Similar Results?
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs and see how we can help your business.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;