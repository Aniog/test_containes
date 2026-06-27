import { useState } from 'react'
import { strings } from '@/lib/strings'

const FAQS = [
  {
    q: "What is an AI site generator?",
    a: "An AI site generator is a tool that takes a short text description of your business or idea and instantly builds a complete, ready-to-publish website. It writes the copy, selects the images, and builds the layout automatically, saving you hours of starting from scratch."
  },
  {
    q: "How is a generator different from a template?",
    a: "A template gives you a visual structure that you have to fill in with your own words and pictures. A generator writes the actual content for you based on your prompt, giving you a custom starting point tailored precisely to your specific business."
  },
  {
    q: "Are these generators free to use?",
    a: "Yes. You can generate a site, edit it, and publish it on a Strikingly subdomain entirely for free. We offer premium plans if you want to connect a custom domain or unlock advanced e-commerce features."
  },
  {
    q: "What kinds of sites can I build?",
    a: "Almost anything. Our generators are trained to build business websites, landing pages for marketing, personal portfolios, blogs, online stores, and link-in-bio pages for creators. The directory above shows some of the most popular starting points."
  },
  {
    q: "Can I customize what the generator produces?",
    a: "Absolutely. The generated site is just a starting point. Once the AI finishes building, you're dropped into our drag-and-drop editor where you can rewrite text, replace images, add new sections, or change the entire layout."
  },
  {
    q: "Do generated sites work on mobile?",
    a: "Yes. Every site created by our AI generators is fully responsive by default. It will look great and function perfectly on phones, tablets, and desktop displays without any extra configuration."
  }
]

export default function Faq() {
  const { faq } = strings
  const [openIndex, setOpenIndex] = useState(0) // First item open by default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="max-w-[800px] mx-auto px-5 py-[60px] pb-[80px]">
      <div className="text-center mb-10">
        <h2 className="heading text-[26px] md:text-[32px] text-[color:var(--color-text-heading)]">
          {faq.heading}
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div 
              key={index}
              className="bg-white border border-[color:var(--color-border-card)] rounded-[3px] overflow-hidden"
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none focus:bg-[color:var(--color-bg-light)] hover:bg-[color:var(--color-bg-light)] transition-colors"
                >
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[16px] text-[color:var(--color-text-heading-dark)]">
                    {item.q}
                  </span>
                  <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    className={`text-[color:var(--color-brand-purple)] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </h3>
              <div 
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`faq-answer-container overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 hidden-by-js'}`}
              >
                {/* No-JS fallback: use progressive enhancement.
                    In a true static NO-JS environment, we'd want this visible.
                    A noscript tag in global CSS could reveal all .faq-answers. */}
                <div className="px-5 pb-5 text-[15px] text-[color:var(--color-text-body)]">
                  <p className="m-0">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
