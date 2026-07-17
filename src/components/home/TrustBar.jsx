import { trustItems } from '@/data/products'

export default function TrustBar() {
  return (
    <div className="bg-velmora-base text-velmora-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 md:gap-10 py-3.5 text-[10px] md:text-xs font-sans tracking-widest uppercase overflow-x-auto whitespace-nowrap">
          {trustItems.map((item) => (
            <span key={item} className="flex-shrink-0">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
