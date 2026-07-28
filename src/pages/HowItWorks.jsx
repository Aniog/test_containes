import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MessageSquare, Search, Settings, Ship } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 'step1',
      number: '01',
      title: 'Consultation & Requirements',
      icon: MessageSquare,
      desc: 'We start by understanding your product specifications, target pricing, estimated annual volume, and quality standards.',
      details: 'Our team reviews your technical drawings, BOM, or reference samples to ensure we have a complete understanding of your needs.'
    },
    {
      id: 'step2',
      number: '02',
      title: 'Sourcing & Sample Approval',
      icon: Search,
      desc: 'We identify qualified suppliers, negotiate pricing, and coordinate samples for your approval.',
      details: 'We don\'t just find the lowest price; we find the best value-to-quality ratio and verify the factory\'s actual capabilities.'
    },
    {
      id: 'step3',
      number: '03',
      title: 'Production & Quality Control',
      icon: Settings,
      desc: 'Once the order is placed, we manage production schedules and perform inspections at key stages.',
      details: 'Our inspectors visit the factory to perform DUPRO and FRI inspections, ensuring quality is maintained throughout the run.'
    },
    {
      id: 'step4',
      number: '04',
      title: 'Logistics & Final Delivery',
      icon: Ship,
      desc: 'We handle container loading supervision, customs documentation, and coordinate with freight forwarders.',
      details: 'We ensure your goods are packed correctly and shipped using the most efficient routes to minimize costs and transit time.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 id="hiw-title" className="mb-6 text-4xl font-bold md:text-5xl">Our Sourcing Process</h1>
          <p id="hiw-desc" className="mx-auto max-w-2xl text-xl text-muted-foreground">
            A transparent, reliable, and standardized approach to China sourcing that gives you peace of mind and better results.
          </p>
        </div>
      </section>

      {/* Steps Visual */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, idx) => (
              <div key={step.id} className={`flex flex-col gap-12 lg:flex-row items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-primary font-bold tracking-wider">
                    STEP {step.number}
                  </div>
                  <h2 id={`${step.id}-title`} className="text-3xl font-bold">{step.title}</h2>
                  <p id={`${step.id}-desc`} className="text-lg text-muted-foreground leading-relaxed">{step.desc}</p>
                  <p className="text-foreground/80 leading-relaxed">{step.details}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                       <CheckCircle className="h-5 w-5 text-primary" />
                       <span className="font-medium text-sm md:text-base">Transparent Communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                       <CheckCircle className="h-5 w-5 text-primary" />
                       <span className="font-medium text-sm md:text-base">Detailed Documentation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 relative aspect-[16/10] w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl bg-secondary group">
                  <img
                    data-strk-img-id={`img-${step.id}`}
                    data-strk-img={`[${step.id}-desc] [${step.id}-title] [hiw-title]`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl text-white">Typical Project Timeline</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Phase 1: Sourcing</h3>
              <p className="text-2xl font-bold mb-2">7-14 Days</p>
              <p className="text-blue-100/70 text-sm">Supplier identification and sample development.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Phase 2: Production</h3>
              <p className="text-2xl font-bold mb-2">30-45 Days</p>
              <p className="text-blue-100/70 text-sm">Manufacturing time (varies by product complexity).</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Phase 3: Logistics</h3>
              <p className="text-2xl font-bold mb-2">25-35 Days</p>
              <p className="text-blue-100/70 text-sm">Sea freight and customs clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 text-3xl font-bold">Have Specific Logistics Questions?</h2>
          <p className="mb-10 text-lg text-muted-foreground mx-auto max-w-2xl">
            Sourcing in China involves many variables. We're here to explain every detail, from incoterms to customs duty calculations.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Ask a Question</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">Explore Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
