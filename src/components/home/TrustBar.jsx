const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']
export default function TrustBar() {
  return <section className="border-y border-velmora-line bg-velmora-parchment text-velmora-ink"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-4 text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] sm:px-6 md:grid-cols-4 lg:px-8">{items.map((item) => <div key={item} className="px-3 py-2 text-velmora-espresso">{item}</div>)}</div></section>
}
