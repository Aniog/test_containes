import { Shield, RotateCcw, Award, Sparkles } from 'lucide-react'

const trustItems = [
  { icon: Award, text: '18K Gold Plated' },
  { icon: RotateCcw, text: '30-Day Returns' },
  { icon: Shield, text: 'Free Worldwide Shipping' },
  { icon: Sparkles, text: 'Hypoallergenic' },
]

export default function TrustBar() {
  return (
    <div className="border-y border-border-light bg-cream">
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {trustItems.map((item, index) => (
            <div
              key={item.text}
              className={`flex items-center justify-center gap-3 py-4 px-4 ${
                index < 2 ? 'md:border-r border-border-light' : ''
              } ${index === 0 ? 'border-r border-border-light md:border-r-0' : ''}
              ${index === 0 ? 'border-b border-border-light md:border-b-0' : ''}
              ${index === 1 ? 'border-b border-border-light md:border-b-0' : ''}
              ${index === 2 ? 'border-r border-border-light md:border-r-0' : ''}`}
            >
              <item.icon className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-xs md:text-sm text-muted font-medium whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}