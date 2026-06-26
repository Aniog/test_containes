import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle,
  MapPin,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  Target,
  Award,
  Quote
} from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-expansion',
    client: 'European Electronics Retailer',
    industry: 'Electronics',
    products: 'Consumer electronics and smart home devices',
    duration: '8 months',
    orderValue: '$450,000',
    challenge: 'A European electronics retailer wanted to expand their private-label product line but lacked the expertise and connections to source quality products from China. They had previously experienced quality issues and delivery delays with direct supplier relationships.',
    solution: 'SSourcing China identified three verified manufacturers specializing in consumer electronics. We conducted thorough factory audits, arranged sample production, and implemented a comprehensive QC program. Regular production monitoring and pre-shipment inspections ensured consistent quality.',
    results: [
      { label: 'Cost Savings', value: '35%', description: 'Compared to previous sourcing' },
      { label: 'Defect Rate', value: '0.8%', description: 'Well below industry average' },
      { label: 'On-Time Delivery', value: '98%', description: 'Consistent reliability' },
    ],
    testimonial: {
      text: 'SSourcing China transformed our China sourcing from a headache into a competitive advantage. Their QC process caught issues we never would have found ourselves.',
      author: 'Marcus Schmidt',
      role: 'Procurement Director',
      company: 'TechMart Europe',
    },
    image: 'Electronics warehouse quality inspection',
    categories: ['Electronics', 'Quality Control', 'Supplier Research'],
  },
  {
    id: 'furniture-launch',
    client: 'US Home Furnishings Brand',
    industry: 'Furniture',
    products: 'Modern furniture and home decor',
    duration: '12 months',
    orderValue: '$1.2M',
    challenge: 'A growing US furniture brand needed to establish reliable manufacturing partnerships in China to support their expansion plans. They needed factories that could meet their design specifications while maintaining competitive pricing and consistent quality.',
    solution: 'We identified and verified six furniture manufacturers across different provinces. Our team coordinated sample development, negotiated pricing, and established production schedules. Weekly factory visits during peak production ensured quality standards were met.',
    results: [
      { label: 'Factory Partners', value: '6', description: 'Strategic manufacturing partners' },
      { label: 'Product Line', value: '45+', description: 'SKUs successfully launched' },
      { label: 'Production Capacity', value: '15,000', description: 'Units per month' },
    ],
    testimonial: {
      text: 'The depth of their factory verification process gave us confidence we never had before. We now consider them an essential part of our supply chain.',
      author: 'Jennifer Walsh',
      role: 'Founder',
      company: 'HomeStyle Direct',
    },
    image: 'Furniture manufacturing factory production',
    categories: ['Furniture', 'Factory Verification', 'Production Follow-up'],
  },
  {
    id: 'promotional-products',
    client: 'Global Marketing Agency',
    industry: 'Promotional Products',
    products: 'Custom promotional items and corporate gifts',
    duration: 'Ongoing',
    orderValue: '$200K+',
    challenge: 'A global marketing agency needed a reliable sourcing partner for their corporate clients\' promotional product campaigns. They required quick turnaround times, competitive pricing, and the ability to handle diverse product categories with consistent quality.',
    solution: 'We built a dedicated supplier network for promotional products across multiple categories. Our streamlined process allows for rapid supplier matching, sample development, and production. Dedicated QC checkpoints ensure brand standards are maintained.',
    results: [
      { label: 'Categories Covered', value: '25+', description: 'Product categories' },
      { label: 'Turnaround Time', value: '18 days', description: 'Average for custom orders' },
      { label: 'Client Retention', value: '100%', description: 'All clients renewed' },
    ],
    testimonial: {
      text: 'Their ability to quickly source and quality-check diverse products across categories is unmatched. They\'ve become our go-to China sourcing partner.',
      author: 'David Chen',
      role: 'Operations Manager',
      company: 'PromoGlobal Agency',
    },
    image: 'Promotional products packaging shipping',
    categories: ['Promotional Products', 'Multi-Category', 'Quality Control'],
  },
  {
    id: 'textile-sourcing',
    client: 'Canadian Fashion Brand',
    industry: 'Apparel',
    products: 'Sustainable fashion and accessories',
    duration: '10 months',
    orderValue: '$380,000',
    challenge: 'A Canadian fashion brand committed to sustainable sourcing needed to find eco-friendly manufacturers in China who could meet their strict environmental and ethical standards. Previous attempts to find suitable suppliers had failed.',
    solution: 'We conducted specialized audits focusing on environmental compliance and social responsibility. We identified three certified factories with strong sustainability practices. Our team coordinates regular third-party audits to ensure ongoing compliance.',
    results: [
      { label: 'Certified Factories', value: '3', description: 'Verified eco-friendly manufacturers' },
      { label: 'Certifications', value: 'GOTS, OEKO-TEX', description: 'International standards met' },
      { label: 'Carbon Offset', value: '40%', description: 'Reduction in supply chain emissions' },
    ],
    testimonial: {
      text: 'Finding truly sustainable factories in China seemed impossible until SSourcing China proved otherwise. Their audit process is thorough and their standards are high.',
      author: 'Sarah Thompson',
      role: 'Sustainability Director',
      company: 'EcoStyle Canada',
    },
    image: 'Sustainable textile manufacturing facility',
    categories: ['Apparel', 'Factory Verification', 'Sustainable Sourcing'],
  },
];

const industries = ['All Industries', 'Electronics', 'Furniture', 'Promotional Products', 'Apparel', 'Home & Garden'];

const CaseStudyCard = ({ study, isFeatured }) => {
  return (
    <article className={`bg-white rounded-xl overflow-hidden border border-slate-200 card-hover ${isFeatured ? 'lg:col-span-2' : ''}`}>
      <div className="grid lg:grid-cols-2">
        <div className="h-64 lg:h-auto img-placeholder">
          <img 
            data-strk-img-id={`case-study-card-${study.id}-img-uvw345`}
            data-strk-img={`[case-study-card-${study.id}-title]`}
            data-strk-img-ratio={isFeatured ? "16x9" : "4x3"}
            data-strk-img-width={isFeatured ? "800" : "400"}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={study.client}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge badge-primary">{study.industry}</span>
            <span className="text-sm text-slate-500">{study.duration}</span>
          </div>
          <h3 id={`case-study-card-${study.id}-title`} className="text-2xl font-bold text-slate-900 mb-2">
            {study.client}
          </h3>
          <p className="text-slate-600 mb-4">{study.products}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="text-lg font-bold text-blue-600">{study.orderValue}</div>
              <div className="text-xs text-slate-500">Order Value</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">{study.results[0].value}</div>
              <div className="text-xs text-slate-500">{study.results[0].label}</div>
            </div>
            <div>
              <div className="text-lg font-bold text-blue-600">{study.results[2].value}</div>
              <div className="text-xs text-slate-500">{study.results[2].label}</div>
            </div>
          </div>
          <Link to={`/case-studies#${study.id}`} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700">
            Read Full Case Study <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const CaseStudyDetail = ({ study }) => {
  return (
    <section id={study.id} className="section-spacing bg-white scroll-mt-24">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge badge-primary">{study.industry}</span>
            {study.categories.map((cat, i) => (
              <span key={i} className="badge badge-accent">{cat}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{study.client}</h1>
          <p className="text-xl text-slate-600">{study.products}</p>
        </div>

        {/* Key Stats */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-slate-900">{study.orderValue}</div>
              <div className="text-sm text-slate-600">Order Value</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-slate-900">{study.duration}</div>
              <div className="text-sm text-slate-600">Duration</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-slate-900">{study.results[0].value}</div>
              <div className="text-sm text-slate-600">{study.results[0].label}</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-slate-900">{study.results[2].value}</div>
              <div className="text-sm text-slate-600">{study.results[2].label}</div>
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
            <p className="text-slate-600 text-lg">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h2>
            <p className="text-slate-600 text-lg">{study.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Results Achieved</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {study.results.map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 text-center">
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 mb-2">{result.value}</div>
                <div className="text-lg font-semibold text-slate-900 mb-1">{result.label}</div>
                <div className="text-sm text-slate-600">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
          <Quote className="w-12 h-12 text-blue-400 mb-6" />
          <blockquote className="text-xl md:text-2xl italic mb-8 leading-relaxed">
            "{study.testimonial.text}"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
              {study.testimonial.author.charAt(0)}
            </div>
            <div>
              <div className="font-semibold">{study.testimonial.author}</div>
              <div className="text-slate-400">{study.testimonial.role}, {study.testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real stories from businesses who transformed their China sourcing with SSourcing China. See how we've helped companies overcome challenges and achieve their goals.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Success Story <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-spacing bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-primary mb-4">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore how businesses like yours have benefited from our China sourcing expertise.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((study, index) => (
              <CaseStudyCard key={study.id} study={study} isFeatured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Detailed breakdowns of our client partnerships and the results we've achieved together.
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      {caseStudies.map((study) => (
        <CaseStudyDetail key={study.id} study={study} />
      ))}

      {/* CTA Section */}
      <section className="section-spacing bg-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses who trust SSourcing China for their sourcing needs. Get a free consultation today.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
