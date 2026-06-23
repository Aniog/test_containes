export default function ServiceCard({ service, sectionTitleId }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-brand-border bg-white text-brand-ink shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
      <img
        alt={service.title}
        className="h-52 w-full bg-slate-200 object-cover"
        data-strk-img-id={service.imgId}
        data-strk-img={`[${service.descId}] [${service.titleId}] [${sectionTitleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="700"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      <div className="p-6">
        <h3 id={service.titleId} className="text-xl font-bold text-brand-ink">{service.title}</h3>
        <p id={service.descId} className="mt-3 text-sm leading-6 text-brand-muted">{service.desc}</p>
      </div>
    </article>
  )
}
