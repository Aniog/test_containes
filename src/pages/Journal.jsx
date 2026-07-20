import React from 'react'

const Journal = () => {
  return (
    <div className="bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold text-brand-ink">Journal</h1>
        <p className="mt-2 text-sm text-brand-muted">Stories, style notes, and behind-the-scenes from Velmora.</p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="overflow-hidden rounded-2xl bg-white">
              <img
                src={`https://picsum.photos/seed/velmora-journal-${i}/800/500`}
                alt="Journal"
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">Style</p>
                <h3 className="mt-2 font-serif text-lg font-medium text-brand-ink">How to style gold jewelry for every season</h3>
                <p className="mt-2 text-sm text-brand-muted">A guide to layering, mixing metals, and keeping your pieces looking new.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Journal
