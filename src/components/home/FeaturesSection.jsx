import React from 'react';
import { CheckCircle, Shield, Award, Clock, Users, Wrench } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Precision Engineering',
    description: 'Micron-level accuracy in every fold, ensuring consistent quality across all operations.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'ISO 9001 certified manufacturing with rigorous quality control at every stage.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Streamlined production and logistics to get your machine operational quickly.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical team available 24/7 for installation, training, and maintenance.',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Tailored configurations to match your specific production requirements.',
  },
  {
    icon: CheckCircle,
    title: 'Warranty Coverage',
    description: 'Comprehensive warranty with extended service plans for peace of mind.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Why Choose Artitect
          </h2>
          <p className="mt-4 text-lg text-muted">
            Decades of expertise combined with cutting-edge technology deliver unmatched value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-xl border border-border hover:border-accent/30 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
