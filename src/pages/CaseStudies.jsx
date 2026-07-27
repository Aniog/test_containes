import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, TrendingDown, Clock, Shield, Globe } from 'lucide-react';

function CaseStudiesHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0A1628] via-[#0F4C81] to-[#0A3659] text-white py-20 md:py-28">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            <TrendingDown className="w-4 h-4" />
            <span>Real Results from Real Projects</span>
          </div>
          <h1 id="cases-title" className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Case Studies
          </h1>
          <p id="cases-subtitle" className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            See how we have helped businesses around the world source products from China successfully.
          </p>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ title, description, challenge, solution, results, imgId, industry, country }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <article ref={containerRef} className="card overflow-hidden p-0">
      <div className="aspect-video relative overflow-hidden">
        <img
          alt={title}
          data-strk-img-id={imgId}
          data-strk-img={`[${title}-desc] [${title}-title] [cases-subtitle] [cases-title]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">{industry}</span>
          <span className="bg-secondary text-muted-foreground text-xs font-medium px-3 py-1 rounded-full">{country}</span>
        </div>
        <h3 id={`${title}-title`} className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p id={`${title}-desc`} className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
            <p className="text-sm text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Our Solution</h4>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
        </div>

        <div className="bg-primary/5 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
          <div className="grid grid-cols-2 gap-3">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                <span className="text-sm text-foreground">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseStudiesList() {
  const cases = [
    {
      title: 'US Retailer Saves 30% on Electronics Sourcing',
      description: 'A US electronics retailer needed a reliable supplier for smart home devices. They had previously experienced quality issues and delayed deliveries from an unverified supplier found on a B2B platform.',
      challenge: 'Previous supplier delivered inconsistent quality, missed deadlines, and communication was difficult due to language barriers.',
      solution: 'We verified 8 factories in Shenzhen, conducted on-site audits, and shortlisted 3 suppliers. After sample evaluation, the client selected a factory with ISO 9001 certification. We managed the entire production process with weekly updates and pre-shipment inspections.',
      results: ['30% cost savings vs. previous supplier', 'Zero defect rate on 10,000-unit order', 'Delivery 1 week ahead of schedule'],
      imgId: 'case-electronics-1a2b',
      industry: 'Electronics',
      country: 'United States'
    },
    {
      title: 'European Brand Launches Custom Packaging Line',
      description: 'A European cosmetics brand wanted to launch a new product line with custom packaging manufactured in China. They needed a supplier that could meet EU material safety standards.',
      challenge: 'Finding a packaging manufacturer with EU compliance certifications and the ability to produce custom designs at competitive prices.',
      solution: 'We identified 5 certified packaging manufacturers in Guangdong, verified their EU compliance documentation, and arranged sample production. We managed the tooling process and conducted material testing before mass production.',
      results: ['Full EU material compliance', 'On-time delivery for product launch', '20% below initial budget'],
      imgId: 'case-packaging-2c3d',
      industry: 'Cosmetics',
      country: 'Germany'
    },
    {
      title: 'Australian Builder Sources Construction Materials',
      description: 'An Australian construction company needed bulk building materials for a large residential project. They wanted to reduce costs while maintaining Australian building standards.',
      challenge: 'Coordinating multiple suppliers, ensuring materials met Australian standards, and managing complex logistics for bulk shipments.',
      solution: 'We sourced from 4 different suppliers, consolidated all materials at our warehouse, conducted quality inspections, and arranged sea freight with complete customs documentation.',
      results: ['15% under project budget', '2-week early delivery', 'All materials passed Australian standards'],
      imgId: 'case-construction-3e4f',
      industry: 'Construction',
      country: 'Australia'
    },
    {
      title: 'UK Startup Sources Custom Furniture',
      description: 'A UK furniture startup needed a manufacturer for their custom-designed dining tables. They required high-quality woodwork with specific finish requirements.',
      challenge: 'Finding a furniture manufacturer capable of custom designs with consistent quality and reasonable minimum order quantities.',
      solution: 'We visited furniture factories in Foshan, verified their craftsmanship capabilities, and arranged prototype production. We conducted multiple quality checks during production and arranged careful packaging for international shipping.',
      results: ['Prototype approved on first revision', 'Consistent quality across 200-unit order', 'Competitive pricing for custom work'],
      imgId: 'case-furniture-4g5h',
      industry: 'Furniture',
      country: 'United Kingdom'
    },
    {
      title: 'Canadian Distributor Sources Industrial Tools',
      description: 'A Canadian tool distributor needed a reliable manufacturer for their private-label line of industrial hand tools.',
      challenge: 'Finding a manufacturer with the capability to produce private-label tools meeting Canadian safety standards, with consistent quality across large volumes.',
      solution: 'We identified manufacturers in Yongkang, verified their production capabilities and quality systems, arranged sample testing, and managed the entire production run with regular quality inspections.',
      results: ['Private-label production established', 'All tools passed Canadian safety tests', 'Repeat orders for 3 consecutive quarters'],
      imgId: 'case-tools-5i6j',
      industry: 'Industrial Tools',
      country: 'Canada'
    },
    {
      title: 'Singapore Company Sources Textile Products',
      description: 'A Singapore-based company needed a textile manufacturer for their new line of eco-friendly home textiles.',
      challenge: 'Finding a manufacturer with sustainable production practices and the ability to use organic materials while maintaining competitive pricing.',
      solution: 'We sourced manufacturers in Zhejiang with GOTS certification, verified their sustainable practices, and managed sample development. We coordinated production and arranged consolidated shipping.',
      results: ['GOTS-certified production confirmed', 'Eco-friendly materials verified', 'Successful product launch in 3 markets'],
      imgId: 'case-textiles-6k7l',
      industry: 'Textiles',
      country: 'Singapore'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesCTA() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="card bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs, and we will create a plan to help you achieve similar results.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesCTA />
    </>
  );
}
