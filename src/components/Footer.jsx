import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'

const footerLinks = {
  shop: {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'Earrings', to: '/shop?category=earrings' },
      { label: 'Necklaces', to: '/shop?category=necklaces' },
      { label: 'Huggies', to: '/shop?category=huggies' },
      { label: 'Gift Sets', to: '/shop?category=sets' },
    ],
  },
  help: {
    title: 'Help',
    links: [
      { label: 'Shipping & Delivery', to: '/shipping' },
      { label: 'Returns & Exchanges', to: '/returns' },
      { label: 'Care Guide', to: '/care' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'Our Story', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Sustainability', to: '/sustainability' },
      { label: 'Careers', to: '/careers' },
    ],
  },
}

const paymentIcons = [
  { name: 'Visa', color: '#F5F0EB' },
  { name: 'MC', color: '#F5F0EB' },
  { name: 'Amex', color: '#F5F0EB' },
  { name: 'PayPal', color: '#F5F0EB' },
  { name: 'Apple Pay', color: '#F5F0EB' },
]

export default function Footer() {
  return (
    <footer className="border-t border-velvet-400/30 bg-velvet">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-velvet-50 hover:text-gold transition-colors">
              VELMORA
            </Link>
            <p className="text-velvet-200/60 text-xs mt-4 font-sans max-w-xs leading-relaxed">
              Demi-fine gold jewelry crafted for the woman who lives in her pieces. 
              Quiet luxury, meant to be worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-velvet-200/60 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-200/60 hover:text-gold transition-colors" aria-label="Pinterest">
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a href="#" className="text-velvet-200/60 hover:text-gold transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((group) => (
            <div key={group.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-velvet-50/80 mb-5 font-sans">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-velvet-200/60 hover:text-gold transition-colors font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-velvet-400/20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {paymentIcons.map((icon) => (
              <span
                key={icon.name}
                className="text-[10px] uppercase tracking-wider text-velvet-200/40 border border-velvet-400/20 px-2 py-1 rounded-sm"
              >
                {icon.name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-velvet-200/40 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Custom social icons (not in Lucide)
function PinterestIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.791-.167-2.005.035-2.868.182-.78 1.172-4.971 1.172-4.971s-.299-.599-.299-1.484c0-1.391.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.329-.236.995.5 1.807 1.48 1.807 1.776 0 3.143-1.874 3.143-4.579 0-2.394-1.72-4.068-4.177-4.068-2.845 0-4.515 2.134-4.515 4.34 0 .859.331 1.781.744 2.282a.3.3 0 0 1 .069.287c-.076.316-.245.997-.278 1.136-.044.183-.145.222-.335.134-1.247-.58-2.027-2.405-2.027-3.87 0-3.152 2.29-6.045 6.6-6.045 3.464 0 6.155 2.469 6.155 5.77 0 3.444-2.17 6.213-5.185 6.213-1.012 0-1.964-.526-2.29-1.148l-.623 2.378c-.226.87-.835 1.958-1.243 2.622.935.29 1.931.447 2.96.447 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}