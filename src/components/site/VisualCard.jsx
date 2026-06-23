const VisualCard = ({ imageId, query, ratio = '4x3', width = '700', title, description, className = '' }) => (
  <article className={`overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm ${className}`}>
    <img
      alt={title}
      className="h-56 w-full object-cover"
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{description}</p>
    </div>
  </article>
)

export default VisualCard
