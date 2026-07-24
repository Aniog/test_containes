const projects = [
  {
    id: 'aurora',
    title: 'Aurora Fintech Platform',
    desc: 'A complete rebrand and dashboard redesign for a next-generation finance startup.',
    tag: 'Product Design',
    imgId: 'showcase-img-aurora-01',
  },
  {
    id: 'terra',
    title: 'Terra Coffee Roasters',
    desc: 'E-commerce experience and packaging system for a specialty coffee brand.',
    tag: 'E-commerce',
    imgId: 'showcase-img-terra-02',
  },
  {
    id: 'atlas',
    title: 'Atlas Travel Collective',
    desc: 'An immersive editorial site that boosted bookings for curated adventure trips.',
    tag: 'Web Experience',
    imgId: 'showcase-img-atlas-03',
  },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Selected work
            </p>
            <h2
              id="showcase-title"
              className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
            >
              Recent projects we are proud of
            </h2>
          </div>
          <p
            id="showcase-subtitle"
            className="text-base leading-relaxed text-slate-600 md:max-w-sm"
          >
            A snapshot of collaborations across fintech, retail, and travel.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  data-strk-img-id={project.imgId}
                  data-strk-img={`[showcase-${project.id}-desc] [showcase-${project.id}-title] [showcase-subtitle] [showcase-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1">
                  {project.tag}
                </span>
                <h3
                  id={`showcase-${project.id}-title`}
                  className="mt-3 text-lg font-semibold text-slate-900"
                >
                  {project.title}
                </h3>
                <p
                  id={`showcase-${project.id}-desc`}
                  className="mt-2 text-sm leading-relaxed text-slate-600"
                >
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
