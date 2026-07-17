export default function Journal() {
  return (
    <div className="pt-20 sm:pt-24">
      <div className="bg-ivory-200 border-b border-stone-200/60 py-10 sm:py-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="text-[11px] font-medium tracking-widest-2xl uppercase text-gold-dark mb-3">
            The Velmora Edit
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900">
            Journal
          </h1>
          <p className="text-sm text-stone-500 mt-3 max-w-md mx-auto">
            Style guides, care tips, and stories from the world of demi-fine jewelry.
          </p>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-20 text-center">
        <p className="font-serif text-xl text-stone-600 mb-2">Coming Soon</p>
        <p className="text-sm text-stone-400">
          We're working on something beautiful. Check back soon for style guides, 
          jewelry care tips, and behind-the-scenes stories.
        </p>
      </div>
    </div>
  )
}
