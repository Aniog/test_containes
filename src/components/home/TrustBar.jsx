import { Truck, RefreshCcw, ShieldCheck, Heart } from 'lucide-react'
import { Separator } from '@/components/ui/Separator'

const items = [
  { icon: Truck, label: 'Free Worldwide Shipping' },
  { icon: RefreshCcw, label: '30-Day Returns' },
  { icon: ShieldCheck, label: '18K Gold Plated' },
  { icon: Heart, label: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-3 px-4 py-4 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <div key={item.label} className="flex items-center px-4 py-1 sm:px-6">
            <item.icon className="mr-2 h-4 w-4 text-accent" />
            <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-foreground">
              {item.label}
            </span>
            {index < items.length - 1 && (
              <Separator orientation="vertical" className="ml-6 hidden h-4 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
