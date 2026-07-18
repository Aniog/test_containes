const items = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

const TrustBar = () => {
  return (
    <div className="border-y border-white/10 bg-velvet text-ivory">
      <div className="content-wrap overflow-hidden py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center text-[11px] uppercase tracking-[0.24em] text-ivory/75 sm:gap-x-8">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBar
