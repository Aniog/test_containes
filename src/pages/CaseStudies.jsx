import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Quote, TrendingUp, Users, Building2
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const caseStudies = [
  {
    client: 'UK Electronics Retailer',
    industry: 'Consumer Electronics',
    location: 'London, UK',
    challenge: 'This growing electronics retailer needed to scale their product line but faced consistent quality issues with their previous Chinese suppliers. They required reliable monthly shipments of 5,000+ units with strict quality control.',
    solution: 'SSourcing China conducted thorough verification of three candidate factories, implemented a comprehensive QC protocol including during-production and pre-shipment inspections, and established a seamless monthly delivery schedule with dedicated account management.',
    results: [
      'Quality issues reduced by 94%',
      'On-time delivery rate: 99.2%',
      'Cost savings of 18% through better supplier terms',
      'Successfully launched 8 new product lines',
    ],
    testimonial: {
      quote: "SSourcing China transformed our supply chain. What used to take months of back-and-forth now takes weeks, with significantly better quality consistency.",
      author: "James M.",
      role: "CEO",
      company: "TechMart UK"
    }
  },
  {
    client: 'German Fitness Brand',
    industry: 'Sports Equipment',
    location: 'Munich, Germany',
    challenge: 'This emerging fitness brand was launching a new product line and needed to find factories willing to handle their relatively low MOQs of 200-500 units per product. They also lacked experience negotiating with Chinese manufacturers.',
    solution: 'We identified and negotiated with 5 factories capable of meeting their MOQ requirements, coordinated sample production across all candidates, established clear quality standards, and facilitated successful product launches.',
    results: [
      'Successfully launched 12 products',
      '30% below previous sourcing costs',
      'All products passed EU safety standards',
      '3 factories became long-term partners',
    ],
    testimonial: {
      quote: "The team at SSourcing China understood our constraints as a smaller brand and still found us factories that treated us like valued clients. The quality exceeded our expectations.",
      author: "Anna L.",
      role: "Founder",
      company: "FitPro Germany"
    }
  },
  {
    client: 'Australian Home Goods Importer',
    industry: 'Home & Garden',
    location: 'Sydney, Australia',
    challenge: 'This importer wanted to expand their home goods catalog with competitive pricing but had no experience with international shipping and customs procedures from China to Australia.',
    solution: 'SSourcing China handled the complete sourcing process from supplier verification to door-to-door delivery. We navigated Australian import regulations, coordinated sea freight, and ensured all documentation was in order for smooth customs clearance.',
    results: [
      'Imported 15 container loads in first year',
      'Average savings of 25% vs previous supplier',
      'Zero customs clearance issues',
      '40% expansion in product range',
    ],
    testimonial: {
      quote: "They made international sourcing feel simple. Every shipment arrived on time and on budget. I couldn't have done this without their expertise.",
      author: "David C.",
      role: "Director",
      company: "HomeStyle Imports"
    }
  },
  {
    client: 'American Pet Products Company',
    industry: 'Pet Products',
    location: 'Chicago, USA',
    challenge: 'This pet supply company needed to find certified factories for pet toys and accessories that met strict US safety standards, including FDA compliance for certain products.',
    solution: 'We verified multiple factories for safety certifications, coordinated testing with approved laboratories, implemented quality control protocols specific to pet product safety, and established ongoing compliance monitoring.',
    results: [
      'All products achieved required certifications',
      'Zero recalls in 2+ years',
      'Successfully entered major retail chains',
      '50% reduction in quality-related returns',
    ],
    testimonial: {
      quote: "Pet product safety is non-negotiable for us. SSourcing China's QC protocols gave us complete confidence that our products would meet US standards every time.",
      author: "Sarah T.",
      role: "VP of Operations",
      company: "Pawsome Pet Co."
    }
  },
];

const stats = [
  { value: '94%', label: 'Client Satisfaction', icon: Star },
  { value: '500+', label: 'Suppliers Verified', icon: Building2 },
  { value: '35+', label: 'Countries Served', icon: Users },
  { value: '18%', label: 'Average Cost Savings', icon: TrendingUp },
];

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-slate-300">
              See how we've helped businesses around the world overcome China sourcing challenges and build reliable supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Left Column - Info */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                        {study.industry}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{study.client}</h2>
                    <p className="text-sm text-slate-500 mb-6">{study.location}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Key Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-slate-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Middle Column - Challenge & Solution */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Challenge</h3>
                        <p className="text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Solution</h3>
                        <p className="text-slate-600">{study.solution}</p>
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-slate-50 rounded-xl p-6">
                      <Quote className="w-8 h-8 text-blue-300 mb-3" />
                      <blockquote className="text-slate-700 italic mb-4">
                        "{study.testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-700 font-semibold text-sm">
                            {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{study.testimonial.author}</p>
                          <p className="text-sm text-slate-500">{study.testimonial.role}, {study.testimonial.company}</p>
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses who trust SSourcing China for their procurement needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
