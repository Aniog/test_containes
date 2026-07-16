import { Truck, RotateCcw, Gem, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RotateCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
];

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-ivory border-y border-champagne"
    >
      <div className="container-wide section-padding py-4 lg:py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2.5"
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="font-sans text-xs tracking-wider uppercase text-charcoal/70 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
