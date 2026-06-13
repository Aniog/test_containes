export default function FeatureCard({ feature }) {
  const Icon = feature.icon
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-amber-600" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
    </div>
  )
}
