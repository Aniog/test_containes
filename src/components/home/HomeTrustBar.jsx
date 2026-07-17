const HomeTrustBar = ({ points }) => {
  return (
    <section className="border-b border-velmora-sand/70 bg-velmora-pearl text-velmora-ink">
      <div className="page-shell overflow-x-auto py-4">
        <div className="flex min-w-max items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-velmora-ink/70 md:justify-center">
          {points.map((point, index) => (
            <div key={point} className="flex items-center gap-4">
              <span>{point}</span>
              {index < points.length - 1 ? (
                <span className="text-velmora-gold">·</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTrustBar
