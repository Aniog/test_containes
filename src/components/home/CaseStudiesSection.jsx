import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    industry: 'Electronics',
    title: 'Consumer Electronics Sourcing for US Retailer',
    challenge: 'A US-based electronics retailer needed a reliable manufacturer for Bluetooth speakers with strict quality requirements.',
    result: 'Found 3 verified factories, reduced defect rate from 8% to 0.5%, and saved 22% on unit costs.',
    metrics: [
      { icon: TrendingUp, value: '22%', label: 'Cost Savings' },
      { icon: DollarSign, value: '0.5%', label: 'Defect Rate' },
      { icon: Clock, value: '3 weeks', label: 'Lead Time' },
    ],
  },
  {
    industry: 'Apparel',
    title: 'Custom Clothing Line for European Brand',
    challenge: 'A European fashion brand needed a factory capable of producing custom designs with consistent quality across multiple fabric types.',
    result: 'Matched with a certified garment factory, established QC protocols, and delivered first collection on time.',
    metrics: [
      { icon: TrendingUp, value: '100%', label: 'On-Time Delivery' },
      { icon: DollarSign, value: '15%', label: 'Margin Improvement' },
      { icon: Clock, value: '45 days', label: 'Production Time' },
    ],
  },
  {
    industry: 'Home & Garden',
    title: 'Furniture Sourcing for Australian Distributor',
    challenge: 'An Australian distributor needed outdoor furniture meeting Australian safety standards with competitive pricing.',
    result: 'Identified a factory with relevant certifications, coordinated testing, and managed full container shipments.',
    metrics: [
      { icon: TrendingUp, value: '30%', label: 'Volume Increase' },
      { icon: DollarSign, value: '18%', label: 'Cost Reduction' },
      { icon: Clock, value: '6 months', label: 'Partnership' },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real results from real sourcing projects. See how we help buyers succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {study.industry}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-3">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Challenge:</span> {study.challenge}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">Result:</span> {study.result}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <metric.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <div className="text-sm font-bold text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button size="lg" variant="outline">
              View All Case Studies
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
