const Journal = () => {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 text-stone-900 sm:px-6 lg:px-8 md:py-24">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Journal</p>
      <h1 className="mt-4 font-serif text-5xl leading-tight text-stone-900 md:text-6xl">
        Styling notes, gifting edits, and care rituals.
      </h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {[
          'How to layer necklaces for a polished everyday stack',
          'The gifting guide for birthdays, bridesmaids, and milestones',
          'Simple jewelry care habits that preserve shine',
          'Why demi-fine pieces make everyday dressing feel more considered',
        ].map((entry) => (
          <article key={entry} className="rounded-[2rem] border border-stone-300/70 bg-stone-100/70 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Editorial</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900">{entry}</h2>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Journal
