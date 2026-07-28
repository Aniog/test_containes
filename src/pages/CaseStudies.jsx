import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react';

const caseStudies = [
  {
    id: 'cs-1',
    imgId: 'cs-page-1-a1b2c',
    badge: 'Electronics',
    title: 'Consumer Electronics Brand',
    description: 'A US-based startup needed to source Bluetooth speakers with specific audio quality requirements.',
    challenge: 'The founders had been burned by unreliable suppliers on Alibaba. Samples from 3 different factories all failed quality checks. They needed a trusted partner to find a capable manufacturer and manage quality end-to-end.',
    solution: 'We identified 8 potential suppliers through our network, conducted on-site audits of 4 factories, and selected one with ISO 9001 certification and proven audio manufacturing experience. We managed 3 sample rounds, supervised production, and conducted pre-shipment inspection.',
    result: '40% cost savings vs. their previous supplier. First order of 20,000 units delivered on time with zero defects. Ongoing monthly production managed by our team.',
    metric: { icon: TrendingUp, value: '40%', label: 'Cost savings' },
  },
  {
    id: 'cs-2',
    imgId: 'cs-page-2-c3d4e',
    badge: 'Apparel',
    title: 'European Fashion Label',
    description: 'A sustainable fashion brand in Germany needed ethical garment manufacturers in China.',
    challenge: 'The brand required factories with verifiable ethical practices, social compliance certifications, and experience with sustainable materials. Previous attempts to find suppliers through trade fairs yielded no suitable partners.',
    solution: 'We conducted a targeted search through our vetted factory network, focusing on Guangdong-based manufacturers with BSCI or SA8000 certifications. We audited 5 factories, verified their sustainability claims, and shortlisted 3 that met all criteria.',
    result: 'On-time delivery for 12 consecutive orders. The brand expanded from 2 to 6 product lines. Full supply chain transparency with regular audit updates.',
    metric: { icon: Clock, value: '12', label: 'On-time deliveries' },
  },
  {
    id: 'cs-3',
    imgId: 'cs-page-3-f5g6h',
    badge: 'Industrial',
    title: 'Australian Industrial Distributor',
    description: 'An Australian distributor needed to source hydraulic components from multiple Chinese factories.',
    challenge: 'Sourcing from 5 different factories created coordination complexity. Inconsistent quality across suppliers, delayed shipments, and communication issues were causing customer complaints and lost sales.',
    solution: 'We audited and onboarded all 5 suppliers, standardized the QC process across factories, managed consolidated shipping from a single warehouse in Shenzhen, and provided weekly progress reports in English.',
    result: '30% reduction in total landed cost. Consolidated shipping reduced freight costs by 25%. Quality complaints dropped by 90%.',
    metric: { icon: DollarSign, value: '30%', label: 'Cost reduction' },
  },
  {
    id: 'cs-4',
    imgId: 'cs-page-4-g7h8i',
    badge: 'Home Goods',
    title: 'Canadian Home Decor Brand',
    description: 'A Toronto-based home decor company wanted to expand its product line with ceramic and glassware.',
    challenge: 'Finding factories capable of producing high-end ceramic and glass products with consistent quality, safe packaging for international shipping, and compliance with North American safety standards.',
    solution: 'We sourced from Jingdezhen (ceramics capital) and glass manufacturers in Guangdong. We managed all sample development, coordinated UL/CSA compliance testing, and designed custom packaging for fragile items.',
    result: 'New product line launched in 4 months. 50% lower unit cost than domestic alternatives. Zero breakage in first shipment.',
    metric: { icon: TrendingUp, value: '50%', label: 'Cost savings' },
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Real projects, real results. See how we have helped businesses across industries 
              source successfully from China.
            </p>
            <Link to="/contact">
              <Button size="lg" className="font-semibold px-8 py-6 text-base">
                Start Your Success Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, index) => (
            <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[cs-desc-${cs.id}] [cs-title-${cs.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <Badge variant="secondary" className="mb-3">{cs.badge}</Badge>
                <h2 id={`cs-title-${cs.id}`} className="text-2xl font-bold text-foreground mb-3">{cs.title}</h2>
                <p id={`cs-desc-${cs.id}`} className="text-muted-foreground mb-6">{cs.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">The Challenge</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">Our Solution</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">The Result</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <cs.metric.icon className="w-8 h-8 text-primary" />
                  <div>
                    <span className="text-2xl font-bold text-primary">{cs.metric.value}</span>
                    <span className="text-sm text-muted-foreground ml-2">{cs.metric.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let Us Create Your Success Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us about your project and we will show you how we can help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="font-semibold px-8 py-6 text-base">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}