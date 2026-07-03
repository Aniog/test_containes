export default function CollectionsPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
          Collections
        </h1>
        <div className="w-12 h-px bg-brand-accent mx-auto mt-4 mb-8" />
        <p className="text-sm md:text-base text-brand-muted font-light leading-relaxed max-w-lg mx-auto">
          Our curated collections are coming soon. Each one tells a story — from everyday essentials to statement pieces for life's most memorable moments.
        </p>
        <div className="mt-12 aspect-[16/9] overflow-hidden bg-brand-card">
          <img
            data-strk-img-id="collections-placeholder-m5n6"
            data-strk-img="[collections-subtitle] [collections-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora collections"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 id="collections-title" className="sr-only">Velmora Collections</h2>
        <p id="collections-subtitle" className="sr-only">Curated jewelry collections</p>
      </div>
    </div>
  )
}
