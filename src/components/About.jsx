import { Building2, Users, Globe, Trophy } from 'lucide-react'

const stats = [
  { icon: Building2, value: '40+', label: 'Years in Business' },
  { icon: Users, value: '5000+', label: 'Happy Customers' },
  { icon: Globe, value: '60+', label: 'Countries Served' },
  { icon: Trophy, value: '15+', label: 'Industry Awards' },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-brand-primary/10 text-brand-primary font-semibold px-4 py-1 rounded-full text-sm mb-4">About Us</span>
            <h2 className="section-title">Four Decades of Manufacturing Excellence</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Founded in 1985, ARTITECT MACHINERY has grown from a small workshop into a global leader in sheet metal folding technology. Our commitment to innovation and quality has made us the trusted partner of manufacturers worldwide.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Every machine we produce undergoes rigorous testing and quality control, ensuring it meets the highest industry standards. From double folding machines to heavy-duty metal folders, our products are engineered to deliver precision, reliability, and value.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-200"
                data-strk-bg-id="about-factory-m4n5o6"
                data-strk-bg="[about-title] [about-subtitle]"
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              ></div>
              <div className="space-y-4">
                <div
                  className="aspect-square rounded-xl overflow-hidden bg-slate-200"
                  data-strk-bg-id="about-machine-p7q8r9"
                  data-strk-bg="[about-title] precision machinery"
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="600"
                ></div>
                <div className="bg-brand-primary rounded-xl p-6 text-white">
                  <p className="text-3xl font-bold mb-1">98%</p>
                  <p className="text-slate-300 text-sm">Customer Satisfaction Rate</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-brand-secondary rounded-xl p-4 shadow-xl">
              <p className="text-brand-dark font-bold">Since 1985</p>
              <p className="text-brand-dark/80 text-sm">Trusted Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
