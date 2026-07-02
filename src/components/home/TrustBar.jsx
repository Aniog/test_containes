import { Truck, RefreshCw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-[#E4DDD4] bg-[#F6F3EF] py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-3 md:grid-cols-4 md:gap-y-0">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2">
              <Icon size={16} className="text-[#C49A6C]" />
              <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#1A1512]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
