export default function TrustBar() {
  return <div className="border-y border-velmora-sand bg-velmora-sand/45 text-velmora-ink"><div className="velmora-container flex snap-x gap-6 overflow-x-auto py-4 text-xs font-extrabold uppercase tracking-nav sm:justify-center sm:gap-8">{['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => <span key={item} className="shrink-0 snap-center">{item}</span>)}</div></div>
}
