import CTAButton from './CTAButton'

export default function PageIntro({ eyebrow, title, text, cta = true }) {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow && <p className="text-sm font-bold uppercase tracking-wide text-amber-500">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">{text}</p>
          {cta && <div className="mt-8"><CTAButton /></div>}
        </div>
      </div>
    </section>
  )
}
