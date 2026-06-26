import { Container } from '@/components/ui/Container'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className='bg-navy text-slate-300'>
      <Container className='py-16'>
        <div className='grid gap-12 md:grid-cols-3'>
          <div>
            <h3 className='text-2xl font-extrabold text-white'>
              ARTITECT <span className='text-gold'>MACHINERY</span>
            </h3>
            <p className='mt-4 leading-relaxed'>
              Precision-engineered double folding machines and sheet metal
              folding solutions for fabrication workshops worldwide.
            </p>
          </div>

          <div>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-white'>
              Quick links
            </h4>
            <ul className='mt-4 space-y-3'>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='transition-colors hover:text-gold'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className='text-sm font-semibold uppercase tracking-wider text-white'>
              Contact
            </h4>
            <ul className='mt-4 space-y-4'>
              <li className='flex items-start gap-3'>
                <MapPin className='mt-0.5 h-5 w-5 shrink-0 text-gold' />
                <span>123 Industrial Way, Manufacturing District, USA</span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='h-5 w-5 shrink-0 text-gold' />
                <a href='tel:+18001234567' className='hover:text-gold'>
                  +1 800 123 4567
                </a>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='h-5 w-5 shrink-0 text-gold' />
                <a
                  href='mailto:info@artitectmachinery.com'
                  className='hover:text-gold'
                >
                  info@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className='border-t border-slate-800 py-6'>
        <Container className='text-center text-sm'>
          &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
          reserved.
        </Container>
      </div>
    </footer>
  )
}