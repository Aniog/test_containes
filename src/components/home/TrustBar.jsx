import { Check } from 'lucide-react';

const trusts = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
];

export default function TrustBar() {
  return (
    <div className="border-b border-velvet-border bg-velvet-card">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex flex-wrap items-center justify-center gap-4 md:gap-10">
        {trusts.map((text) => (
          <div key={text} className="flex items-center gap-2 text-xs text-velvet-muted tracking-wide">
            <Check className="w-3 h-3 text-velvet-success" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
