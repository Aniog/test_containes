const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <div className="border-b border-velmora-line bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto px-5 py-4 text-xs font-bold uppercase tracking-[0.22em] scrollbar-hide sm:px-8 lg:grid lg:grid-cols-4 lg:gap-0 lg:px-12">
        {trustItems.map((item) => (
          <div key={item} className="min-w-max snap-start text-center lg:border-r lg:border-velmora-line lg:last:border-r-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
