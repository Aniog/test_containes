import { useState } from 'react';
import { Send, CheckCheck, Loader2 } from 'lucide-react';

const initial = {
  name: '',
  company: '',
  email: '',
  country: '',
  phone: '',
  product: '',
  quantity: '',
  targetPrice: '',
  message: '',
};

export default function InquiryForm({ idPrefix = 'inquiry', compact = false, onSubmitted }) {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handle = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = 'Please enter your name';
    if (!values.email.trim()) er.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) er.email = 'That email looks off';
    if (!values.product.trim()) er.product = 'Tell us what product you are sourcing';
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulate submission. In a real project this would post to the contact API.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setValues(initial);
    onSubmitted?.();
  };

  if (status === 'success') {
    return (
      <div className={`rounded-xl border border-[#1E8E5A]/30 bg-[#1E8E5A]/5 p-6 md:p-8 ${compact ? '' : 'p-10'}`}>
        <div className="flex items-center gap-3 mb-2 text-[#1E8E5A]">
          <CheckCheck className="w-6 h-6" />
          <h3 className="text-lg font-bold text-[#1A2230]">Inquiry received</h3>
        </div>
        <p className="text-sm text-[#3D4A5C] leading-relaxed">
          Thank you. A project manager from our Shenzhen office will email you within 1 business day with next steps and a shortlist of suppliers.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-[#0B2545] hover:text-[#E8743B]"
        >
          Submit another inquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${compact ? '' : 'p-2'}`}>
      <div>
        <label htmlFor={`${idPrefix}-name`} className="label-field">Full name *</label>
        <input
          id={`${idPrefix}-name`}
          name="name"
          type="text"
          value={values.name}
          onChange={handle}
          autoComplete="name"
          className="input-field"
          placeholder="Jane Doe"
        />
        {errors.name && <p className="text-xs text-[#C03B2C] mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-company`} className="label-field">Company</label>
        <input
          id={`${idPrefix}-company`}
          name="company"
          type="text"
          value={values.company}
          onChange={handle}
          autoComplete="organization"
          className="input-field"
          placeholder="Your company name"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-email`} className="label-field">Email *</label>
        <input
          id={`${idPrefix}-email`}
          name="email"
          type="email"
          value={values.email}
          onChange={handle}
          autoComplete="email"
          className="input-field"
          placeholder="you@company.com"
        />
        {errors.email && <p className="text-xs text-[#C03B2C] mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-country`} className="label-field">Country / region</label>
        <input
          id={`${idPrefix}-country`}
          name="country"
          type="text"
          value={values.country}
          onChange={handle}
          autoComplete="country-name"
          className="input-field"
          placeholder="United States"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-product`} className="label-field">What product are you sourcing? *</label>
        <input
          id={`${idPrefix}-product`}
          name="product"
          type="text"
          value={values.product}
          onChange={handle}
          className="input-field"
          placeholder="e.g. stainless steel cookware, Bluetooth speakers, ceramic mugs…"
        />
        {errors.product && <p className="text-xs text-[#C03B2C] mt-1">{errors.product}</p>}
      </div>

      <div>
        <label htmlFor={`${idPrefix}-quantity`} className="label-field">Estimated quantity</label>
        <input
          id={`${idPrefix}-quantity`}
          name="quantity"
          type="text"
          value={values.quantity}
          onChange={handle}
          className="input-field"
          placeholder="e.g. 1,000 units / month"
        />
      </div>

      <div>
        <label htmlFor={`${idPrefix}-targetPrice`} className="label-field">Target price (optional)</label>
        <input
          id={`${idPrefix}-targetPrice`}
          name="targetPrice"
          type="text"
          value={values.targetPrice}
          onChange={handle}
          className="input-field"
          placeholder="e.g. USD 4.50 / unit FOB Shenzhen"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${idPrefix}-message`} className="label-field">Anything else we should know?</label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={4}
          value={values.message}
          onChange={handle}
          className="input-field resize-y"
          placeholder="Specifications, packaging, certifications, target port, timeline…"
        />
      </div>

      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[#6B7A90] max-w-md">
          By submitting, you agree to receive a follow-up email from our project managers. We do not share your details with third parties.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 bg-[#E8743B] hover:bg-[#CC6230] disabled:opacity-70 text-white font-semibold px-6 py-3 rounded-md border border-[#E8743B] transition-colors"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send inquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}
