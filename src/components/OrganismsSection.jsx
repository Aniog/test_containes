const organisms = [
  {
    id: 'amoeba',
    title: 'Amoeba',
    desc: 'Shape-shifting single-celled organisms that engulf food through pseudopods',
    fact: 'Can grow up to 1mm — visible to the naked eye',
    imgId: 'org-amoeba-d4f7h2',
    titleId: 'org-amoeba-title',
    descId: 'org-amoeba-desc',
  },
  {
    id: 'paramecium',
    title: 'Paramecium',
    desc: 'Slipper-shaped protozoa covered in tiny hair-like cilia for movement',
    fact: 'Moves at 12 body lengths per second',
    imgId: 'org-paramecium-g8j3l5',
    titleId: 'org-paramecium-title',
    descId: 'org-paramecium-desc',
  },
  {
    id: 'rotifer',
    title: 'Rotifer',
    desc: 'Microscopic animals with rotating wheel-like structures for feeding',
    fact: 'Can survive being dried out for years',
    imgId: 'org-rotifer-m1n6p9',
    titleId: 'org-rotifer-title',
    descId: 'org-rotifer-desc',
  },
  {
    id: 'euglena',
    title: 'Euglena',
    desc: 'Unique organisms that can both photosynthesize like plants and hunt like animals',
    fact: 'Has a light-sensitive eyespot for navigation',
    imgId: 'org-euglena-q5r8t2',
    titleId: 'org-euglena-title',
    descId: 'org-euglena-desc',
  },
]

const OrganismsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-amber uppercase tracking-widest text-xs font-semibold mb-3">
            Inhabitants
          </p>
          <h2
            id="organisms-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Microscopic Organisms
          </h2>
          <p id="organisms-section-desc" className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the tiny creatures that inhabit every corner of our planet, from freshwater ponds to the human body.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {organisms.map((org) => (
            <div
              key={org.id}
              className="flex flex-col sm:flex-row gap-5 p-5 rounded-2xl border border-white/10 bg-cosmos-card hover:border-cosmos-amber/30 transition-all duration-300"
            >
              <div className="w-full sm:w-40 h-40 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  alt={org.title}
                  data-strk-img-id={org.imgId}
                  data-strk-img={`[${org.descId}] [${org.titleId}] [organisms-section-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 id={org.titleId} className="font-heading text-white font-semibold text-xl mb-2">
                  {org.title}
                </h3>
                <p id={org.descId} className="text-gray-300 text-sm leading-relaxed mb-3">
                  {org.desc}
                </p>
                <p className="text-cosmos-amber text-xs font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cosmos-amber inline-block" />
                  {org.fact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrganismsSection
