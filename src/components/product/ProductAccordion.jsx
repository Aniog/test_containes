export default function ProductAccordion({ sections, openSection, setOpenSection }) {
  return (
    <div className="border-t border-line">
      {sections.map((section) => {
        const isOpen = openSection === section.id

        return (
          <div key={section.id} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? '' : section.id)}
              className="flex w-full items-center justify-between gap-4 bg-transparent px-0 py-5 text-left"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-ink">{section.label}</span>
              <span className="text-xl text-gold">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p className="pb-5 pr-6 text-sm leading-7 text-ink/70">{section.content}</p>}
          </div>
        )
      })}
    </div>
  )
}
