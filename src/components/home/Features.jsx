import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Factory, Layers, ShieldCheck, Wrench } from 'lucide-react'

const features = [
  {
    icon: Factory,
    title: 'Industrial-grade build',
    description:
      'Welded steel frames, hardened bending blades and components selected for decades of workshop use.',
  },
  {
    icon: Layers,
    title: 'Versatile folding range',
    description:
      'Handle thin sheet to heavy plate across box, pan, segment and radius bending applications.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety first',
    description:
      'Every machine includes guards, emergency stops and meets current CE machinery safety standards.',
  },
  {
    icon: Wrench,
    title: 'Global support',
    description:
      'Spare parts, remote diagnostics and on-site service keep your production line moving.',
  },
]

export function Features() {
  return (
    <section id='features' className='bg-white py-20 md:py-28'>
      <Container>
        <SectionHeader
          badge='Why choose us'
          title='Built around your workshop'
          subtitle='We combine precision engineering with straightforward controls so your team can fold faster, safer and more consistently.'
        />

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {features.map((feature) => (
            <div
              key={feature.title}
              className='rounded-2xl border border-slate-100 bg-cloud p-6 transition-shadow hover:shadow-md'
            >
              <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold'>
                <feature.icon className='h-6 w-6' />
              </div>
              <h3 className='mt-5 text-lg font-bold text-navy'>
                {feature.title}
              </h3>
              <p className='mt-2 text-slate-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}