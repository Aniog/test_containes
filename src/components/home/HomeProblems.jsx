import { problems, Icons } from '@/lib/data'

export default function HomeProblems() {
  return (
    <section className="py-20 lg:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Problems We Solve</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-text-primary">
            Sourcing from China Shouldn't Be a Gamble
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            We eliminate the common challenges that make cross-border sourcing risky and stressful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const IconComponent = Icons[problem.icon]
            return (
              <div key={problem.title} className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-error" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{problem.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}