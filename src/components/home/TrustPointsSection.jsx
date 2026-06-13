import {
  Globe,
  ShieldCheck,
  Users,
  HeadphonesIcon,
  BadgeCheck,
  Clock,
} from 'lucide-react'

const points = [
  {
    icon: Globe,
    title: 'Local Team in China',
    desc: 'Our bilingual team is based in Shanghai with boots on the ground at factories across China.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    desc: 'We maintain a curated database of pre-vetted suppliers we have personally inspected.',
  },
  {
    icon: Users,
    title: '500+ Happy Clients',
    desc: 'From startups to Fortune 500 companies, buyers across 40+ countries trust us.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a single point of contact who knows your business and your products.',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. You see exactly what you are paying for at every step of the process.',
  },
  {
    icon: Clock,
    title: '24/7 Communication',
    desc: 'Real-time updates via email, WhatsApp, or your preferred channel. We keep you in the loop.',
  },
]

export default function TrustPointsSection() {
  return (
    <section className="bg-[#1a2b4a] section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Why Buyers Choose SSourcing China
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We are not just a middleman. We are your eyes, ears, and boots on the ground in China.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-[#c4951a]/15 mb-4">
                <p.icon className="w-5 h-5 text-[#c4951a]" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
