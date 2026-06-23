import React from 'react';
import { Users, Globe2, ShieldCheck, Clock } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '10+', icon: Clock },
  { label: 'Verified Factories', value: '500+', icon: ShieldCheck },
  { label: 'Global Clients', value: '300+', icon: Globe2 },
  { label: 'Team Members', value: '50+', icon: Users },
];

export default function HomeTrust() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Why Global Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              We eliminate the risks of international trade by being your eyes and ears on the ground. We don't just find suppliers; we build secure, long-term supply chains.
            </p>
            
            <div className="space-y-6">
              <div className="flex bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    0%
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Zero Hidden Fees</h3>
                  <p className="text-primary-foreground/80">We work on a transparent flat-fee or percentage model. No factory kickbacks, ever.</p>
                </div>
              </div>
              
              <div className="flex bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary font-bold text-xl">
                    100%
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Full Protection</h3>
                  <p className="text-primary-foreground/80">We use strong legal contracts (NNN) and conduct strict local QC before you make the final payment.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                <stat.icon className="h-10 w-10 text-white/80 mb-4" />
                <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
