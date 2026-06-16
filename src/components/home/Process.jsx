import { process } from '@/data/catalog'

export default function Process() {
  return (
    <section
      className="bg-ink-2 py-24 text-white md:py-32"
      aria-labelledby="process-title"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p
            id="process-eyebrow"
            className="eyebrow eyebrow-line text-brass"
          >
            <span>How we work</span>
          </p>
          <h2
            id="process-title"
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Five steps from first call to folding production parts.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel">
            We have done this more than 4,800 times, but every project starts
            with a conversation. Here is what you can expect.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {process.map((item) => (
            <li
              key={item.id}
              className="relative flex h-full flex-col gap-3 rounded-2xl border border-line bg-ink p-6 md:p-7"
            >
              <span className="text-4xl font-semibold leading-none tracking-tight text-brass">
                {item.step}
              </span>
              <div className="my-2 h-px w-10 bg-line" />
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
