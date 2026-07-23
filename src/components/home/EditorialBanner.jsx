import React from 'react'

const EditorialBanner = () => (
  <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
    <div className="grid gap-6 rounded-[2.5rem] border border-velmora-line bg-white/60 p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Velmora Notes</p>
        <h2 className="text-3xl leading-tight sm:text-4xl">
          Premium-but-accessible pieces designed to elevate the everyday.
        </h2>
      </div>
      <div className="grid gap-4 text-sm leading-7 text-velmora-muted sm:grid-cols-2">
        <p>Thoughtfully layered categories for self-purchase and gifting, from polished huggies to occasion-ready sets.</p>
        <p>Clean cart architecture, responsive layouts, and modular product sections make real checkout integration straightforward later on.</p>
      </div>
    </div>
  </section>
)

export default EditorialBanner
