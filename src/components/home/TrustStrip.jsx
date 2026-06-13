const trustItems = [
  {
    value: 'Industrial focus',
    label: 'Engineered around real folding operations and production efficiency.',
  },
  {
    value: 'Clean operation',
    label: 'Simple interfaces and intuitive workflows for quicker adoption.',
  },
  {
    value: 'Premium finish',
    label: 'A refined machinery presentation that supports a strong brand image.',
  },
]

const TrustStrip = () => {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3 md:px-10 lg:px-12">
        {trustItems.map((item) => (
          <div key={item.value} className="rounded-2xl border border-slate-200 bg-slate-100 p-5 text-slate-950">
            <p className="text-lg font-semibold text-slate-950">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustStrip
