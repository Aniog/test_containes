import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    imgId: 'case-study-1-a1b2c',
    titleId: 'cs-title-1',
    descId: 'cs-desc-1',
    badgeId: 'cs-badge-1',
    badge: 'Electronics',
    title: 'Consumer Electronics Brand',
    description: 'Helped a US startup source Bluetooth speakers from zero to 20,000 units with full QC and logistics support.',
    result: '40% cost savings vs. previous supplier',
  },
  {
    imgId: 'case-study-2-c3d4e',
    titleId: 'cs-title-2',
    descId: 'cs-desc-2',
    badgeId: 'cs-badge-2',
    badge: 'Apparel',
    title: 'European Fashion Label',
    description: 'Verified and onboarded 3 ethical garment factories in Guangdong for a sustainable clothing brand.',
    result: 'On-time delivery for 12 consecutive orders',
  },
  {
    imgId: 'case-study-3-f5g6h',
    titleId: 'cs-title-3',
    descId: 'cs-desc-3',
    badgeId: 'cs-badge-3',
    badge: 'Industrial',
    title: 'Australian Industrial Distributor',
    description: 'Sourced hydraulic components from 5 factories, conducted audits, and managed consolidated shipping.',
    result: '30% reduction in total landed cost',
  },
];

export default function CaseStudiesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <Card key={cs.title} className="border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] bg-slate-100 overflow-hidden">
                <img
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cs.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <Badge id={cs.badgeId} variant="secondary" className="w-fit mb-2">{cs.badge}</Badge>
                <CardTitle id={cs.titleId} className="text-lg">{cs.title}</CardTitle>
                <CardDescription id={cs.descId} className="text-sm text-muted-foreground leading-relaxed">
                  {cs.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <span>{cs.result}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/case-studies">
            <Button variant="outline" size="lg" className="font-semibold">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}