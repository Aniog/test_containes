import { Settings, ShieldCheck, Zap } from 'lucide-react'

export default function About() {
  const specs = [
    {
      name: 'Precision Control',
      description: 'Our proprietary CNC system ensures sub-millimeter accuracy on every fold.',
      icon: Settings,
    },
    {
      name: 'Robust Durability',
      description: 'Built with high-grade steel to withstand continuous industrial use.',
      icon: ShieldCheck,
    },
    {
      name: 'Energy Efficient',
      description: 'Advanced hydraulics delivering maximum force with minimal energy consumption.',
      icon: Zap,
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 id="about-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              The Art of Metal Folding
            </h2>
            <p id="about-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
              At Artitect Machinery, we believe industrial equipment should be both powerful and intuitive. 
              Our double folders are engineered to simplify complex bending tasks while maintaining the rigorous 
              standards required by top manufacturers.
            </p>
            
            <dl className="space-y-8">
              {specs.map((spec) => (
                <div key={spec.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <spec.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-semibold text-slate-900">{spec.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-slate-600">{spec.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-100">
               <img
                  data-strk-img-id="about-machine-img"
                  data-strk-img="[about-desc] [about-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Artitect Machinery in operation"
                  className="w-full h-full object-cover"
                />
            </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 border border-blue-200" />
          </div>
        </div>
      </div>
    </section>
  )
}