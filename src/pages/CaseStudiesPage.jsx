import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-oem',
    title: 'Electronics OEM Sourcing for US Retailer',
    category: 'Electronics',
    challenge: 'A US electronics retailer needed a reliable OEM manufacturer for custom Bluetooth speakers with strict quality requirements and a tight launch deadline.',
    solution: 'We identified 3 qualified factories in Shenzhen, conducted on-site audits, managed 3 rounds of sample revisions, and oversaw mass production with weekly QC reports.',
    result: 'Delivered 50,000 units on time with a 98.5% pass rate. Client reduced sourcing costs by 22% compared to their previous supplier.',
    metrics: [
      { label: 'Units Delivered', value: '50,000' },
      { label: 'Quality Pass Rate', value: '98.5%' },
      { label: 'Cost Savings', value: '22%' },
    ],
    imgId: 'case-study-electronics-7a3b2c',
    titleId: 'case-study-electronics-title',
    descId: 'case-study-electronics-desc',
  },
  {
    id: 'furniture-import',
    title: 'Furniture Import for European Distributor',
    category: 'Home & Garden',
    challenge: 'A European furniture distributor needed to source solid wood dining tables with FSC certification and full EU compliance documentation.',
    solution: 'We verified factory certifications, coordinated sustainable material sourcing, conducted pre-shipment inspections, and handled all export documentation.',
    result: 'Successfully shipped 2,000 units with zero compliance issues. Client expanded to a long-term partnership with quarterly orders.',
    metrics: [
      { label: 'Units Shipped', value: '2,000' },
      { label: 'Compliance Issues', value: '0' },
      { label: 'Partnership', value: 'Long-term' },
    ],
    imgId: 'case-study-furniture-4d8e1f',
    titleId: 'case-study-furniture-title',
    descId: 'case-study-furniture-desc',
  },
  {
    id: 'apparel-private',
    title: 'Private Label Apparel for Australian Brand',
    category: 'Apparel & Textiles',
    challenge: 'An Australian fashion brand wanted to launch a private label line but had no experience with Chinese garment manufacturers.',
    solution: 'We sourced factories specializing in their fabric type, managed tech pack translation, coordinated sampling, and handled quality control for the first production run.',
    result: 'Launched first collection of 15 SKUs within 4 months. Client now sources 80% of their production through us.',
    metrics: [
      { label: 'SKUs Launched', value: '15' },
      { label: 'Time to Market', value: '4 months' },
      { label: 'Ongoing Share', value: '80%' },
    ],
    imgId: 'case-study-apparel-9c5f3a',
    titleId: 'case-study-apparel-title',
    descId: 'case-study-apparel-desc',
  },
  {
    id: 'machinery-parts',
    title: 'CNC Parts Sourcing for German Engineering Firm',
    category: 'Machinery & Industrial',
    challenge: 'A German engineering firm needed precision CNC machined parts with tight tolerances (±0.01mm) and ISO 9001 certified manufacturing.',
    solution: 'We identified 4 precision machining factories, verified their equipment and quality systems, coordinated sample testing, and managed the transition to mass production.',
    result: 'Achieved 99.2% dimensional accuracy across 10,000+ parts. Client reduced lead time by 30% and costs by 18%.',
    metrics: [
      { label: 'Parts Produced', value: '10,000+' },
      { label: 'Accuracy Rate', value: '99.2%' },
      { label: 'Lead Time Reduction', value: '30%' },
    ],
    imgId: 'case-study-machinery-2e7d5b',
    titleId: 'case-study-machinery-title',
    descId: 'case-study-machinery-desc',
  },
  {
    id: 'packaging-custom',
    title: 'Custom Packaging for UK Cosmetics Brand',
    category: 'Packaging & Printing',
    challenge: 'A UK cosmetics brand needed custom luxury packaging with specific printing requirements, eco-friendly materials, and fast turnaround.',
    solution: 'We sourced a packaging factory with luxury brand experience, coordinated material selection, managed print proofing, and conducted quality inspections.',
    result: 'Delivered 100,000 custom boxes with premium finish. Client praised the quality and has since placed 3 repeat orders.',
    metrics: [
      { label: 'Boxes Delivered', value: '100,000' },
      { label: 'Quality Rating', value: 'Premium' },
      { label: 'Repeat Orders', value: '3' },
    ],
    imgId: 'case-study-packaging-6f1a8c',
    titleId: 'case-study-packaging-title',
    descId: 'case-study-packaging-desc',
  },
  {
    id: 'automotive-accessories',
    title: 'Auto Accessories for Canadian Distributor',
    category: 'Automotive',
    challenge: 'A Canadian auto parts distributor needed to source LED headlight assemblies that met DOT and SAE standards for the North American market.',
    solution: 'We verified factory certifications, coordinated product testing, managed compliance documentation, and arranged consolidated shipping from multiple product lines.',
    result: 'Successfully imported 5,000 units with full compliance. Client expanded their product range and increased margins by 25%.',
    metrics: [
      { label: 'Units Imported', value: '5,000' },
      { label: 'Compliance', value: '100%' },
      { label: 'Margin Increase', value: '25%' },
    ],
    imgId: 'case-study-automotive-3c9b4e',
    titleId: 'case-study-automotive-title',
    descId: 'case-study-automotive-desc',
  },
];

export default function CaseStudiesPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-lg text-slate-300 mb-8">
              Real examples of how we've helped buyers source successfully from China. Each case study shows the challenge, our approach, and the results.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Sourcing Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {study.category}
                  </span>
                  <h2 id={study.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <h3 className="font-semibold text-slate-900">Challenge</h3>
                      </div>
                      <p id={study.descId} className="text-slate-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <h3 className="font-semibold text-slate-900">Our Solution</h3>
                      </div>
                      <p className="text-slate-600">{study.solution}</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <h3 className="font-semibold text-green-900">Results</h3>
                      </div>
                      <p className="text-green-800 mb-4">{study.result}</p>
                      <div className="grid grid-cols-3 gap-4">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center">
                            <div className="text-xl font-bold text-green-700">{metric.value}</div>
                            <div className="text-xs text-green-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg sticky top-24">
                    <img
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing needs and we'll create a custom plan for your project.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
