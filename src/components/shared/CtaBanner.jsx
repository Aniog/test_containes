import { Link } from 'react-router-dom';
import { AccentButton } from './Buttons';

export default function CtaBanner({ title, subtitle, buttonText = 'Get a Free Sourcing Quote', buttonTo = '/contact' }) {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        {subtitle && <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <AccentButton to={buttonTo} size="lg">{buttonText}</AccentButton>
      </div>
    </section>
  );
}
