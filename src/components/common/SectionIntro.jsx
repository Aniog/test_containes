const alignmentClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`flex flex-col gap-4 ${alignmentClasses[align] || alignmentClasses.left}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-blue-700 ring-1 ring-blue-100">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionIntro
