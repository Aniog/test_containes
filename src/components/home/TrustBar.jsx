const trusts = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="border-y border-soft-sand bg-cream/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
        {trusts.map((text, i) => (
          <span
            key={text}
            className="text-[11px] tracking-[0.1em] uppercase text-deep-taupe font-medium flex items-center gap-3"
          >
            {i > 0 && <span className="w-[3px] h-[3px] rounded-full bg-gold" />}
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
