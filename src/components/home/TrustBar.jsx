const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
export default function TrustBar() {
  return <section className="border-y border-velmora-line bg-velmora-porcelain text-velmora-espresso"><div className="mx-auto flex max-w-7xl snap-x gap-8 overflow-x-auto px-4 py-4 text-xs font-semibold uppercase tracking-luxury sm:px-6 lg:justify-center lg:px-8">{trustItems.map((item) => <span key={item} className="shrink-0 snap-start">{item}</span>)}</div></section>
}
