const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-velmora-champagne/80 bg-velmora-ivory text-velmora-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 md:flex md:items-center md:justify-center md:gap-8 md:px-8 lg:px-12">
        {trustItems.map((item, index) => (
          <div key={item} className="flex items-center justify-center gap-4 text-center font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-velmora-cocoa md:text-xs">
            {index > 0 && <span className="hidden h-px w-10 bg-velmora-champagne md:block" />}
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
