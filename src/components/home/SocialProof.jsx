const logos = [
  'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma', 'Loom', 'Intercom', 'Segment'
]

export default function SocialProof() {
  return (
    <section className="py-20 px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-white/30 text-sm mb-10 uppercase tracking-widest">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <span key={logo} className="text-white/20 font-semibold text-lg tracking-tight hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
