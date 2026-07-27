const ServiceCard = ({ service }) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
        Service
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.summary}</p>
      <ul className="mt-6 space-y-3 text-sm text-slate-700">
        {service.bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ServiceCard
