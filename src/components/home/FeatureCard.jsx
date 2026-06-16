const FeatureCard = ({ icon: Icon, title, description }) => (
  <article className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-xl shadow-slate-950/20 backdrop-blur">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-slate-950">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
    <p className="mt-3 leading-7 text-slate-300">{description}</p>
  </article>
)

export default FeatureCard
