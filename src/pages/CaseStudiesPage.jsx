import { Link } from 'react-router-dom';
import { TrendingUp, Shield, DollarSign, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    icon: TrendingUp,
    category: 'Electronics',
    title: 'US Retailer Saves 35% on Electronics Sourcing',
    challenge: 'A mid-size US electronics retailer was struggling with unreliable suppliers, inconsistent quality, and rising costs. They had been working with a single supplier for 2 years but were experiencing increasing defect rates and delayed shipments.',
    solution: 'We conducted a comprehensive supplier audit, identified 3 alternative verified manufacturers, and facilitated a competitive bidding process. We negotiated better pricing terms and implemented a quality inspection protocol.',
    results: [
      '35% reduction in unit costs',
      '99.2% quality pass rate',
      'On-time delivery improved from 68% to 95%',
      'Defect rate reduced from 8% to 0.5%',
    ],
    quote: 'SSourcing China transformed our supply chain. We are saving money and our customers are happier with the quality.',
    author: 'Procurement Director, US Electronics Retailer',
  },
  {
    icon: Shield,
    category: 'Textiles & Apparel',
    title: 'European Brand Launches Private Label Apparel Line',
    challenge: 'A European fashion brand wanted to launch a private label clothing line but had no experience with Chinese manufacturers. They needed help with everything from supplier selection to quality control and shipping.',
    solution: 'We identified 5 qualified garment manufacturers, conducted factory audits, coordinated sample development, and managed the entire production process. We implemented a multi-stage quality inspection program.',
    results: [
      'Successful launch with 50,000 units',
      'All orders delivered on schedule',
      'Quality approval rate of 98.5%',
      'Established long-term supplier relationship',
    ],
    quote: 'They handled everything professionally. We could not have launched our line without their expertise.',
    author: 'Founder, European Fashion Brand',
  },
  {
    icon: DollarSign,
    category: 'Risk Prevention',
    title: 'Australian Startup Avoids $50,000 Supplier Scam',
    challenge: 'An Australian startup was about to wire $50,000 to a supplier they found online for custom packaging. The supplier seemed legitimate with a professional website and competitive pricing.',
    solution: 'We conducted an emergency factory audit and discovered the company did not exist at the registered address. The website used stolen photos from another factory. We found them a legitimate alternative supplier within 2 weeks.',
    results: [
      '$50,000 saved from potential fraud',
      'Legitimate supplier found within 2 weeks',
      'Product quality exceeded expectations',
      'Long-term partnership established',
    ],
    quote: 'They saved us from a devastating loss. The factory audit revealed what we could never have discovered on our own.',
    author: 'CEO, Australian E-commerce Startup',
  },
  {
    icon: Clock,
    category: 'Industrial Equipment',
    title: 'German Manufacturer Sources Custom Machinery Parts',
    challenge: 'A German industrial manufacturer needed custom precision machined parts with tight tolerances. Previous attempts to source from China resulted in quality issues and communication problems.',
    solution: 'We identified a specialized CNC machining factory with ISO 9001 certification, coordinated technical specifications translation, and implemented a rigorous first-article inspection process.',
    results: [
      '40% cost savings vs. European suppliers',
      'Tolerance accuracy within 0.01mm',
      'Consistent quality across 10,000+ parts',
      'Reduced lead time by 3 weeks',
    ],
    quote: 'The precision and consistency of the parts has been outstanding. They understand our technical requirements perfectly.',
    author: 'Engineering Manager, German Manufacturer',
  },
  {
    icon: CheckCircle,
    category: 'Consumer Goods',
    title: 'UK Amazon Seller Scales Product Line to 20 SKUs',
    challenge: 'A UK-based Amazon FBA seller wanted to expand their product line from 5 to 20 SKUs but lacked the resources to manage multiple suppliers and quality control processes.',
    solution: 'We became their dedicated sourcing partner, managing supplier relationships, quality inspections, and shipping coordination for their entire product range. We consolidated shipments to reduce logistics costs.',
    results: [
      'Product line expanded from 5 to 20 SKUs',
      'Shipping costs reduced by 25% through consolidation',
      'Zero quality-related Amazon returns',
      'Revenue increased 300% year-over-year',
    ],
    quote: 'They are like having a full-time sourcing team in China. I can focus on marketing while they handle everything else.',
    author: 'Owner, UK Amazon FBA Business',
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-blue-100">
              Real results from real clients. See how we have helped businesses around the world source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}>
                <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                    {study.category}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Challenge</h3>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Our Solution</h3>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Results</h3>
                      <ul className="space-y-1">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-96 flex-shrink-0">
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <study.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <blockquote className="text-slate-700 italic mb-4">
                      "{study.quote}"
                    </blockquote>
                    <p className="text-sm text-slate-500 font-medium">{study.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
