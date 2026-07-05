import { Link } from "react-router-dom"

export default function Placeholder({ title = "Coming Soon", subtitle, back = "/", backLabel = "Back to Home" }) {
  return (
    <div className="container-editorial py-32 text-center">
      <p className="eyebrow-gold mb-3">Velmora</p>
      <h1 className="font-serif text-4xl sm:text-5xl text-ink font-light tracking-tight mb-4">
        {title}
      </h1>
      {subtitle && <p className="text-muted max-w-prose2 mx-auto font-sans mb-8">{subtitle}</p>}
      <Link
        to={back}
        className="btn btn-outline h-11 px-6 text-[0.7rem] mt-2"
      >
        {backLabel}
      </Link>
    </div>
  )
}
