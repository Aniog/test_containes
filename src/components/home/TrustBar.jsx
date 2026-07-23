import { Globe, RefreshCcw, Award, Heart } from 'lucide-react';

const features = [
  { icon: Globe, text: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, text: '30-Day Returns' },
  { icon: Award, text: '18K Gold Plated' },
  { icon: Heart, text: 'Hypoallergenic' }
];

export default function TrustBar() {
  return (
    <section className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] py-4 md:py-5">
      <div className="container-wide">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-xs md:text-sm tracking-wider uppercase"
            >
              <feature.icon className="w-4 h-4 text-[var(--color-gold)]" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
