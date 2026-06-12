import {
  ShieldCheck,
  Users,
  Globe2,
  FileSearch,
  MessagesSquare,
  Wallet,
} from 'lucide-react';

const points = [
  {
    icon: ShieldCheck,
    title: 'Factories we have actually visited',
    desc: 'Our recommendations come from suppliers our team has met on site, not from cold listings.',
  },
  {
    icon: Users,
    title: 'A bilingual team based in China',
    desc: 'Yiwu and Shenzhen offices, fluent English and Chinese, working in your timezone when needed.',
  },
  {
    icon: Globe2,
    title: 'Buyers in 40+ countries',
    desc: 'Experience with EU, US, UK, Australia, Middle East and South America compliance and shipping requirements.',
  },
  {
    icon: FileSearch,
    title: 'Transparent reporting',
    desc: 'Quotation comparisons, factory audit reports and inspection reports with photos, video and clear pass/fail data.',
  },
  {
    icon: MessagesSquare,
    title: 'One point of contact',
    desc: 'A dedicated project manager handles all communication with suppliers, freight forwarders and inspectors.',
  },
  {
    icon: Wallet,
    title: 'Fair, predictable pricing',
    desc: 'Service-fee or commission models. We disclose how we are paid, with no hidden markups on factory prices.',
  },
];

export default function HomeTrust() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Why buyers work with us
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Trust points that matter when you can&apos;t fly to the factory
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-card"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
