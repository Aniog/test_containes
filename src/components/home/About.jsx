import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Over 20 years of machine-building experience',
  'ISO 9001 certified manufacturing',
  'Machines shipped to 40+ countries',
  'Custom tooling and automation options',
]

export function About() {
  return (
    <section id='about' className='bg-cloud py-20 md:py-28'>
      <Container>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='relative'>
            <div className='aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 shadow-lg'>
              <img
                alt='ARTITECT MACHINERY factory floor'
                className='h-full w-full object-cover'
                data-strk-img-id='about-factory-floor-3c4d5e'
                data-strk-img='[about-desc] [about-title]'
                data-strk-img-ratio='4x3'
                data-strk-img-width='800'
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className='absolute -bottom-6 -right-6 hidden rounded-2xl bg-navy p-6 text-white shadow-xl lg:block'>
              <p className='text-3xl font-extrabold text-gold'>20+</p>
              <p className='text-sm text-slate-300'>Years of precision</p>
            </div>
          </div>

          <div>
            <SectionHeader
              badge='About us'
              title='Precision is our craft'
              subtitle='ARTITECT MACHINERY designs and builds folding equipment that fabrication teams rely on every day.'
              centered={false}
            />

            <p
              id='about-title'
              className='sr-only'
            >
              ARTITECT MACHINERY factory and team
            </p>
            <p id='about-desc' className='sr-only'>
              Industrial metal folding machine manufacturing workshop
            </p>

            <p className='text-slate-600'>
              From compact sheet metal folders to high-tonnage double folding
              machines, we focus on tight tolerances, long machine life and
              operator-friendly controls. Our engineers work directly with
              customers to configure tooling, backgauges and automation that
              match real production needs.
            </p>

            <ul className='mt-8 space-y-4'>
              {highlights.map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                  <span className='text-slate-700'>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}