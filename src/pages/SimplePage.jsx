import { Link } from "react-router-dom"

export default function SimplePage({ eyebrow, title, body }) {
  return (
    <main className="bg-cream pt-32 pb-20 min-h-screen">
      <div className="container-velmora max-w-3xl">
        <div className="mb-10">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="display-headline text-4xl md:text-6xl text-ink">{title}</h1>
        </div>
        <div className="space-y-5 text-base md:text-lg text-text-on-light/85 font-light leading-relaxed">
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-ink/10">
          <Link to="/shop" className="text-link">Back to shop</Link>
        </div>
      </div>
    </main>
  )
}
