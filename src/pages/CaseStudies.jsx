import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TrendingUp, Clock, DollarSign, ShieldCheck } from 'lucide-react';
import SectionHeader, { CTAButton } from '@/components/ui/SectionHeader';

const caseStudies = [
  {
    id: 'cs-electronics-uk',
    industry: 'Consumer Electronics',
    country: 'United Kingdom',
    title: 'Reducing Defect Rate by 40% for a UK Electronics Retailer',
    challenge: 'A UK-based electronics retailer was receiving shipments with a 12% defect rate from their existing Chinese supplier. Customer returns were increasing and the supplier was unresponsive to quality complaints.',
    solution: 'We conducted a factory audit of the existing supplier and identified gaps in their QC process. We then sourced two alternative manufacturers, negotiated pricing, and implemented a pre-shipment inspection protocol for all future orders.',
    results: ['Defect rate reduced from 12% to under 2%', 'On-time delivery rate improved to 96%', '15% reduction in unit cost through supplier switch', 'Dedicated QC inspector assigned to account'],
    duration: '8 weeks',
    imgId: 'cs-img-1-a1b2c3',
    titleId: 'cs-1-title',
    descId: 'cs-1-desc',
  },
  {
    id: 'cs-furniture-us',
    industry: 'Home Furniture',
    country: 'United States',
    title: 'Scaling Production for a US E-Commerce Furniture Brand',
    challenge: 'A fast-growing US e-commerce brand needed to triple their furniture production capacity within 6 months. Their single supplier could not scale, and they had no experience finding new Chinese manufacturers.',
    solution: 'We identified and audited three new furniture manufacturers in Guangdong and Zhejiang provinces. We managed the sample approval process, negotiated contracts, and set up a production monitoring system across all suppliers.',
    results: ['3x production capacity achieved within 5 months', 'Two new certified suppliers onboarded', '20% lower average unit cost', 'Standardized QC process across all suppliers'],
    duration: '5 months',
    imgId: 'cs-img-2-d4e5f6',
    titleId: 'cs-2-title',
    descId: 'cs-2-desc',
  },
  {
    id: 'cs-apparel-eu',
    industry: 'Apparel & Textiles',
    country: 'Germany',
    title: 'Streamlining Textile Sourcing for a German Fashion Brand',
    challenge: 'A German fashion brand was spending excessive time managing multiple Chinese textile suppliers with inconsistent quality and communication. They needed a single point of contact to manage their China supply chain.',
    solution: 'We consolidated their supplier base from 8 to 4 verified manufacturers, implemented a unified communication and reporting system, and took over all production follow-up and QC responsibilities.',
    results: ['Lead time reduced by 3 weeks on average', '4 verified suppliers replacing 8 unvetted ones', 'Single weekly report replacing daily supplier chasing', 'Zero shipment rejections in 12 months'],
    duration: '3 months setup',
    imgId: 'cs-img-3-g7h8i9',
    titleId: 'cs-3-title',
    descId: 'cs-3-desc',
  },
  {
    id: 'cs-industrial-au',
    industry: 'Industrial Equipment',
    country: 'Australia',
    title: 'First-Time China Sourcing for an Australian Hardware Distributor',
    challenge: 'An Australian hardware distributor wanted to source industrial tools directly from China for the first time but had no contacts, no experience with Chinese suppliers, and concerns about quality and compliance.',
    solution: 'We guided them through the entire process — from product specification to supplier selection, factory audit, sample approval, and first shipment. We also ensured all products met Australian safety standards.',
    results: ['First order delivered on time and within spec', '35% cost saving vs. previous wholesale supplier', 'All products certified to Australian standards', 'Ongoing sourcing relationship established'],
    duration: '12 weeks (first order)',
    imgId: 'cs-img-4-j0k1l2',
    titleId: 'cs-4-title',
    descId: 'cs-4-desc',
  },
];

const metrics = [
  { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
  { icon: ShieldCheck, value: '98%', label: 'Client Satisfaction' },
  { icon: Clock, value: '12+', label: 'Years Experience' },
  { icon: DollarSign, value: '30+', label: 'Countries Served' },
];

export default function CaseStudies() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Client Results
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Real sourcing projects, real outcomes. No exaggerated claims — just documented results from our clients.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="flex flex-col items-center gap-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <div className="text-3xl font-bold text-primary-dark">{m.value}</div>
                  <div className="text-text-muted text-sm">{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={cs.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={`rounded-xl overflow-hidden bg-neutral-bg h-72 lg:h-80 ${!isEven ? 'lg:order-2' : ''}`}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-text-muted">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-primary-dark mb-4">{cs.title}</h2>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-2">Challenge</h4>
                      <p id={cs.descId} className="text-text-muted text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-2">Our Approach</h4>
                      <p className="text-text-muted text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-2">Results</h4>
                      <ul className="flex flex-col gap-1.5">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-text-dark">
                            <ShieldCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 text-xs text-text-muted">
                      Project duration: <span className="font-medium text-text-dark">{cs.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            Want Results Like These?
          </h2>
          <p className="text-text-muted mb-8">
            Tell us about your sourcing challenge and we will put together a plan tailored to your needs.
          </p>
          <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
