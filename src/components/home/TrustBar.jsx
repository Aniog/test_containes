const items = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-cream border-b border-stone">
      <div className="mx-auto px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 md:py-4">
          {items.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-taupe"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
