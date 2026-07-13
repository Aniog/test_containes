import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { MapPin, Tag, TrendingDown, CheckCircle, ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 'led-germany',
    title: 'LED Lighting Importer — Germany',
    category: 'Electronics',
    country: 'Germany',
    challenge: 'A German lighting distributor was receiving LED products that didn\'t match approved samples. Quality was inconsistent across batches, leading to customer returns and reputational damage.',
    solution: 'We audited 4 factories, selected the most capable one, and implemented a pre-shipment inspection protocol with AQL 2.5 sampling. We also introduced a sample retention system to compare each batch against the approved standard.',
    results: ['22% reduction in unit cost through renegotiation', 'Zero quality-related returns in 3 subsequent orders', 'Consistent product quality across all batches', 'Detailed QC reports for each shipment'],
    imgId: 'case-led-germany-img-3f7a2b',
    titleId: 'case-led-germany-title',
    descId: 'case-led-germany-desc',
  },
  {
    id: 'furniture-australia',
    title: 'Office Furniture Buyer — Australia',
    category: 'Furniture',
    country: 'Australia',
    challenge: 'An Australian office furniture retailer wanted to source directly from China but had no contacts and was concerned about product quality and shipping reliability.',
    solution: 'We identified 5 qualified furniture manufacturers, conducted factory audits at 3 of them, and negotiated pricing and terms. We managed the full order from production to delivery, including container loading supervision.',
    results: ['15% lower pricing than previous supplier', '3 verified factories to choose from', 'On-time delivery for a 200-unit order', 'Full production monitoring with weekly updates'],
    imgId: 'case-furniture-aus-img-8b4e1d',
    titleId: 'case-furniture-aus-title',
    descId: 'case-furniture-aus-desc',
  },
  {
    id: 'sportswear-usa',
    title: 'Sportswear Brand — USA',
    category: 'Apparel',
    country: 'USA',
    challenge: 'A US sportswear startup needed to place a 10,000-unit first production run with a new factory. They had no experience managing Chinese suppliers and were worried about quality and delivery.',
    solution: 'We sourced and audited 3 apparel factories, managed the sampling process, and provided full production monitoring with bi-weekly factory visits. A pre-shipment inspection was conducted before goods were shipped.',
    results: ['Zero returns or quality complaints', 'Delivery within agreed timeline', 'Detailed inspection report for each SKU', 'Ongoing relationship with verified factory'],
    imgId: 'case-sportswear-usa-img-5c2f9a',
    titleId: 'case-sportswear-usa-title',
    descId: 'case-sportswear-usa-desc',
  },
  {
    id: 'packaging-france',
    title: 'Cosmetics Packaging — France',
    category: 'Packaging',
    country: 'France',
    challenge: 'A French cosmetics brand needed custom packaging manufactured in China but had concerns about color accuracy, material quality, and meeting EU compliance requirements.',
    solution: 'We sourced 4 packaging factories, managed the sampling and color approval process, and ensured all materials met EU REACH compliance. We coordinated with the brand\'s design team and the factory throughout.',
    results: ['Color accuracy within approved tolerance', 'EU REACH compliance confirmed', 'Packaging delivered 2 weeks ahead of schedule', 'Ongoing supplier relationship established'],
    imgId: 'case-packaging-fr-img-7d3b6e',
    titleId: 'case-packaging-fr-title',
    descId: 'case-packaging-fr-desc',
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Client Results</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. See how we've helped buyers across different
            industries and countries.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="section-container flex flex-col gap-16">
          {cases.map((c, idx) => (
            <div key={c.id} className="border border-brand-border rounded-2xl overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className={`h-64 lg:h-auto min-h-64 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    alt={c.title}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.descId}] [${c.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className={`p-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-brand-navy text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {c.category}
                    </span>
                    <span className="bg-brand-light-blue text-brand-navy text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {c.country}
                    </span>
                  </div>

                  <h2 id={c.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-4">
                    {c.title}
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">Challenge</h3>
                    <p id={c.descId} className="text-brand-body text-sm leading-relaxed">{c.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">Our Approach</h3>
                    <p className="text-brand-body text-sm leading-relaxed">{c.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">Results</h3>
                    <ul className="flex flex-col gap-1.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-brand-body">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Tell us about your sourcing project and we'll show you how we can help.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
