const trusts = [
  'Free Worldwide Shipping',
  '30-Day Returns',
  '18K Gold Plated',
  'Hypoallergenic',
]

export default function TrustBar() {
  return (
    <div className="bg-velvet-950 border-b border-velvet-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-10 gap-y-1.5">
        {trusts.map((t) => (
          <span key={t} className="text-[10px] tracking-widest-plus uppercase text-velvet-400 font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}