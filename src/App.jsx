import { Sparkles, Rocket, Code2 } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">
            <Sparkles className="h-4 w-4" />
            Powered by Strikingly Agent
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
            Welcome to your new project
          </h1>

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-600">
            Tell Strikingly Agent what you want to build, and watch your idea come to life in real time. Describe a landing page, a dashboard, a store, or any web app you have in mind.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              <Rocket className="h-5 w-5" />
              Get started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-100"
            >
              <Code2 className="h-5 w-5" />
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Sparkles,
              title: 'Describe it',
              text: 'Just tell the agent what you want. Plain language is enough.',
            },
            {
              icon: Code2,
              title: 'See it build',
              text: 'Watch your app appear in the live preview as the agent works.',
            },
            {
              icon: Rocket,
              title: 'Iterate fast',
              text: 'Refine details, add features, and ship in minutes, not weeks.',
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
                {title}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
