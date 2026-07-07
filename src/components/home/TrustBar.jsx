import { Truck, RefreshCcw, Gem, ShieldCheck } from 'lucide-react'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: Gem, label: '18K Gold Plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export function TrustBar() {
  return (
    <section className="border-b border-[#E2DDD5] bg-[#F9F7F2] py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 md:justify-between lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[#1A1614]">
            <item.icon size={18} strokeWidth={1.5} className="text-[#B9975B]" />
            <span className="text-xs font-medium uppercase tracking-[0.12em]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
