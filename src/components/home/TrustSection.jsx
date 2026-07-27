import { Award, Users, Globe, Clock, FileCheck, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Globe,
    title: 'China-Based Team',
    description: 'Our team is physically located in China — in Shenzhen, Yiwu, and Guangzhou — giving you real on-the-ground access.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'You receive detailed audit reports, inspection photos, and production updates at every stage of your order.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description: 'Every client gets a dedicated sourcing manager who speaks your language and understands your business.',
  },
  {
    icon: Award,
    title: 'Verified Supplier Network',
    description: 'We only work with factories that have passed our multi-point verification process — no unknown vendors.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'We respond to all inquiries within one business day and keep you updated throughout the sourcing process.',
  },
  {
    icon: Headphones,
    title: 'After-Order Support',
    description: 'Our relationship doesn\'t end at shipment. We support you with reorders, supplier issues, and ongoing quality management.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Why Clients Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5">
              Your Reliable Partner on the Ground in China
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              We understand that trust is earned, not claimed. That's why we operate with full transparency, provide documented evidence at every step, and only recommend suppliers we have personally verified.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-lightblue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-sm mb-0.5">{point.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats panel */}
          <div className="bg-navy rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Our Track Record</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Verified Suppliers', sub: 'Across major Chinese manufacturing hubs' },
                { value: '12+', label: 'Years in Business', sub: 'Serving global buyers since 2012' },
                { value: '40+', label: 'Countries Served', sub: 'From the US to Europe, Australia & beyond' },
                { value: '3,000+', label: 'Orders Managed', sub: 'From samples to full container loads' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-xl p-4">
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-blue-200 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">{stat.sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-navy flex items-center justify-center text-xs font-bold text-white">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-300">
                  Trusted by <span className="text-white font-semibold">200+ active clients</span> worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
