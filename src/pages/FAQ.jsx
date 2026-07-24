export default function FAQ() {
  const faqs = [
    {
      question: 'What is demi-fine jewelry?',
      answer:
        'Demi-fine jewelry sits between fashion and fine jewelry. Velmora pieces are crafted with 18k gold-plated brass, sterling silver, and carefully set crystals for a premium look at an accessible price.',
    },
    {
      question: 'Is your jewelry hypoallergenic?',
      answer:
        'Yes. All Velmora pieces are nickel-free and made with hypoallergenic materials, making them suitable for most sensitive skin types.',
    },
    {
      question: 'How do I find my ring size or necklace length?',
      answer:
        'Our necklaces include an extender chain for adjustable wear. For ring sizing guidance, please contact us and we will be happy to help.',
    },
    {
      question: 'Do you offer gift packaging?',
      answer:
        'Every order arrives in a Velmora signature box, perfect for gifting. Gift notes are available at checkout.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order ships, you will receive an email with a tracking number so you can follow your package every step of the way.',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Help</p>
        <h1 className="mb-10 font-serif text-4xl text-foreground sm:text-5xl">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="mb-2 font-serif text-xl text-foreground">{faq.question}</h2>
              <p className="leading-relaxed text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
