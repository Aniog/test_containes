import { StrikinglyLogo } from './Illustrations'
import { t } from './strings'

export default function TopBar() {
  return (
    <header
      className="bg-white border-b border-strk-divider sticky top-0 z-50"
      style={{ borderBottomColor: '#E2E4E7' }}
    >
      <div className="max-w-content mx-auto px-5 h-14 flex items-center">
        <a
          href="/"
          className="flex items-center gap-2 no-underline"
          aria-label="Strikingly home"
        >
          <StrikinglyLogo />
          <span
            className="font-heading text-sm tracking-widest uppercase"
            style={{
              fontFamily: "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif",
              color: '#2E2E2F',
              letterSpacing: '0.12em',
            }}
          >
            {t.logoText}
          </span>
        </a>
      </div>
    </header>
  )
}
