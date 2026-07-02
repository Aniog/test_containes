import { Link, useLocation } from 'react-router-dom';

const content = {
  '/shipping': {
    title: 'Shipping & Returns',
    body: 'We offer free worldwide standard shipping on every order. Express options are available at checkout. Returns are accepted within 30 days of delivery for unworn items in original packaging.',
  },
  '/care': {
    title: 'Jewelry Care',
    body: 'Store your pieces in a dry place, avoid contact with perfume and lotions, and clean gently with a soft cloth. Remove jewelry before swimming or exercising to preserve the gold-plated finish.',
  },
  '/faq': {
    title: 'Frequently Asked Questions',
    body: 'All Velmora pieces are 18k gold-plated over a hypoallergenic brass base. Need help choosing a size, tracking an order, or processing a return? Reach out and we will respond within 24 hours.',
  },
  '/contact': {
    title: 'Contact Us',
    body: 'We would love to hear from you. For order support, styling advice, or press inquiries, email us at hello@velmorajewelry.com. Our team replies within one business day.',
  },
  '/sustainability': {
    title: 'Sustainability',
    body: 'Velmora is committed to responsible sourcing and minimizing waste. We use recycled metals where possible, plastic-free packaging, and small-batch production to reduce overstock.',
  },
  '/careers': {
    title: 'Careers',
    body: 'Join a small team obsessed with design, quality, and customer experience. We are always looking for talented makers, creatives, and operators. Send your portfolio to careers@velmorajewelry.com.',
  },
};

export default function Support() {
  const { pathname } = useLocation();
  const page = content[pathname] || { title: 'Page Not Found', body: 'Sorry, this page does not exist.' };

  return (
    <section className="min-h-[70vh] pt-32 pb-24 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-extra-wide text-gold mb-4">Velmora</p>
        <h1 className="font-serif text-4xl lg:text-5xl text-espresso mb-8">{page.title}</h1>
        <p className="text-taupe leading-relaxed mb-10">{page.body}</p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-gold text-cream px-8 py-4 text-xs uppercase tracking-extra-wide font-medium hover:bg-gold-hover transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}
