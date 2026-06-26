import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section
      id='hero'
      className='relative flex min-h-[620px] items-center overflow-hidden bg-navy md:min-h-[720px]'
    >
      <div
        className='absolute inset-0 bg-cover bg-center'
        data-strk-bg-id='hero-bg-7a2b9c'
        data-strk-bg='[hero-subtitle] [hero-title]'
        data-strk-bg-ratio='16x9'
        data-strk-bg-width='1600'
        aria-hidden='true'
      />
      <div className='absolute inset-0 bg-navy/75' aria-hidden='true' />

      <Container className='relative z-10 py-20 md:py-28'>
        <div className='max-w-3xl'>
          <Badge className='mb-6'>Precision Metal Folding Machines</Badge>
          <h1
            id='hero-title'
            className='text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl'
          >
            Engineered to Fold. Built to Last.
          </h1>
          <p
            id='hero-subtitle'
            className='mt-6 text-lg text-slate-200 md:text-xl'
          >
            Premium double folding machines, sheet metal folders and metal
            folding solutions for modern fabrication workshops.
          </p>
          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <Button
              asChild
              variant='accent'
              className='px-8 py-4 text-base'
            >
              <a href='#contact'>
                Get a quote
                <ArrowRight className='ml-2 h-4 w-4' />
              </a>
            </Button>
            <Button
              asChild
              variant='outline'
              className='border-white px-8 py-4 text-base text-white hover:bg-white hover:text-navy'
            >
              <a href='#products'>View products</a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}