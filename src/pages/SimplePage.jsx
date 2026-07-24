import { Link } from "react-router-dom"

export default function SimplePage({ eyebrow, title, body, cta }) {
  return (
    <div className="bg-paper pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 pb-32 text-center md:px-8">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 font-display text-5xl font-light leading-[1.05] md:text-6xl">
          {title}
        </h1>
        {body && (
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text md:text-base">
            {body}
          </p>
        )}
        {cta && (
          <Link
            to={cta.to}
            className="mt-10 inline-block border border-ink px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            {cta.label}
          </Link>
        )}
      </div>
    </div>
  )
}
