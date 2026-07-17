import { trustItems } from '../../data/storefrontContent'

function TrustBar() {
  return (
    <section className="border-y border-hairline-light bg-espresso px-4 py-4 text-pearl sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-xs uppercase tracking-luxe text-pearl/72 sm:gap-x-8">
        {trustItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export default TrustBar
