function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
      <div className="inline-flex rounded-full bg-amber-300/10 p-3 text-amber-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-300">{description}</p>
    </article>
  )
}

export default FeatureCard
