import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PROCESS_STEPS } from '@/content/site'

const ProcessOverview = () => (
  <div>
    <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
      {PROCESS_STEPS.map((step) => (
        <li
          key={step.n}
          className="relative bg-white border border-slate-200 rounded-lg p-6 md:p-7"
        >
          <span className="absolute -top-3 left-6 inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wider">
            STEP {step.n}
          </span>
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-primary mb-2">{step.title}</h3>
          <p className="text-sm md:text-base text-primary-600 leading-relaxed">{step.desc}</p>
        </li>
      ))}
    </ol>
    <div className="mt-10 text-center">
      <Link to="/how-it-works" className="btn-secondary">
        Read the full process
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
)

export default ProcessOverview
