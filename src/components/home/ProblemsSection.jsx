const problems = [
  {
    problem: 'Unreliable Suppliers',
    solution: 'We verify factory legitimacy, production capacity, and business licenses before you place orders.',
  },
  {
    problem: 'Quality Issues',
    solution: 'Our on-site quality inspections ensure products meet your specifications before shipment.',
  },
  {
    problem: 'Communication Barriers',
    solution: 'We bridge the language and cultural gap, ensuring clear communication with suppliers.',
  },
  {
    problem: 'Hidden Costs',
    solution: 'Transparent pricing with no hidden fees. We negotiate the best possible rates for you.',
  },
  {
    problem: 'Production Delays',
    solution: 'We monitor production schedules and provide regular updates to keep your project on track.',
  },
  {
    problem: 'Logistics Complexity',
    solution: 'Complete shipping coordination from factory pickup to delivery at your warehouse.',
  },
]

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Importing from China can be challenging. We help you avoid common pitfalls
            and ensure a smooth sourcing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.problem}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed pl-14">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection
