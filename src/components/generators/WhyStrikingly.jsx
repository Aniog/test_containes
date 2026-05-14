import { IconLive, IconMobile, IconFree } from './Illustrations'
import { t } from './strings'

const HEADING_FONT = "'Brandon Grotesque', 'Josefin Sans', Poppins, sans-serif"
const icons = [IconLive, IconMobile, IconFree]

export default function WhyStrikingly() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: '#F4F6F8', borderTop: '1px solid #E2E4E7' }}
    >
      <div className="max-w-content mx-auto px-5">
        <h2
          className="m-0 mb-8 uppercase text-center"
          style={{
            fontFamily: HEADING_FONT,
            fontWeight: 700,
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            color: '#4B5056',
            lineHeight: 1.2,
          }}
        >
          {t.whyHeading}
        </h2>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
        >
          {t.whyItems.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={item.title}
                className="bg-white p-5 flex flex-col gap-3"
                style={{
                  border: '1px solid #C6C9CD',
                  borderRadius: '3px',
                }}
              >
                <Icon />
                <p
                  className="m-0 uppercase"
                  style={{
                    fontFamily: HEADING_FONT,
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#2E2E2F',
                    letterSpacing: '0.06em',
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="m-0"
                  style={{ color: '#636972', fontSize: '14px', lineHeight: 1.6 }}
                >
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
