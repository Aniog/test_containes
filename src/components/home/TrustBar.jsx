import { Truck, Undo2, ShieldCheck, Heart } from 'lucide-react'

const trustItems = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: Undo2, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-velvet-200 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-velvet-200">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2.5 py-4 md:py-5 bg-velvet-50"
              >
                <Icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span className="font-sans text-xs md:text-sm text-ink-600 font-medium whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}