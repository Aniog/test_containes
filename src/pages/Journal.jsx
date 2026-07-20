export default function Journal() {
  return (
    <div className="pt-28 md:pt-32 pb-20 bg-velmora-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            The Journal
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-velmora-text tracking-wide">
            Style Notes
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <article
              key={i}
              className="bg-velmora-surface border border-velmora-border overflow-hidden"
            >
              <div className="aspect-[4/3] bg-velmora-text" />
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-velmora-muted mb-2">
                  {['Styling', 'Care', 'Gifting'][i - 1]}
                </p>
                <h3 className="font-serif text-xl tracking-wide mb-3">
                  {
                    [
                      'How to Layer Necklaces Like an Editor',
                      'Caring for Your Gold-Plated Jewelry',
                      'The Art of the Unboxing Gift',
                    ][i - 1]
                  }
                </h3>
                <p className="text-sm text-velmora-muted leading-relaxed">
                  A short read on making the most of your Velmora pieces.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
