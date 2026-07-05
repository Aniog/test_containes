const trustItems = ['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic']

export default function TrustBar() {
  return (
    <section className="border-y border-[#17110D]/10 bg-[#F7F1E8] text-[#17110D]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 text-center md:grid-cols-4 md:px-8">
        {trustItems.map((item) => (
          <p key={item} className="py-4 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#5D3A1E] md:text-xs">
            {item}
          </p>
        ))}
      </div>
    </section>
  )
}
