const capabilities = [
  'Double folding machine',
  'Double folder',
  'Sheet metal folder',
  'Sheet metal folding machine',
  'Metal folder',
  'Metal folder machine',
  'Metal folding machine',
]

const CapabilityStrip = () => {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <div className="flex flex-wrap gap-3">
          {capabilities.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 bg-stone-50 px-4 py-2 text-sm font-medium text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilityStrip
